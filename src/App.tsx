import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {WhoAmI} from "./layout/sections/whoAmI/WhoAmI";
import {Skills} from "./layout/sections/skills/Skills";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Testimonials} from "./layout/sections/testimonials/Testimonials";
import {Awards} from "./layout/sections/awards/Awards";
import {Blogs} from "./layout/sections/blogs/Blogs";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <WhoAmI/>
            <Skills/>
            <Portfolio/>
            <Testimonials/>
            <Awards/>
            <Blogs/>
            <Footer/>
        </div>
    );
}

export default App;
