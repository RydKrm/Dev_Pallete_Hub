import { Schema, model, models } from "mongoose";

const TagSchema = new Schema({
    tag:{type:String,required:true},
    projectList:[{type:Schema.Types.ObjectId,ref:'Project'}],
    blogList:[{type:Schema.Types.ObjectId, ref:'Blogs'}],
    questionList:[{type:Schema.Types.ObjectId, ref:'Questions'}],
    tutorialList:[{type:Schema.Types.ObjectId, ref:'Tutorials'}]
})

const Tag = models.Tag || model('Tag',TagSchema);
export default Tag;
