// Dependencies
import React, {Fragment} from 'react';

// routes
import {MenuRoutes} from '../routes.jsx';

// components
import SideBar from "./sideBar.jsx";
import Nadbar from "./nadBar.jsx";

function Dashboard() {
    return (
        <Fragment>
            <Nadbar/>
            <main className="container">
                <div className="row">
                    <div className="col s2">
                        <SideBar/>
                    </div>
                    <div className="col s10">
                        {
                            MenuRoutes
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Dashboard;