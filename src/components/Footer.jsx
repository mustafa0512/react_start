import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-green py-5">

                <div className="foot text-center md:w-[1060px] m-auto px-2 sm:flex items-center">

                    <div className="description text-start mb-[20px] ">
                        <div className="flex items-center justify-center mb-[15px]">
                            <img src="/img/foot-logo.svg" alt="" />
                        </div>
                        <p className="text-[white] text-[14px] m-auto  w-[330px] xs:w-[300px] sm:w-[300px] md:w-[200px]">Серви поддерживает вас и помогает найти лекарства по выгодным ценам и с удобной круглосуточной доставкой почти в любую точку страны. Будьте здоровы с нами!</p>

                    </div>

                    <div className="contact flex justify-between h-[300px]  text-[white]  mt-[20px ] text-[14px] xs:text-[16px] ss:w-[450px] m-auto mb-[30px]">

                        <div className="text-start w-[170px]">
                            <span className="font-bold mb-[20px] text-[16px] xs:text-[20px]" > О компании</span>
                            <p className="mt-[15px]">Контакты</p>
                            <p className="mt-[15px]">Доставка</p>
                            <p className="mt-[15px]">Пользовательское соглашение</p>
                            <p className="mt-[15px]">Стать партнёром</p>
                            <p className="mt-[15px]">Стать курьером</p>
                        </div>

                        <div className="text-start text w-[170px]">
                            <span  className="font-bold mb-[20px] text-[16px] xs:text-[20px]">Помощь</span>
                            <p className="mt-[15px]">Часто задаваемы вопросы</p>
                            <p className="mt-[15px]">Как заказать</p>
                            <p className="mt-[15px]">Обратная связь</p>
                            <p className="mt-[15px]">Правила для оформления отзывов и комментариев</p>
                            <p className="mt-[15px]">Стать курьером</p>
                        </div>

                    </div>

                    <div className="media w-[200px] text-center text-[16px] text-[white] m-auto">
                        <p>Мы в социальных сетях</p>
                        <div className="flex w-[160px] justify-between items-center mt-[20px] m-auto mb-[20px] ">
                            <img src="/img/Facebook.svg" alt="" />
                            <img src="/img/instagram.svg" alt="" />
                            <img src="/img/telegram.svg" alt="" />
                        </div>
                        <p className="font-bold" >+998 71 200-00-00</p>
                    </div>

                </div>

            </footer>
        </>
    );
}

export default Footer