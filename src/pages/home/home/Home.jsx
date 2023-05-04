import React, { useEffect, useState } from 'react';
import ChefsDetails from '../chefsDetails/ChefsDetails';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [chefsInfo, setChefsInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefsInfo')
            .then(res => res.json())
            .then(data => setChefsInfo(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4 className='fw-bold text-center'>Chefs Lists</h4>
            <Row xs={1} md={2} className="g-4">
                {
                    chefsInfo.map(singleChefInfo => <ChefsDetails
                        key={singleChefInfo._id}
                        singleChefInfo={singleChefInfo}
                    ></ChefsDetails>)
                }
            </Row>

        </div>
    );
};

export default Home;