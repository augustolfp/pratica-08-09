export interface Question {
    id: number;
    askedBy: string;
    question: string;
}

export type CreateQuestion = Omit<Question, "id">;