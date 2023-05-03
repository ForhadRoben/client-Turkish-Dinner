import React from 'react';
import { Card } from 'react-bootstrap';

const Banner = () => {
    return (
        <Card className="bg-dark text-white ">
            <Card.Img height={500} src="https://i.ibb.co/cbgS6vk/pexels-farhad-ibrahimzade-8697518.jpg" alt="Card image" />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center text-center'>
                <Card.Title className='fs-1 font fw-medium'>Being Smart Chef Everyday</Card.Title>
                <Card.Text className='fs-3 fst-italic'>
                    If you think becoming a professional chef is all about opening a restaurant and flaunting the chef’s coat with perfect plates, then you are highly mistaken.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Banner;