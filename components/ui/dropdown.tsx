import React from 'react';

interface DropDownInterface {
  list: { _id: number | string; field: string }[];
  handler: (event: any) => void;
}

const DropDown: React.FC<DropDownInterface> = ({ list, handler }) => {
  return (
    <div>
      <select
        className="rounded-sm border border-c_primary font-light font-poppins ms-5 md:ms-0 h-9 w-36 bg-white dark:bg-c_bg_dark "
        onChange={handler} >
        <option value="">
          Select
        </option>
        {list.map((item) => (
          <option key={item._id} value={item.field} className='uppercase dark:bg-c_bg_dark'>
            {item.field}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
