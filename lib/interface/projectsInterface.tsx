import { Schema } from "mongoose";

export interface projectInterFace {
    _id: number; // | string | Schema.Types.ObjectId;
    name: string;
    title: string;
    tags: { _id: number; tag: string }[];
    image: string;
    description: string;
    liveLink: string;
    clientLink: string;
    serverLink: string;
    upvotes: number;
    downvotes: number;
    comments: number;
}[];

export interface projectTemplateInterFace {
    _id: number; // | string | Schema.Types.ObjectId;
    name: string;
    title: string;
    tags: { _id: number; tag: string }[];
    image: string;
    description: string;
    liveLink: string;
    clientLink: string;
    serverLink: string;
    upvotes: number;
    downvotes: number;
    comments: number;
};


