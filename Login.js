import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

function Login() {
  const dispatch = useDispatch();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Login</h1>
      <button 
        className="bg-green-500 text-white px-4 py-2 mt-4"
        onClick={() => dispatch(login({ name: 'User' }))}
      >
        Log In
      </button>
    </div>
  );
}

export default Login;
