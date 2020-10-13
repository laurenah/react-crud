import React from 'react';

const Error = () => {
    return(
        <div className='error-container'>
            <div className='error-wrap'>
                <div className='error-content'>
                    <div className='error-left'>
                        <div className='error-img'>
                            <img src={require('../error.gif')} alt='glitching logo' />
                        </div>
                    </div>
                    <div className='error-right'>
                        <p>Well... this is awkward! The page you were looking for doesn't exist! Luckily for you, I coded for this exact situation.</p>
                        <p>Maybe we should try this again from the <a href="/">beginning</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;