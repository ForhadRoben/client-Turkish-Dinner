import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipe }) => {
    console.log(recipe);
    const { recipe_image, recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <Col className='d-flex align-items-stretch'>
            <Card>
                <Card.Img variant="top" src={recipe_image} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{recipe_name}</Card.Title>
                </Card.Body>
                <div className='px-4'>
                    <p><span className='fw-semibold'>Cooking Method</span>: {cooking_method}</p>
                    <p><span className='fw-semibold'>Ingredients</span>:
                        {
                            ingredients.map(n => <li>{n}</li>)
                        }
                    </p>
                    <p><span className='fw-semibold'>Ratings</span>: {rating}</p>
                </div>

                <div className='d-flex'>
                    <Button variant="outline-info" className=' flex-grow-1 rounded-0'><Link className='fw-semibold text-decoration-none'>Add To Favorite</Link></Button>
                </div>
            </Card>
        </Col>
    );
};

export default RecipeList;