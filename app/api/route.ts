import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const user = await kv.hgetall('user:me');
    return NextResponse.json(user);
}