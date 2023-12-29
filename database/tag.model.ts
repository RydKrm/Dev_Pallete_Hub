import { Schema, model, models } from "mongoose";

const TagSchema = new Schema({
    tag:{type:String,required:true},
    projectList:[{type:Schema.Types.ObjectId,ref:'Project'}],
    blogList:[{type:Schema.Types.ObjectId, ref:'Blog'}],
    questionList:[{type:Schema.Types.ObjectId, ref:'Question'}],
    tutorialList:[{type:Schema.Types.ObjectId, ref:'Tutorial'}]
})

const Tag = models.Tag || model('Tag',TagSchema);
export default Tag;
