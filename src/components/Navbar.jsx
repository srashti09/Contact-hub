import React from 'react';

const Navbar = () => {
    return (
        <div className="my-4 flex h-[60px] items-center justify-center gap-2 rounded-lg
         bg-green text-xl font-medium">
            <div className='flex gap-2'>
                <img src ="/firebase.svg"/>
                <h1>CONTACT HUB</h1>
            </div>
        </div>
    );
};

export default Navbar ;