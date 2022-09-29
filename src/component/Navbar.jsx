import React from "react";
import {NavLink } from "react-router-dom";

function NavBar() {
  
  return (
    <>
      <nav className="bg-github-blue h-12">
        <div className="flex items-center bg-github-blue h-12 ">
          <div className="flex ml-4 ">
            <div className="flex text-white text-2xl  items-center mr-60 ml-16 ">
              <h1 data-testid="judul" className="mr-24">Testing</h1>


            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
