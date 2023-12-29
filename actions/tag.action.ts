'use server'

import Tag from "@/database/tag.model";
import connectToDatabase from "@/db"
import { TagInterface } from "@/lib/interface/user.interface";
import { revalidatePath } from "next/cache";

export const getTagList = async()=>{
 try {
   connectToDatabase();
   const tagList:TagInterface = await Tag.find().lean();
   return tagList;
 } catch (error) {
    console.log(error);
 }
}

export const createTag = async(tag:string) =>{
   try {
    connectToDatabase();
    tag = tag.toLowerCase();
    const tagList:any = await Tag.find({tag});
    if(tagList.length){
      return false;
    }
    await Tag.create({ tag })
    return true;
   } catch (error) {
    console.log(error);
    return false;
   }
}

export const deleteTag = async (tag:string, path: string) => {
   try {
      connectToDatabase();
      //const tagToDelete = await Tag.findById(tagId).lean(); 
      await Tag.deleteOne({ tag });
      revalidatePath(path);
      return true;
   } catch (error) {
      console.log(error);
      return false;
   }
}


