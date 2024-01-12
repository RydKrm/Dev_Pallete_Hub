import { Schema } from "mongoose";

 export interface userInterface {
    _id:number,
    name: string,
    title:string,
    image:string,
    totalQuestion:number,
    totalProject:number,
    totalBlog:number,
    totalTutorial:number,
    totalAnswer:number
 }

 export interface registerInterface {
   name:string|null,
   email:string|null,
   password:string|null,
   photoURL:string|null
 }

export interface GoogleLogInterface {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export interface AuthContextProps {
  user: GoogleLogInterface | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export interface TagInterface {
  _id:Schema.Types.ObjectId,
  tag:string,
  // projectList:[Schema.Types.ObjectId],
  // blogList:[Schema.Types.ObjectId],
  // tutorialList:[Schema.Types.ObjectId],
  // questionList:[Schema.Types.ObjectId]
}

export interface userProfileInterface{
  _id:Schema.Types.ObjectId,
  name:string,
  role:string
}