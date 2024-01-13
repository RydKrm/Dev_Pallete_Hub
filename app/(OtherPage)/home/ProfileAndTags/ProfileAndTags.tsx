import TagList from '@/components/shared/TagList'
import React from 'react'
import MyProfile from './MyProfile'
import { userData } from '@/lib/data/userData'
import { userInterface } from '@/interface/user.interface'
import UserHomeProfile from '@/components/templates/UserHomeProfile'

const ProfileAndTags = () => {
  return (
    <div className='container_2'>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:mx-16 lg:w-1/3">
         <TagList />
         <MyProfile/>
        </div>
        <div className="w-full lg:w-2/3"> 
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {
            userData.map((user:userInterface,index:number)=>(
              <UserHomeProfile key={user.name} user={user} />
            ))
          }
        </div>
         </div>
      </div>

    </div>
  )
}

export default ProfileAndTags;