// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// Định nghĩa kiểu cho người dùng
type User = {
  id: number;
  name: string;
  email: string;
};

// API Route
export async function GET() {
  try {
    const [users] = await db.query<User[]>('SELECT * FROM users');
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Database query failed' }, { status: 500 });
  }
}
