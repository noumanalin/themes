import React, { useState } from "react";
import FiltersSidebar from "../components/Shop/FiltersSidebar";
import Main from "../components/Shop/Main";

const Shop = () => {


    return (
        
        <section className="mt-20 md:px-10 px-3">
            
            <p className=" text-[10px] uppercase opacity-80 tracking-wider py-5  text-primary">Home / Shop </p>
            <h1 className="text-2xl uppercase tracking-wide mb-6">shop</h1>

        <div className=" w-full flex md:flex-row flex-col items-start justify-between gap-5 ">
            <FiltersSidebar />
            <Main />
        </div>
        </section>
    );
};

export default Shop;
