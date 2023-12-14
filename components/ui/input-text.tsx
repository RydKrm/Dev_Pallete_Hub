import { ErrorMessage, Field } from 'formik'
import React from 'react'

const InputText:React.FC<{ name: string,label:string }> = ({name,label}) => {
  return (
    <div className='f_col h-28'>
        <label className='heading_3' htmlFor={name}>{label}</label>
        <Field name={name} type="text" className='text-c_input border border-c_primary' />
        <ErrorMessage className='text_h2' name={name} />
     </div>
  )
}

export default InputText;

