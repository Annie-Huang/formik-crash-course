import React from 'react';

const Signup = () => {
  return (
    <form>
      <div className='input-container'>
        <input
          id='firstName'
          name='firstName'
          type='text'
          placeholder='First Name'
        />
      </div>
    </form>
  );
};

export default Signup;
