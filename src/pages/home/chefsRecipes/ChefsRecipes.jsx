import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefsRecipes = () => {
    // const { id } = useParams();
    const viewRecipes = useLoaderData();
    console.log(viewRecipes);
    return (
        <div>
            {/* <h4>this is chefs:{id}</h4> */}
        </div>
    );
};

export default ChefsRecipes;