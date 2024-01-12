'use server'
import User from "@/database/user.model";
import Register from "@/database/user.model";
import  connectToDatabase  from "@/db";
import { registerInterface, userProfileInterface } from "@/interface/user.interface";

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

export const getProfileUser = async (email: string) => {
  try {
     connectToDatabase();
    const user:userProfileInterface | null = await User.findOne({ email }).select({ _id: 1, name: 1, role: 1 }).lean();
    if (!user) {
      return { _id: '', name: '', role: '' };
    }
    return user;
  } catch (error) {
    console.log(error);
    return [];
  }
};
