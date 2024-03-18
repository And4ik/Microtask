import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import styled from "styled-components";
import {S} from "./components/pages/__styles"

const PATH = {
    PAGE1: "/page1",
    PAGE2: "/page2",
    PAGE3: "/page3",
    ERROR404: "/page/error404"
} as const

function App() {
    return (
        <div>
            <S.header><h1>HEADER</h1></S.header>
            <S.body>
                <S.nav>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}> Page1 </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}> Page2 </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}> Page3 </NavLink></S.NavWrapper>
                </S.nav>

                <S.content>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/page1"}/>}/>

                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path={"/*"} element={<Error404/>}/>


                        {/*<Route path={PATH.ERROR404} element={<Error404/>}/>*/}
                        {/*<Route path={"/*"} element={<Navigate to={"/error404"}/>}/>*/}

                    </Routes>
                </S.content>
            </S.body>
            <S.footer>abibas 2023</S.footer>
        </div>
    );
}

export default App;
