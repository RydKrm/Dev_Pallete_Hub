import { Schema, model, models } from "mongoose";

const QuestionSchema = new Schema({
    title:{type:String,required:true},
    tagList:[{type:Schema.Types.ObjectId,ref:'Tags'}],
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: 'Users' },
    answer:[{type:Schema.Types.ObjectId,ref:'Users'}],
    upVotes: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
    downVotes: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
})

const Question = models.Question || model('Question',QuestionSchema);

export default Question;
