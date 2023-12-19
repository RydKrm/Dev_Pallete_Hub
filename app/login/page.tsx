'use client'
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputCheck from '@/components/ui/input-check';
import InputText from '@/components/ui/input-text';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Login = () => {
  return (
    <div className='h-[80vh] w-full flex justify-center items-center '>
      <div className="flex flex-col rounded-md container_2 bg-c_bg_light dark:bg-c_bg_dark ">
        
        <Formik
          initialValues={{
            email: '',
            password:''
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .max(30, 'Must be 15 characters or less')
              .required('Required'),
            password: Yup.string()
              .max(30, 'Must be 20 characters or less')
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className='px-16 pb-16 mx-10 my-5 shadow-2xl'>
            <h2 className="mt-8 mb-5 text-center heading_1">Login</h2>
            <InputText label="" name="email" type="email" placeholder="Email" />
            <InputText label="" name="password" type="password" placeholder="Password" />
            <div className="flex flex-row justify-between"> 
              <InputCheck name="acceptedTerms" >Remember Me</InputCheck>
              <Link href='/forgetPassword' className='heading_4' >Forget Password</Link>
            </div>
            <Button variant={'submit'} type="submit">Submit</Button>
            <div className="Border"> </div>
          </Form>
         
        </Formik>
        <div className="Border"> </div>
      </div>
   </div>
  )
}

export default Login;