import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  
  const error = navigate.error;

  if (error) {
    console.error(error);
  }

  return (
    <>
      <div className=' w-[50px] h-[50px] bg-black '>
        <div>
          Error 404 Page not found!
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
