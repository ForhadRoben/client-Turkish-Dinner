import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsDetails = ({ chefInfo }) => {
    // console.log(chefInfo);
    const { _id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chefInfo;

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
                    <Button variant="outline-info" className=' flex-grow-1 rounded-0'><Link to={`/chefInfo/${_id}`} className='fw-semibold text-decoration-none'>View Recipes</Link></Button>
                </div>
            </Card>
        </Col>
    );
};

export default ChefsDetails;