'use client'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputText from '@/components/ui/input-text';
import { Button } from '@/components/ui/button';
import InputFile from '@/components/ui/input-file';
import { Textarea } from '@/components/ui/textarea';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
         name:'',
         title: '',
         image: '',
         description: '',
         liveLink: '',
         clientLink: '',
         serverLink: ''
    
    }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(5, 'Must be greater then 10 characters or more')
          .required('Required'),
        title: Yup.string()
          .min(10, 'Must be greater then 10 characters or more')
          .required('Required'),
        image : Yup.string()
          .required('Required'),
        description : Yup.string() 
          .required('Required'),
        liveLink : Yup.string()
          .required('Required'),
        clientLink : Yup.string(),
        serverLink : Yup.string()
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className='container h-screen'> 
       <div className="f_row w-full bg-white dark:bg-c_text_black items-center grid 
       grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20 pt-10 pb-10 rounded-md">
        <InputText name='name' label='Name'/>
        <InputText name='title' label='Project Title' />
        <InputText name='liveLink' label='Project Live Link' />
        <InputText name='clientLink' label='Project Client Site Link' />
        <InputText name='serverLink' label='Project Server Site Link' />
        <InputFile name="image" label='Project Cover Photo' />
        <Textarea  name='description' className='col-span-3' />

         <Button className='col-start-2 w-48 ms-14 mt-5 heading_2' variant='submit' size='lg' type="submit">Submit</Button>
       </div>
        

         
        
       
      </Form>
    </Formik>
  );
};

export default SignupForm;