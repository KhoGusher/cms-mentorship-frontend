"use client";
import styles from "./contact.module.css";

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};



const Contact: FC = () => {

  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <>
   <section>
<div>
<div className="row">
<div className={`mx-auto md:col-10 lg:col-6 flex flex-col justify-center  ${styles.row1}`}>
<div className="relative m-7 p-4 h-auto" style={{ backgroundColor: 'rgba(207, 207, 215, 0.9)', borderRadius: '10px' }}>
<h1 className="p-5 text-center ">Contact Us</h1>
<p className="mb-3 text-left">Let's Talk</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <input
          type='text'
          placeholder='Name'
          className="form-control w-full bg-white bg-opacity-50 rounded-lg border border-gray-300"
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <input
          type='email'
          placeholder='Email'
          className="form-control w-full bg-white bg-opacity-50 rounded-lg border border-gray-300"
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>        
        <textarea
          rows={4}
          placeholder='Type your message'
          
          className="form-control w-full bg-white bg-opacity-50 rounded-lg border border-gray-300"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary bg-blue-950 mb-7">
          Submit
        </button>
      </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>


  );
};

export default Contact;
