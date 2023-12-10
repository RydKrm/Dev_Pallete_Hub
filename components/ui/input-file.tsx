import { ErrorMessage, Field } from 'formik'
import React from 'react'

const InputFile:React.FC<{ name: string,label:string }> = ({name,label}) => {
  return (
    <div className='f_col h-28'>
        <label className='text-c_label' htmlFor={name}>{label}</label>
        <Field name={name} type="file" className='text-c_input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground dark:text-c_primary' />
        <ErrorMessage name={name} />
     </div>
  )
}

export default InputFile;



