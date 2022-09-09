import { prisma } from "../config/database";
import { CreateQuestion } from "../types/questionTypes";

export async function insertQuestionOnDB(receivedQuestion: CreateQuestion) {
    return await prisma.question.create({
        data: receivedQuestion
    });
}

export async function getQuestion(questionId: number) {
    return await prisma.question.findUnique({
        where: {
            id: questionId
        },
        include: {
            answers: true,
        }
    })
};

export async function getAllQuestions() {
    return await prisma.question.findMany();
}