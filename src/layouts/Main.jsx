import React from 'react';
import Header from '../pages/shared/header/header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/shared/banner/banner';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/rightNav/RightNav';
import Testimonials from '../pages/shared/testimonials/Testimonials';




const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container className='mt-4'>
                <Row>
                    <Col lg={8} className='border'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={4} className='border'>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>


        </div>
    );
};

export default Main;