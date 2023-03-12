import React, { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from "../components/Cards";
import Accordion from "../components/Accordion";

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


