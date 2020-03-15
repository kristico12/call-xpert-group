// dependencies
import React, {Fragment} from "react";
import {SideNav, SideNavItem} from 'react-materialize';
import {Link} from 'react-router-dom';

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
            <SideNav className="Side-Nav">
                <Link to="/">
                    <SideNavItem
                        user={{
                            background: 'https://placeimg.com/640/480/nature',
                            email: COMPANY_EMAIL,
                            image: '/img/XpertGroup.png',
                            name: NAME_DEVELOPER
                        }}
                        userView
                    />
                </Link>
                {
                    items.map(info =>
                        <Link to={info.route}>
                            <SideNavItem
                                icon={info.icon}
                            >
                                {info.name}
                            </SideNavItem>
                        </Link>
                    )
                }
            </SideNav>
        </Fragment>
    );
}

export default SideBar;