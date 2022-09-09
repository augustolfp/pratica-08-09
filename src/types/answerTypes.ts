export interface Answer {
    id: number;
    answeredBy: string;
    answer: string;
    questionId: number;
}

export type CreateAnswer = Omit<Answer, "id">;
export type ReceivedAnswer = Omit<Answer, "id" | "questionId">;

