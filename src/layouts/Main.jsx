import React from 'react';
import Header from '../pages/shared/header/header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/shared/banner/banner';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default Main;