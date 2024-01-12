'use server'
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import connectToDatabase from "@/db"
import { CreateQuestionInterface, HandleVoting, getQuestionInterface } from "@/interface/question.interface";
import mongoose, { Schema } from "mongoose";

export const createQuestion = async (props: CreateQuestionInterface) => {
  try {
    await connectToDatabase();
    const { title, tagList, description, userId } = props;
    await Question.create({ title, tagList, description, userId});
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Get All Questions 

export const getAllQuestion = async () => {
  try {
    await connectToDatabase();
    const allQuestion:getQuestionInterface[] = await Question.find({}) 
    .populate({
      path: 'tagList',
      model: Tag, 
      select: '_id tag'
    })
    .populate({
      path:'userId',
      model: User,
      select:'_id name photoURL'
    })
    .lean();
    console.log('get all question log from server ', allQuestion);
    return allQuestion;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Get Single Question 

export const getSingleQuestion = async(props:{questionId:Schema.Types.ObjectId}) =>{
  try {
    await connectToDatabase();
    const questionId = props.questionId;
    const question = await Question.findOne({_id:questionId}).lean();
    return question;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Handle Question Voting

export const handleVoting = async (props: HandleVoting)=>{
  try {
    await connectToDatabase();
    const { model, type, userId, documentId, change } = props;
    const VoteModel = mongoose.model(model);
    const voteField = (type === 'upvote') ? 'upVotes' : 'downVotes';
    const updateQuery = (change === 'increase')
      ? { $push: { [voteField]: userId } }
      : { $pull: { [voteField]: userId } };
    await VoteModel.findByIdAndUpdate(documentId, updateQuery);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
