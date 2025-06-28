import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

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
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // console.log('formik.values', formik.values);
  console.log('formik.errors', formik.errors);

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
        {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
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
        {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
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
