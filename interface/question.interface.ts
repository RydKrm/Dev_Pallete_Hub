import { Schema } from "mongoose";
import { TagInterface } from "./user.interface";

export interface CreateQuestionInterface {
    title:string,
    tagList:TagInterface[],
    description:string,
    userId:Schema.Types.ObjectId
}

export interface HandleVoting {
     type: string,
     userId: Schema.Types.ObjectId,
     documentId: Schema.Types.ObjectId,
     change:string,
     model:string
}

export interface getQuestionInterface {
    _id:Schema.Types.ObjectId,
    title:string,
    tagList:TagInterface[],
    description:string,
    upVotes:[Schema.Types.ObjectId],
    downVotes:[Schema.Types.ObjectId],
    answer:[Schema.Types.ObjectId],
    userId:Schema.Types.ObjectId
}