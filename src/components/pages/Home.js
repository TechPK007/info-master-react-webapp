import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/users");
        setUsers(result.data)
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home page</h1>
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User name</th>
                            <th scope="col">Email</th>
                            <th width='250'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td scop="row">{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className='btn btn-primary btn-sm '>View</Link>
                                    <Link className='btn btn-outline-primary mx-3 btn-sm'>Edit</Link>
                                    <Link className='btn btn-danger btn-sm'>Delete</Link>
                                </td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}


export default Home;