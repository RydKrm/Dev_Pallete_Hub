'use client'
import { useEffect, useState } from "react";
import { UserAuth } from "@/context/authContext";
import { getProfileUser } from "@/actions/user.action";
import { userProfileInterface } from "@/interface/user.interface";
const useUserInfo = () => {
    const { user } = UserAuth();
    const [userInfo, setUserInfo] = useState<userProfileInterface | any>();

    //Effect
    useEffect(() => {
      const fetchUser = async()=>{
        if (user) {
          const profile = await getProfileUser(user?.email);
          setUserInfo(profile);
        }
      }
      fetchUser();
    }, [user])   

    const name = userInfo?.name;
    const userId = userInfo?._id;
    const role = userInfo?.role; 
    console.log('user id from profile ',typeof userId)
    return { name,userId,role};
}
export default useUserInfo;