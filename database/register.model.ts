import { Schema, model, models } from "mongoose";

const RegisterSchema = new Schema({
   name:{type:String,require:true},
   email:{type:String, require:true},
   password:{type:String},
   role:{type:String,require:true},
   provider:{type:String},
   createdAt: {type:Date,default:Date.now},
   profession: {type:String},
   photoURL:{type:String},
   tags:[{type:Schema.Types.ObjectId,ref:'Tags'}],
   questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
   answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
   blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
   projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
   tutorials: [{type: Schema.Types.ObjectId, ref: 'Tutorials'}],
   notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
   socials: [{platform:{type:String},url:{type:String}}],
   saves: [{ type: Schema.Types.ObjectId }]
})

const Register = models.User || model('User',RegisterSchema);

export default Register;