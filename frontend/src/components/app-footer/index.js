import React, { memo } from 'react'
import FooterNav from './FooterNav';
import FooterAdresse from './FooterAdresse';
import FooterTel from './FooterTel';



const AppFooter = memo(() => {
    return (
        <footer className="footer mt-auto">

            <div className="container">
                <div className="row">
                    <FooterAdresse />
                    <FooterTel /> 
                    <FooterNav />
                </div>
               
            </div>
        </footer>
    )
});

export default AppFooter;