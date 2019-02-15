import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { server } from '../helper';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        this.__fetchCustomersFromTheServer();
    }

    __fetchCustomersFromTheServer() {
        axios.get(`${server.baseURL}/customer/customers`).then(data => {
            this.setState({ customers: data.data })
        })
    }

    deleteCustomer(id) {
        axios.delete(`${server.baseURL}/customer/delete?customerID=${id}`).then(data => {
            console.log(data);
            window.location.reload();
        })
    }

    render() {
        const customers = this.state.customers;
        return (
            <div>
                {customers.length === 0 && (
                    <div>
                        <h2>No customer found at the moment</h2>
                    </div>
                )}

                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers && customers.map(customer =>
                                    <tr key={customer._id}>
                                        <td>{customer.first_name}</td>
                                        <td>{customer.last_name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.description}</td>
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                    <Link to={`edit/${customer._id}`} className="btn btn-sm btn-outline-secondary">Edit Customer </Link>
                                                    <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(customer._id)}>Delete Customer</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;