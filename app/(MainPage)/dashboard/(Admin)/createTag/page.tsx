import React from 'react'
import AddTag from './AddTag';
import DeleteTag from './DeleteTag';

const CreateTag = () => {
  return (
      <div className='mt-3'>
          {/* <h2 className='text-2xl text-center font-poppins'>Edit Category</h2> */}
          <div className="grid grid-cols-1 mt-3 md:grid-cols-2">
              <AddTag  />
              <DeleteTag />
          </div>
      </div>
  )
}

export default CreateTag;