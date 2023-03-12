import React from "react";
import { AiOutlineSearch } from "react-icons/ai"


const Header = () => {
    return (
        <>
            <header className="w-full  mt-[10px] md:flex justify-between px-2 md:h-[60px] mb-[50px]"  >
                <div className="flex justify-center item-center">
                    <img className="md:w-[190px] w-[130px] md:mr-[20px] content-center" src="/img/logo-zak-pharmacy.svg" alt="" />
                </div>
                <form action="" className="w-full bg-green flex justify-between item-center md:mr-[20px] px-4 rounded-[16px] text-[10px] xs:text-[13px] ss:text-[16px] sm:text-[18px] md:text-[20px] ">
                    <input type="text" placeholder="Введите название товара или заболевания" className="def-inp " />
                    <button><AiOutlineSearch size={26} color="#fff" /></button>
                </form>
                <div className="log w-full flex justify-between mt-[20px] md:mt-0 md:w-[40%] md:h-[60px]">
                    <button className="text-[white]  md:py-4 py-3 rounded-[10px] bg-green px-[15px] text-[10px] xs:text-[13px] ss:text-[16px] sm:text-[18px] md:text-[20px] ">rus</button>
                    <button className="text-[white] md:py-1 rounded-[10px] px-[10px] py-3 bg-green text-[10px] xs:text-[13px] ss:text-[16px] sm:text-[16px]">Войти/Регистрация</button>
                </div>
            </header>
        </>
    );
}

export default Header