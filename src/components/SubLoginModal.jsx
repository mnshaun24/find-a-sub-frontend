import React from 'react';
import SubLoginForm from './SubLoginForm';

function SubLoginModal() {
    return (
        <div className='fixed inset-0 bg-slate-100 flex items-center justify-center'>
            <div>
                <div>
                    <h3>Login Form</h3>
                </div>
                <div>
                    <SubLoginForm />
                </div>
                <div>
                    <button>Close</button>
                </div>
            </div>
        </div>
    );
}

export default SubLoginModal;