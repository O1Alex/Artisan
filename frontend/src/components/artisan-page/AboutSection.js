import React, { memo } from 'react'

const AboutSection = memo(({artisan}) => {
    return (
        <section className=" mb-4">
            <h3 className='about-title pt-4 pb-2'> A propos</h3>
            <p className='about-description'>{artisan?.description}</p>
        </section>
    );
});

export default AboutSection;
