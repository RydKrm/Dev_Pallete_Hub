'use server'

import Register from "@/database/register.model";
import  connectToDatabase  from "@/db";
import { registerInterface } from "@/lib/interface/user.interface";

export const createUser = async(params:registerInterface)=>{

  try {
    console.log('created user called ')
    connectToDatabase();
    const { name, email, password,photoURL } = params;
    const user = await Register.find({ email });
    if (user.length) {
      return false;
    } else {
      const register = await Register.create({
        name,
        email,
        password,
        photoURL,
        role: 'user',
        provider: 'password'
      })
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  
}
