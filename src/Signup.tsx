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
    onSubmit: () => {},
  });

  console.log('formik.values', formik.values);

  return (
    <form>
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
    </form>
  );
};

export default Signup;
