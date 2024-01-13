import { TagInterface } from '@/interface/user.interface';
import React from 'react';

interface DropDownInterface {
  list: {_id:number,field:string}[];
  handler: (event: any) => void;
}

const DropDown: React.FC<DropDownInterface> = ({ list, handler }) => {
  return (
    <div>
      <select
        className={`font-light bg-white border rounded-sm border-c_primary font-poppins ms-5 md:ms-0 h-9 w-36 dark:bg-c_bg_dark  `}
        onChange={handler} >
        <option value="">
          Select
        </option>
        {list.map((item) => ( 
          <option key={item.field} value={`${item.field}-${item._id}`} className='uppercase dark:bg-c_bg_dark'>
            {item.field}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
