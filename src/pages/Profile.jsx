import React, { useState } from "react";
import Button from '../components/Button'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from "../components/Cards";

const arr = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    }
]



const cardColors = [
    {
        green: '#00AC73',
    },
    {
        darkGreen: '#00504D',
    },
    {
        gray: '#7E7E7E',
    }

]

const Profile = () => {
    return (

        <>
            <Header />

            <div className="main text-center px-2 ">

                <h1 className="font-bold text-[32px] mt-[30px]">Профиль</h1>

                <div className="px-4 shadow-xl mt-[30px] py-5 px-2 xs:px-5 rounded-[15px]">

                    <div>

                        <div className="prof sm:flex justify-between ">
                            <div className="flex items-start justify-center mb-[15px]">
                                <img src="/img/prof-pic.png" alt="" />
                                <img className="ml-[30px] sm:hidden " src="/img/edit-pic.svg" alt="" />
                            </div>
                            <div className="text-start">
                                <span className="font-medium text-[24px]">Максим Максимов</span>
                                <p className="font-medium text-[22px] my-2">+998 90 900 90 90</p>
                                <p className="font-medium text-[22px]">Ташкент, Проспект Халклар Дустлиги, 1</p>
                            </div>
                            <button className="text-[white] hidden sm:block text-center w-[160px] h-[56px] ss:w-[190px] md:py-4 py-3 rounded-[10px] bg-green px-[15px] text-[12px]  ss:text-[16px] sm:text-[18px] md:text-[20px] {props.style} ">Изменить</button>
                        </div>

                        <div className="cards mt-[40px] gap-[20px] grid grid-cols-1 sm:gap-[20px] md:gap-[50px] sm:grid-cols-2 md:gid-cols-3 lg:grid-cols-3 lg:gap-[30px]  xl:grid-cols-4 ">

                           <Cards/>
                           <Cards/>
                            

                        </div>

                    </div>

                </div>

                <div className="shadow-xl mt-[30px] py-5 px-2 xs:px-5 rounded-[15px]">

                    {
                        arr.map(item => <Accordion item={item} />)
                    }


                </div>


            </div>



            <Footer />
        </>

    );
}

export default Profile;


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