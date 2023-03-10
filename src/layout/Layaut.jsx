import React from "react";
import Profile from "../pages/Profile";
import Button from '../components/Button'
import Header from '../components/Header';
import MedCard from "../components/MedCard";

const Layout = () => {
    return (
        <>
            <Header />

            <main className="px-2 w-full text-center">
                <div className="choose mb-[50px] text-center pt-6 w-full h-[300px] sm:h-[400px] md:h-[500px] mt-[50px] rounded-[30px]   bg-[url('./public/img/group.png')] bg-no-repeat bg-center bg-cover  ">
                    <h1 className="text-[white] text-[32px] text-center font-semibold mb-[18px] sm:text-[56px] sm:leading-12 sm:text-[] ">ZAK Pharmacy ваш <br /> здоровый выбор</h1>
                    <p className=" text-[white] text-[24px] text-center font-normal mb-[10px] w-[300px] sm:w-[500px] sm:mb-[50px] lg:mb-[130px] m-auto " >Найти лекарства стало очень просто</p>
                    <Button text="Начать" />
                </div>

                <span className="text-center font-bold text-[32px] ">Популярные товары</span>

                <div className=" mb-[40px] w-full mt-[40px] py-12 flex item-center justify-center  bg-bgGray">

                    <div className="forGoods flex overflow-x-auto overflow-hidden mb-">

                        <MedCard />
                        <MedCard />
                        <MedCard />
                        <MedCard />
                        <MedCard />
                        <MedCard />

                    </div>
                </div>

                <Button text="Подробнее" />
                <br />

                <span className="text-center font-bold text-[32px] ">Часто покупают</span>

                <div className="oftenBuy grid grid-cols-2 mt-[30px] ss:grid-cols-3 max-w-6xl mb-[20px] m-auto md:grid-cols-4 ">

                    <MedCard />
                    <MedCard />
                    <MedCard />
                    <MedCard />
                    <MedCard />
                    <MedCard />
                    <MedCard />
                    <MedCard />

                </div>

                <Button text="Подробнее" />
                <br />

                <div className="aboutUs mt-[50px] p-auto sm:flex sm:justify-between sm:item-center">

                    <img className="w-[600px] sm:mr-[40px]" src="/img/wpic.png" alt="" />

                    <div className="textAbout mt-[30px] text-start ">

                        <h1 className="text-[22px] text-start leading-6 font-semibold w-[420px] md-[600px]  " >Наши товары делают жизнь комфортной и безопасной. Высокий уровень сервиса и понимания к каждому покупателю.</h1>

                        <p className="text-[16px] font-normal mt-[20px] mb-[10px] " >01. Большой ассортимент</p>
                        <span className="text-gray text-[16px]" >Для ванной комнаты с различным покрытием</span>
                        <p className="text-[16px] font-normal mt-[20px] mb-[10px] " >02. Доступные цены</p>
                        <span className="text-gray text-[16px]" >Сантехника под любой запрос</span>
                        <p className="text-[16px] font-normal  mt-[20px] mb-[10px] " >03. Высокий уровень сервиса</p>
                        <span className="text-gray text-[16px] sm:w-[500px] " >Решаем неудовлетворенные потребности покупателей, ценим клиентов как деловых партнеров</span>
                        <p className="text-[16px] font-normal mt-[20px] mb-[10px] " >04. Круглосуточная доставка</p>
                        <span className="text-gray text-[16px] sm:w-[400px]" >Предоставляем круглосуточную доставку  по всему Узбекистану </span>


                    </div>


                </div>


            </main>

        </>
    );
}

export default Layout
