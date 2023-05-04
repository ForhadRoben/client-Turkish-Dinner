import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ChefsDetails = ({ singleChefInfo }) => {
    console.log(singleChefInfo);
    const { _id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = singleChefInfo;

    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <div className='fw-medium'>
                        <p>Years of Experiences:{years_of_experience}</p>
                        <p>Number of Recipes:{number_of_recipes}</p>
                        <p>Total Likes:{likes}</p>

                    </div>
                </Card.Body>
                <div className='d-flex '>
                    <Button variant="outline-info" className=' flex-grow-1 rounded-0' >View Recipes</Button>
                </div>
            </Card>
        </Col>
    );
};

export default ChefsDetails;