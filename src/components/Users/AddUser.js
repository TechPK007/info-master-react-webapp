import React from 'react';

function AddUser() {
    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center mb-4'>Add a user</h2>
                <form>
                    <div className='form-group mb-3'>
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name='name'
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Username"
                        name='username'
                        />
                    </div>
                    <div className='form-group mb-4'>
                        <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name='email'
                        />
                    </div>
                    <button className='btn btn-primary w-100 btn-block'>Add user</button>
                </form>
            </div>
        </div>
    );
}


export default AddUser;