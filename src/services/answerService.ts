import { ReceivedAnswer } from "../types/answerTypes";
import * as answerRepo from "../repositories/answerRepository";

export async function createAnswer(receivedAnswer: ReceivedAnswer, id: number) {
    const formattedAnswer = {
        ...receivedAnswer,
        questionId: id
    };
    const result = await answerRepo.insertAnswerOnDB(formattedAnswer);
    return result;
}