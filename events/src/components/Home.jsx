import * as React from 'react';
import circuit from '../assets/homeImage.jpg';
import Image from 'react-bootstrap/Image';

const Home = (props) => {

    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis main-header">Pixel Pushing</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Learn to use computer code to create computational art, discover local events and connect with others</p>
                    <Image src={circuit} fluid />
                </div>



            </div>




        </>
    )
}

export default Home;