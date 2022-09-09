import {CreateQuestion} from "../types/questionTypes";
import * as questionRepo from "../repositories/questionRepository";


export async function createQuestion(questionData: CreateQuestion) {
    const result = await questionRepo.insertQuestionOnDB(questionData);
    return result;
}

export async function getQuestionById(id: number) {
    const result = await questionRepo.getQuestion(id);
    return result;
}

export async function getAllQuestions() {
    const result = await questionRepo.getAllQuestions();
    return result;
}