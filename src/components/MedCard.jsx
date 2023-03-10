import React from "react";

const MedCard = () => {
    return (

        <>
            <div className="goods w-[200px] mr-[10px] rounded-[12px] h-[260px] bg-[white] px-3">
                <img className="w-[160px] " src="/img/medicine.png" alt="" />
                <p className="text-gray  mt-[15px] mb-[20px] text-[12px] ">Клексан шприц 4000 анти-Ха МЕ/0.4мл №10</p>
                <h3 className="text-green font-bold text-[16px]" >160 000 сум</h3>
            </div>
        </>

    );
}

export default MedCard