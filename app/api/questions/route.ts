import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const topic = searchParams.get('topic');

        const questions = await prisma.question.findMany({
            where: topic ? { topic } : {},
            include: {
                options: true,
            },
            take: 5,
            orderBy: {
                id: 'asc',
            },
        });

        return NextResponse.json({ questions });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
    }
}
