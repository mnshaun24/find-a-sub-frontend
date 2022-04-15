import React from 'react';
import SchoolChoice from './SchoolChoice';
import SubChoice from './SubChoice';

function Home() {
    return (
        <>
        <main>
            <h2>Welcome to the homepage!</h2>
        </main>
        <div>
            <SchoolChoice />
            <SubChoice />
            
        </div>
        </>
    );
}

export default Home;