import React, { memo } from 'react'
import { Link } from 'react-router';

const FooterTel = memo(() => {
    return (
         <div className=" tel col-md-6">
            <h5>Telephone :</h5>
            <Link className='nav-link' to="/maintenance">
                <p>+33 (0)4 26 73 40 00</p>
            </Link>
        </div>
    )
});

export default FooterTel;
