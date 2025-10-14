import React, { memo } from 'react'
import HeaderLeft from './child-cpns/header-left';
import HeaderCenter from './child-cpns/header-center';
import HeaderRight from './child-cpns/header-right';


const AppHeader = memo(() => {
    return (
        <div> 
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </div>)
});

export default AppHeader;

