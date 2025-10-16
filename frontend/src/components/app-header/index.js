import React, { memo } from 'react'
import HeaderLeft from './child-cpns/header-left';
import HeaderCenter from './child-cpns/header-center';
import HeaderRight from './child-cpns/header-right';


const AppHeader = memo(() => {
    return (
        <header className="header"> 
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <HeaderLeft />
                    <HeaderCenter />
                    <HeaderRight />
                </div>
            </nav>
        </header>)
});

export default AppHeader;

