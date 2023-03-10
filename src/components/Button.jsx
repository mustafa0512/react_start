import React from "react";


const Button = (props) => {
    return (
        <>
            <button className="text-[white] text-center w-[160px] h-[56px] ss:w-[190px] md:py-4 py-3 rounded-[10px] bg-green px-[15px] text-[12px]  ss:text-[16px] sm:text-[18px] md:text-[20px] {props.style} ">{props.text}</button>
        </>
    );
}

export default Button