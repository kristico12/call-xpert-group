// dependencies
import React, {Fragment} from "react";
import {SideNav, SideNavItem} from 'react-materialize';
import { Link } from 'react-router-dom';

// constans
import {COMPANY_EMAIL, NAME_DEVELOPER} from '../utils/constans';

const items = [
    {name: 'Home', route: '/', icon: 'home'},
    {name: 'Conversacion', route: '/conversation_history', icon: 'chat'},
    {name: 'Calificacion', route: '/qualification', icon: 'note_add'},
]

function SideBar() {
    return (
        <Fragment>
            <SideNav className="Side-Nav" >
                <SideNavItem
                    user={{
                        background: 'https://placeimg.com/640/480/nature',
                        email: COMPANY_EMAIL,
                        image: '/img/XpertGroup.png',
                        name: NAME_DEVELOPER
                    }}
                    userView
                />
                {
                    items.map(info =>
                        <SideNavItem
                            icon={info.icon}
                        >
                            <Link to={info.route}>{info.name}</Link>
                        </SideNavItem>
                    )
                }
            </SideNav>
        </Fragment>
    );
}

export default SideBar;