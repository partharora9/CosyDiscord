import { NextResponse } from 'next/server';

export async function GET() {
    const botToken = process.env.DISCORD_BOT_TOKEN;
    const guildId = process.env.NEXT_PUBLIC_DISCORD_GUILD_ID;

    if (!botToken || !guildId) {
        return NextResponse.json({ error: 'Discord configuration missing' }, { status: 500 });
    }

    try {
        const [guildResponse, channelsResponse] = await Promise.all([
            fetch(`https://discord.com/api/v10/guilds/${guildId}?with_counts=true`, {
                headers: { Authorization: `Bot ${botToken}` },
                next: { revalidate: 60 }
            }),
            fetch(`https://discord.com/api/v10/guilds/${guildId}/channels`, {
                headers: { Authorization: `Bot ${botToken}` },
                next: { revalidate: 60 }
            })
        ]);

        if (!guildResponse.ok) {
            console.error('Discord API error status (guild):', guildResponse.status);
            return NextResponse.json({ error: 'Failed to fetch server info' }, { status: guildResponse.status });
        }

        // Channels might fail if bot lacks permission, handle gracefully
        let voiceChannelCount = 0;
        if (channelsResponse.ok) {
            const channels = await channelsResponse.json();
            // Type 2 is Guild Voice
            voiceChannelCount = channels.filter((c: any) => c.type === 2).length;
        }

        const data = await guildResponse.json();

        // Return relevant data
        return NextResponse.json({
            name: data.name,
            id: data.id,
            icon: data.icon ? `https://cdn.discordapp.com/icons/${data.id}/${data.icon}.png` : null,
            description: data.description,
            approximate_member_count: data.approximate_member_count,
            approximate_presence_count: data.approximate_presence_count,
            vanity_url_code: data.vanity_url_code,
            premium_subscription_count: data.premium_subscription_count,
            premium_tier: data.premium_tier,
            voice_channels: voiceChannelCount,
        });

    } catch (error) {
        console.error("Discord API server fetch error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
