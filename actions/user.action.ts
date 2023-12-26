'use server'

import Register from "@/database/register.model";
import  connectToDatabase  from "@/db";
import { registerInterface } from "@/lib/interface/user.interface";

const createUser = async(params:registerInterface)=>{
  connectToDatabase();
  const {name,email,password} = params;
  const user = await Register.find({email});
  if(user.length) {
    return false;
  } else {
    const register = await Register.create({
    name,
    email,
    password,
    role:'user',
    provider:'password'
  })  
  return true;
  }
  
}

export default createUser;