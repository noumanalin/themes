import React, { useState } from "react";
import FiltersSidebar from "../components/Shop/FiltersSidebar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Main from "../components/Shop/Main";

const Shop = () => {


    return (

        <>

                     <div className=" bg-gray-100 py-10 space-y-5 md:px-20 px-3">
                         <h1 className="text-2xl uppercase tracking-wider text-primary font-semibold">Shop</h1>
         
                         <p className=" flex items-center tracking-wider text-primary/40">
         
                             <span className=' text-primary flex items-center justify-center'>
                                 Home
                                 <IoIosArrowUp className="rotate-[90deg] font-semibold text-sm mx-1 -mb-1" />
                             </span>
         
                             Shop
                         </p>
                     </div>
            
            
            <div className=" w-full md:px-20 px-3 mt-10 flex md:flex-row flex-col items-start justify-between gap-10 ">
                <FiltersSidebar />
                <Main />
            </div>
        </>
    );
};

export default Shop;
