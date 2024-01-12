import { TagInterface } from '@/interface/user.interface';
import React from 'react';

interface DropDownInterface {
  list: TagInterface[];
  handler: (event: any) => void;
  classList:string
}

const DropDown: React.FC<DropDownInterface> = ({ list, handler,classList }) => {
  return (
    <div>
      <select
        className={`font-light bg-white border rounded-sm border-c_primary font-poppins ms-5 md:ms-0 h-9 w-36 dark:bg-c_bg_dark ${classList} `}
        onChange={handler} >
        <option value="">
          Select
        </option>
        {list.map((item) => ( 
          <option key={item.tag} value={`${item.tag}-${item._id}`} className='uppercase dark:bg-c_bg_dark'>
            {item.tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
