import { ErrorMessage, Field } from "formik";

const InputText : React.FC<{ label: string; name: string; type: string; placeholder: string }> = ({
  label,
  ...props
}) => (
  <div>
    <label htmlFor={props.name}>{label}</label>
    <Field {...props} className='h-10 mb-5 rounded-full w-96 Border bg-c_bg_light dark:bg-c_bg_dark heading_3 ps-3'/>
    <ErrorMessage name={props.name} component="div" />
  </div>
);

export default InputText;