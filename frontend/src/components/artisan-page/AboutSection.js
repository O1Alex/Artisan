import React, { memo } from 'react'

const AboutSection = memo(({artisan}) => {
    return (
        <section className=" about mb-4">
            <h3 className='about-title pt-4 pb-2'> A propos</h3>
            <p className='about-description'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
        </section>
    );
});

export default AboutSection;
