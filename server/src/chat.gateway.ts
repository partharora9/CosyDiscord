import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class ChatGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('ChatGateway');

    private users: number = 0;

    afterInit(server: Server) {
        this.logger.log('Init');
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.users++;
        this.logger.log(`Client connected: ${client.id}`);
        this.server.emit('users', this.users);
    }

    handleDisconnect(client: Socket) {
        this.users--;
        this.logger.log(`Client disconnected: ${client.id}`);
        this.server.emit('users', this.users);
    }

    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: { user: string; text: string }): void {
        this.server.emit('message', {
            user: payload.user,
            text: payload.text,
            time: new Date().toISOString(),
            id: Math.random().toString(36).substr(2, 9),
        });
    }
}
