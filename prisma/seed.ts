import { PrismaClient } from '@prisma/client';
import { questions } from "./question"

const prisma = new PrismaClient();

async function main() {
    for (const questionData of questions) {
        await prisma.question.create({
            data: {
                question: questionData.question,
                topic: questionData.topic,
                difficulty: questionData.difficulty,
                correctAnswer: questionData.correctAnswer,
                options: {
                    create: questionData.options,
                },
            },
        })
    }
    console.log("✅ Seed successful!");
}

main()
    .catch((error) => {
        console.error('❌ Error seeding questions:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });