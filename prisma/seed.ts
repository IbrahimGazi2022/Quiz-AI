import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.question.create({
        data: {
            question: "Who is Anakin Skywalker when he goes to the Dark Side?",
            topic: "Star Wars",
            difficulty: "easy",
            correctAnswer: "C",
            options: {
                create: [
                    { label: "A", text: "Darth Sidious", isCorrect: false },
                    { label: "B", text: "Darth Tyannus", isCorrect: false },
                    { label: "C", text: "Darth Vader", isCorrect: true },
                    { label: "D", text: "Darth Maul", isCorrect: false }
                ]
            }
        }
    });

    await prisma.question.create({
        data: {
            question: "Who trained Yoda?",
            topic: "Star Wars",
            difficulty: "medium",
            correctAnswer: "C",
            options: {
                create: [
                    { label: "A", text: "Qui-Gon Jinn", isCorrect: false },
                    { label: "B", text: "Obi-Wan Kenobi", isCorrect: false },
                    { label: "C", text: "N'Kata Del Gormo", isCorrect: true },
                    { label: "D", text: "Mace Windu", isCorrect: false }
                ]
            }
        }
    });

    console.log("✅ Seed successful!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
