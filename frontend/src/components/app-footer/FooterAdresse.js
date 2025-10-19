import React, { memo } from 'react';
import { Link } from 'react-router';

const FooterAdresse = memo (() => {
    return (
        <div className="col-md-6 pb-3">
            <h5>Contact :</h5>
            <Link className='nav-link' to="#">
                <p>101 cours Charlemagne CS 20033<br/>
                69269 LYON CEDEX 02 FRANCE</p>
            </Link>
        </div>
    )
});

export default FooterAdresse;
