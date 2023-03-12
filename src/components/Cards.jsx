import React from "react";

const Cards = () => {
    return (

        <>
            <div className="text-start rounded-[16px] w-[280px] h-[180px] xs:w-[350px] xs:h-[200px] bg-green text-[white] px-5 py-5 ">

                <span className="text-[24px] font-semibold">Maksim Maksimov</span>
                <p className="text-[17px] mt-[30px] font-medium">Основная карта</p>

                <div className="flex justify-between mt-[40px] items-center">
                    <p className="text-[15px] font-medium ">8600 55** **** 6600</p>
                    <div className="rounded-[4px]">
                        <img src="/img/Visa.svg" alt="" />
                    </div>
                </div>

            </div>
        </>

    );
}

export default Cards