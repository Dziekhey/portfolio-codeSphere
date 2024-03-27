import React from 'react';
import hero from "../../assets/team.png"

function Banner() {
 return (
   <div className="w-screen h-screen text-white" style={{
     background: ""
   }}>
     <div class="container mx-auto flex px-5 py-11 items-center justify-center flex-col ">
       <img class="lg:w- md:w-3/6 w-5/6 mb-10 object-cover object-cover" alt="hero" src={hero} />
     </div>
   </div >
 );
}

export default Banner