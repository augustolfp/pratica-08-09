import { prisma } from "../config/database";
import { CreateAnswer } from "../types/answerTypes";

export async function insertAnswerOnDB(receivedAnswer: CreateAnswer) {
    return await prisma.answer.create({
        data: receivedAnswer
    });

}

export async function getAnswersFromQuestionById(questionId: number) {
    return await prisma.answer.findMany({
        where: {
            id: questionId
        }
    });

}