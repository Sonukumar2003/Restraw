
import React from 'react';
import { Link } from 'react-router-dom';
import{ HiOutlineArrowNarrowRight} from "react-icons/hi";

const NotFound =() => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notfound"/>
          <h1>Oops! Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to={"/"}>
            Go Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;