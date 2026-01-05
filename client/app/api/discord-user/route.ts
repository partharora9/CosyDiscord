import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('id');
    const botToken = process.env.DISCORD_BOT_TOKEN;

    if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    if (!botToken) {
        console.error("DISCORD_BOT_TOKEN is missing in environment variables.");
        return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    try {
        const res = await fetch(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
                Authorization: `Bot ${botToken}`,
            },
            next: { revalidate: 60 }, // Cache for 60 seconds to avoid rate limits
        });

        if (!res.ok) {
            console.error(`Discord API Error: ${res.status} ${res.statusText}`);
            return NextResponse.json({ error: 'Failed to fetch user data' }, { status: res.status });
        }

        const data = await res.json();

        // Construct avatar URL
        const avatarUrl = data.avatar
            ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=256`
            : null; // Fallback to null if no avatar set (client handles default)

        return NextResponse.json({ avatarUrl });
    } catch (error) {
        console.error("Error fetching Discord avatar:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
