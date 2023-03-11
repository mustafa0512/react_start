import React from "react";
import Button from '../components/Button'
import Footer from "../components/Footer";
import Header from '../components/Header';
import MedCard from "../components/MedCard";

const Home = () => {
    return (

        <>
            <Header />

            <div  className=" px-2 w-full text-center mb-[50px]">
            <div className="choose mb-[50px] text-center pt-6 w-full h-[300px] sm:h-[400px] md:h-[500px] mt-[50px] rounded-[30px]   bg-[url('./public/img/group.png')] bg-no-repeat bg-center bg-cover  ">
                <h1 className="text-[white] text-[24px] xs:text-[28px] text-center font-semibold mb-[30px] sm:text-[56px] sm:leading-12 md:mb-[50px]  ">ZAK Pharmacy ваш <br /> здоровый выбор</h1>
                <p className=" text-[white] text-[18px] xs:text-[22px] text-center font-normal mb-[30px] w-[300px] sm:w-[500px] sm:mb-[50px] md:mb-[100px] m-auto " >Найти лекарства стало очень просто</p>
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

            <div className="md:w-[1060px] m-auto aboutUs mt-[50px] p-auto sm:flex sm:justify-between sm:item-center">

                <img className="w-[500px] sm:w-[300px] sm:h-[310px] md:w-[500px] md:h-[530px] sm:mr-[40px]" src="/img/wpic.png" alt="" />

                <div className="textAbout mt-[30px] text-start ">

                    <h1 className="text-[18px] text-start leading-6 font-semibold sm:w-[380px]  xs:w-[420px] md-[600px] sm:text-[22px] " >Наши товары делают жизнь комфортной и безопасной. Высокий уровень сервиса и понимания к каждому покупателю.</h1>

                    <p className="text-[14px] font-normal mt-[20px] mb-[10px] sm:text-[16px] " >01. Большой ассортимент</p>
                    <span className="text-gray text-[14px] sm:text-[16px]" >Для ванной комнаты с различным покрытием</span>
                    <p className="text-[14px] font-normal mt-[20px] mb-[10px] sm:text-[16px] " >02. Доступные цены</p>
                    <span className="text-gray text-[14px] sm:text-[16px]" >Сантехника под любой запрос</span>
                    <p className="text-[14px] font-normal  mt-[20px] mb-[10px] sm:text-[16px] " >03. Высокий уровень сервиса</p>
                    <span className="text-gray text-[14px] sm:text-[16px] " >Решаем неудовлетворенные потребности покупателей, ценим клиентов как деловых партнеров</span>
                    <p className="text-[14px] font-normal mt-[20px] mb-[10px] sm:text-[16px] " >04. Круглосуточная доставка</p>
                    <span className="text-gray text-[14px] sm:w-[400px] sm:text-[16px]" >Предоставляем круглосуточную доставку  по всему Узбекистану </span>

                </div>


            </div>

            <div className="useApp w-[300px] xs:w-[420px] h-[320px] xs:w-[430px] bg-darkGreen mt-[30px] rounded-[30px] text-center m-auto py-5 md:py-0 md:flex items-center overflow-hidden px-2 ss:w-[600px] sm:w-[750px] md:w-[1000px] lg:w-[1200px] ">

                <span className="text-[white] font-bold text-[20px]  xs:text-[20px] ss:text-[20px] ">Пользуйтесь нашим приложением для большего удобства</span>

                <img className="hidden md:block" src="/img/use.png" alt="" />

            </div>

            </div>
            
            <Footer/>
        </>

    );
}

export default Home;