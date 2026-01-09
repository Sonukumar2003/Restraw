
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        } cd
        
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);


  return (
    <>
    <section className='notFound'>
      <div className='container'>
        <img src="/sandwich.png" alt="success" />
        <h1>Order Placed Successfully! Redirecting to Home in {countdown} seconds....</h1>
        <Link to={" / "}>Go to Home <HiOutlineArrowNarrowRight /> </Link>
      </div>
    </section>
    </>
  );
  
}

export default Success;
