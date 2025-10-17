import React, { memo } from 'react'
import { Link } from 'react-router';

const AppFooter = memo(() => {
    return (
        <footer className="footer">

            <div className="container">

                <div className="row">
                    <div className="col-md-6 pb-4">
                        <h5>Contact :</h5>
                        <Link className='nav-link' to="#">
                            <p>101 cours Charlemagne CS 20033<br/>
                            69269 LYON CEDEX 02FRANCE</p>
                        </Link>
                    </div>

                    <div className="col-md-6">
                        <h5>Telephone :</h5>
                        <Link className='nav-link' to="#">
                            <p>+33 (0)4 26 73 40 00</p>
                        </Link>
                    </div>
                </div>

                <div className="row legal gy-2 gy-md-3 gx-md-4">
                    <div className=" col-12 col-md-6 col-lg-3">
                        <Link className="nav-link" to="#">Mentions légales</Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Link className="nav-link" to="#">Données personnelles</Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Link className="nav-link" to="#">Accessibilité</Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Link className="nav-link" to="#">Cookies</Link>
                    </div>
                </div>
        

            </div>
        </footer>
    )
});

export default AppFooter;