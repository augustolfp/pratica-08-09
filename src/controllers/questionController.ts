import { Request, Response } from 'express';
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const receivedQuestion = req.body;
  
  try{
    await questionService.createQuestion(receivedQuestion);
    return res.sendStatus(201);
  }
  catch(error) {
    return res.status(500).send(error);
  }
}

export async function createAnswer(req: Request, res: Response) {
  const receivedAnswer = req.body;
  const {id} = req.params;

  try{
    await answerService.createAnswer(receivedAnswer, Number(id));
    return res.sendStatus(201);
  }
  catch(error) {
    return res.status(500).send(error);
  }
}

export async function get(req: Request, res: Response) {
  try{
    const questions = await questionService.getAllQuestions();
    return res.status(200).send(questions);
  }
  catch(error) {
    return res.status(500).send(error);
  }
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params;

  try{
    const question = await questionService.getQuestionById(Number(id));
    return res.status(200).send(question);
  }
  catch(error) {
    return res.status(500).send(error);
  }
}
