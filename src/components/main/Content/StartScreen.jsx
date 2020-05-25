import React, { useState } from 'react';
import s from './Content.module.scss'
import { NavLink } from 'react-router-dom';
const StartScreen = (props) => {
    const [lng, setlng] = useState("eng");
    return <>
            {lng === "eng"
            ? <StartScreenEng setlng={setlng} device={props.device} />
            : <StartScreenRus setlng={setlng} device={props.device} />}
            <NavLink className={s.started} to={`/profile/${+ props.auth_user_id}`}>
                {lng === "eng" ? "Get started": "Начать знакомиться"}
            </NavLink>
            </>
}

const StartScreenEng = (props)=>{
    return(
            <div className={s.startScreen}>
                <div className={s.chgLanguage}>
                    <span onClick={() => props.setlng("rus")}><i className="material-icons">language</i>Rus</span>
                </div>
                <h1>Vision</h1>
                <div className={s.startScreen_text}><h2>I welcome you here!</h2>
                    <p>This is a test social network "Vision.com". With this network, I learn web development in practice.<br></br>
            Based on "Vision.com" lies <a href="https://reactjs.org/" target="_blank">React</a> and
            <a href="https://redux.js.org/" target="_blank"> Redux</a>.</p>
                    <p>I used both "React hooks" and class components to try different development approaches.
                <br></br>
                You can check the full list of technologies and solutions with me:
                 <a href="mailto:batureevich@yandex.ru"> batureevich@yandex.ru</a></p>

                    <h3>At the moment, there are 3 pages working here.</h3>
                    <ul>
                        <li>Users - a Page with users.</li>
                        <li>Profile - a Page with data about a user.</li>
                        <li>Messages - a Page with messages.</li>
                    </ul>
                    <p>You can navigate the page using the sidebar on the
            {props.device === "mobile" ? " bottom" : " left side"} of the screen. Glad to be of service!</p>
                </div>
            </div>
    )
}
const StartScreenRus = (props)=>{
    return(
            <div className={s.startScreen}>
                <div className={s.chgLanguage}>
                    <span onClick={() => props.setlng("eng")}><i className="material-icons">language</i>Eng</span>
                </div>
                <h1>Vision</h1>
                <div className={s.startScreen_text}><h2>Приветствую вас здесь! </h2>
                    <p>Это тестовая социальная сеть "vision.com",  с помощью этой сети я обучаюсь веб разработке на практике.
В основе Vision.com лежит <a href="https://reactjs.org/" target="_blank">React</a> и
            <a href="https://redux.js.org/" target="_blank"> Redux</a>.</p>
                    <p>Я использовал как "хуки" так и классовые компоненты, чтобы попробовать разные подходы разработки.
                <br></br>
                Полный список технологий и решений можете уточнить лично у меня:
                <a href="mailto:batureevich@yandex.ru"> batureevich@yandex.ru</a></p>

                    <h3>На данный момент  работают 3 страницы.</h3>
                    <ul>
                        <li>Users - Страница с пользователями.</li>
                        <li>Profile - Страница с данными о каком - либо пользователе.</li>
                        <li>Messages  - Страница сообщений.</li>
                    </ul>
                    <p>Навигация по странице осуществляется с помощью сайдбара
                 в  {props.device === "mobile" ? " нижней" : " левой"} части экрана. Рад быть полезным! </p>
                </div>
            </div>
    )
}

export default StartScreen;