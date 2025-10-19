import React, { memo } from 'react';

const StepsIntroduction = memo (({items}) => {
    return (
        <div className=' hompage container'>
            <section>
                <h2>Comment trouver mon artisan ?</h2>
                <p>Nous allons maintenant voir comment trouver son artisan en seulement 4 étapes simples et intuitives.</p>
                <div className='steps'>
                    {items.map((item, index) => (
                        <div className='step'>
                            <div className='step-content'>
                                <h4>{item.stepHeader}</h4>
                                <p>{item.stepDescription}</p>
                            </div>
                        </div>                
                ))}
                </div>
            </section>
          
        </div>
        
    )
});

export default StepsIntroduction;
