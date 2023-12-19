import React from "react";
import { ErrorMessage, Field } from "formik";

interface InputCheckProps {
    name: string;
    children: React.ReactNode; 
}

const InputCheck: React.FC<InputCheckProps> = ({ children, ...props }) => (
    <div>
        <label>
            <Field type="checkbox" {...props} className='mb-4 ms-3 me-2 dark:text-gray-500 text-[16px]'/>
            {children}
        </label>
        <ErrorMessage name={props.name} component="div" />
    </div>
);

export default InputCheck;
