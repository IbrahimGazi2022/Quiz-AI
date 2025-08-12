import { NextResponse } from 'next/server';
import { db } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const topic = searchParams.get('topic');

        const questions = await db.question.findMany({
            where: topic ? { topic } : {},
            include: {
                options: true,
            },
        });

        const shuffled = questions.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 5);

        return NextResponse.json({ questions: selected });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
    }
}
