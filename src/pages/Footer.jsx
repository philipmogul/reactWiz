import React from "react";

export default function Footer()
{
        // Variables can be created before the return 
        const developername = "Philip Mumo";
        const copyrightyear = "2024";
        const currentdate = new Date();
    return(
        <>
        <h2>Developed by: {developername} &nbsp; , &nbsp;  
          Copyright &copy; {copyrightyear} &nbsp; , &nbsp; 
          Current Date: {currentdate.toDateString()}
        </h2> 
        </>
    );
}
