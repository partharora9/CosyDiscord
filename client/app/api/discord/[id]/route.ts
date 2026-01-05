import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Prevent static optimization
export const revalidate = 60; // Revalidate at most every 60 seconds

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const botToken = process.env.DISCORD_BOT_TOKEN;

    if (!botToken) {
        return NextResponse.json({ error: 'DISCORD_BOT_TOKEN not configured' }, { status: 500 });
    }

    try {
        const response = await fetch(`https://discord.com/api/v10/users/${id}`, {
            headers: {
                Authorization: `Bot ${botToken}`,
            },
            // We set it to 60 seconds so if a user changes their PFP, it updates on the site within a minute.
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            console.error(`Failed to fetch user ${id}: ${response.status}`);
            return NextResponse.json({ error: 'Failed to fetch user' }, { status: response.status });
        }

        const data = await response.json();

        // Return only necessary data to the frontend
        return NextResponse.json({
            id: data.id,
            username: data.username,
            avatar: data.avatar, // This hash changes when the user updates their PFP
            discriminator: data.discriminator,
            global_name: data.global_name,
            avatar_decoration: data.avatar_decoration // Added decoration hash
        });
    } catch (error) {
        console.error("Discord API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
