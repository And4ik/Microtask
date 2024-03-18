
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/__styles"
import {ModelAdidas} from "./components/pages/ModelAdidas";
import {ModelPuma} from "./components/pages/ModelPuma";

const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    ERROR404: "/page/error404",
    ADIDAS:"/adidas/:id",
    PUMA:"/puma/:id",
} as const

function App() {
    return (
        <div>
            <S.header><h1>HEADER</h1></S.header>
            <S.body>
                <S.nav>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}> Adidas </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}> Puma </NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}> Abibas </NavLink></S.NavWrapper>
                </S.nav>

                <S.content>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/adidas"}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.ADIDAS} element={<ModelAdidas/>}/>
                        <Route path={PATH.PUMA} element={<ModelPuma/>}/>

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
