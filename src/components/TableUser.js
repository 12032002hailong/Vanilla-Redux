import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchAllUser } from '../action/actions';
import { useSelector } from 'react-redux';
const TableUser = (props) => {

    // const [listUsers, setListUsers] = useState();
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);

    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all");
    //     const data = res && res.data ? res.data : [];
    //     setListUsers(data);
    // }

    useEffect(() => {
        // fetchAllUser();
        dispatch(fetchAllUser());
    }, [])

    const handleDeleteUser = (user) => {
        console.log("check user delete: ", user);
    }

    return (
        <>
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isError === true ?
                                <>
                                    <div>
                                        Somethingwrong...
                                    </div>
                                </>
                                :
                                <>
                                    {isLoading === true ?
                                        <>
                                            <div>
                                                Loading data...
                                            </div></>
                                        :
                                        <>
                                            {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                                return (
                                                    <tr key={`users-{index}`}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.username}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                onClick={() => handleDeleteUser(item)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            }</>
                                    }


                                </>
                        }


                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default TableUser