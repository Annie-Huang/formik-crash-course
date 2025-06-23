import React from 'react';
import { useFormik } from 'formik';

type Values = {
  firstName: string;
  lastName: string;
  email: string;
};
const Signup = () => {
  const initialValues: Values = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // console.log('formik.values', formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='input-container'>
        <input
          id='firstName'
          name='firstName'
          type='text'
          placeholder='First Name'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className='input-container'>
        <input
          id='lastName'
          name='lastName'
          type='text'
          placeholder='Last Name'
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className='input-container'>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Signup;
