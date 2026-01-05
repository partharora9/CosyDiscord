import { NavigationAction } from "./navigation-action";
import { NavigationItem } from "./navigation-item";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserButton } from "@/components/auth/user-button";

// Mock data until DB is connected
const servers = [
    {
        id: "1",
        name: "Cosy Official",
        imageUrl: "https://github.com/shadcn.png"
    },
    {
        id: "2",
        name: "React Developers",
        imageUrl: "https://github.com/facebook.png"
    }
];

export const NavigationSidebar = async () => {
    return (
        <div
            className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3"
        >
            <NavigationAction />
            <Separator
                className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
            />
            <ScrollArea className="flex-1 w-full">
                {servers.map((server) => (
                    <div key={server.id} className="mb-4">
                        <NavigationItem
                            id={server.id}
                            name={server.name}
                            imageUrl={server.imageUrl}
                        />
                    </div>
                ))}
            </ScrollArea>
            <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
                {/* <ModeToggle /> */}
                {/* <UserButton /> */}
                <div className="h-10 w-10 rounded-full bg-zinc-500/50" /> {/* Placeholder User */}
            </div>
        </div>
    );
};
