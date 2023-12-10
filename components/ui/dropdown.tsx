import React from 'react';

interface DropDownInterface {
  list: { _id: number | string; field: string }[];
  handler: (event: any) => void;
}

const DropDown: React.FC<DropDownInterface> = ({ list, handler }) => {
  return (
    <div>
      <select
        className="rounded-sm border_c font-light font-poppins ms-5 md:ms-0 h-9 w-36 bg-white dark:bg-c_text_black border"
        onChange={handler} >
        <option value="">
          Select
        </option>
        {list.map((item) => (
          <option key={item._id} value={item.field} className='uppercase'>
            {item.field}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
