'use client'
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputCheck from '@/components/ui/input-check';
import InputText from '@/components/ui/input-text';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { googleSignIn,githubSignIn,signInUser } = UserAuth();
  const [logInfo,setLogInfo] = useState<boolean>(false);
   const router = useRouter();
  const handleGoogle = async () => {
    try {
      await googleSignIn();
       router.push('/');
    } catch (error) {
      console.log(error);
    }
  } 
  const handleGithub = async () => {
    try {
      await githubSignIn();
       router.push('/');
    } catch (error) {
      console.log(error);
    }
  } 

  const handleLogin = async(email:string,password:string) => {
    try {
     const login =  await signInUser(email,password);
     if(login) {
      router.push('/');
     } else {
        setLogInfo(true);
     }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex items-center justify-center w-full '>
      <div className="flex flex-col rounded-md container_2 bg-c_bg_light dark:bg-c_bg_dark ">
        <div className="px-16 pb-16 mx-10 my-5 shadow-2xl "> 
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
            handleLogin(values.email,values.password);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className=''>
            <h2 className="mt-8 mb-5 text-center heading_1">Login</h2>
            <InputText label="" name="email" type="email" placeholder="Email" />
            <InputText label="" name="password" type="password" placeholder="Password" />
            <div className="flex flex-row justify-between"> 
              <InputCheck name="acceptedTerms" >Remember Me</InputCheck>
              <Link href='/forgetPassword' className='heading_4' >Forget Password</Link>
            </div>
            <Button variant={'submit'} type="submit" className='ms-3'>Submit</Button>
            <div className="mt-3 Border"> </div>
          </Form>
        </Formik>
        <h2 className='mt-2 text-center heading_3'> Login With</h2>
        <div className="flex flex-row justify-between mt-3 mx-7">
            <Button variant={'submit'} onClick={handleGoogle} > <FontAwesomeIcon icon={faGoogle} className='mb-1 text-lg me-1' /> Google </Button>
            <Button variant={'submit'} onClick={handleGithub} > <FontAwesomeIcon icon={faGithub} className='mb-1 text-lg me-1' /> Github </Button>
        </div>
          <h2 className="mt-5 text-center heading_4">Do not have a account. <Link href='/register' className='text-red-400'>Register</Link></h2>
          {logInfo && <h2 className='my-4 text-center heading_4'>Invalid email or password </h2>}
        </div>
      </div>
   </div>
  )
}

export default Login;