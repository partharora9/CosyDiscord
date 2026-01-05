import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('https://discord.com/api/v9/invites/cosy?with_counts=true', {
            next: { revalidate: 60 }
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch discord stats' }, { status: response.status });
        }

        const data = await response.json();

        return NextResponse.json({
            online: data.approximate_presence_count,
            total: data.approximate_member_count
        });
    } catch (error) {
        console.error("Discord API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
