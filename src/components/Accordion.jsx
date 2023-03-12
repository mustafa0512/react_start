import { useState } from "react";
import React from "react";


const Accordion = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (

        <>


            <div onClick={() => setIsOpen(!isOpen)} className={` ${isOpen ? " h-fit" : "h-[50px]"} overflow-hidden px-4 py-4`} >
                <div className="accTop w-full flex items-center justify-between mb-[20px]" >
                    <p className={`${isOpen ? " font-semibold" : "font-normal"}  text-[20px] select-none`}> Заказ №12564</p>
                    <div className={` ${isOpen ? "bg-[url('./public/img/toUp.svg')]" : "bg-[url('./public/img/toDawn.svg')]"} w-[16px] h-[9px]  bg-[url('./public/img/toDawn.svg')]`}></div>
                </div>
                <div className="accBottom text-start">
                    <div className="flex items-center justify-between ">
                        <p className="font-semibold text-[16px] xs:text-[20px]">Корзина</p>
                        <p className="text-green font-semibold text-[16px] xs:text-[20px]">Доставлено</p>
                    </div>
                    <div className="flex text-start mt-[10px]">
                        <div>
                            <p className=" text-[12px] xs:text-[14px] ss:text-[20px]">Вентолин АЭРОЗ Д/ИНГАЛ 100МКГ/ДОЗА 200ДОЗ</p>
                            <p className="text-[12px] xs:text-[14px] ss:text-[20px]">Хумира р-р д/ин. 40мг/0.4мл 0.4мл №2</p>
                        </div>
                        <div className="ml-[40px] flex-col gap-10px ">
                            <p className="text-[10px] xs:text-[12px] ss:text-[20px]">1 штука</p>
                            <p className="text-[10px] xs:text-[12px] ss:text-[20px]">2 штука</p>

                        </div>

                    </div>

                    <p className="font-semibold text-[14px] xs:text-[20px] ss:text-[20px] my-[10px]">Адрес</p>
                    <p className=" text-[12px] xs:text-[14px] ss:text-[20px]">Ташкент, Проспект Халклар Дустлиги, 1</p>

                    <p className="font-semibold text-[14px] xs:text-[20px] ss:text-[20px] my-[10px]">Сумма</p>
                    <p className=" text-[12px] xs:text-[14px] ss:text-[20px]">2 420 000 сум</p>

                </div>
            </div>

        </>

    );
}

export default Accordion