// dependencies
import React, { Fragment} from "react";
import {Carousel} from 'react-materialize';

function Home() {
    return (
        <Fragment>
            <div className="row flex-center">
                <h1>Bienvenido</h1>
            </div>
            <div className="row flex-center">
                <Carousel
                    images={[
                        'http://xpertgroup.co/wp-content/uploads/2018/11/e-precing-b-420x273.jpg',
                        'http://xpertgroup.co/wp-content/uploads/2019/11/logo-imperium-420x273.jpg',
                        'http://xpertgroup.co/wp-content/uploads/2018/11/chatbot-b-420x273.jpg',
                        'http://xpertgroup.co/wp-content/uploads/2018/11/plano-x-b-420x273.jpg',
                        'http://xpertgroup.co/wp-content/uploads/2018/11/treem-b-420x273.jpg'
                    ]}
                    options={{
                        numVisible: 5,
                        padding: 0,
                        shift: 1
                    }}
                />
            </div>
        </Fragment>
    );
}

export default Home;