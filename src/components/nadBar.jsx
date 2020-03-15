// dependencies
import React, {Fragment} from "react";
import {Navbar} from 'react-materialize';
import {Link} from 'react-router-dom';

function Nadbar() {
    return (
        <Fragment>
            <Navbar
                brand={<Link className="brand-logo" to="/"><img src="/img/XpertGroupLogo.png"/></Link>}
                centerLogo
                menuIcon={null}
            >
            </Navbar>
        </Fragment>
    );
}

export default Nadbar;