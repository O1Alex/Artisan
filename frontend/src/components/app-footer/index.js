import React, { memo } from 'react'
import FooterLeft from './child-cpns/footer-left';
import FooterRight from './child-cpns/footer-right';

const AppFooter = memo(() => {
    return (
        <div>
            <FooterLeft />
            <FooterRight />
        </div>)
});

export default AppFooter;