import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../helper';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            description: '',
            submitted: false
        };
        this.createPost = this.createPost.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    createPost = (e) => {
        e.preventDefault();
        const customerData = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.phone,
            description: this.state.description
        }
        this.setState({ submitted: true });
        this.__postToServer(customerData);
    }

    __postToServer(customerData) {
        axios.post(`${server.baseURL}/customer/create`, customerData).then(data => {
            this.__redirectToHome();
        });
    }

    __redirectToHome() {
        setTimeout(() => {
            this.props.history.push('/');
        }, 1500);
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const submitted = this.state.submitted;
        return (
            <div className="App">
                <h1>Customer List Management App</h1>
                <p> Built with Nest.js, React.js and MongoDB </p>

                <div className={'col-md-12 form-wrapper'}>
                    {submitted && (
                        <div className="alert alert-info" role="alert">
                            Customer created successfully
                    </div>
                    )}
                    <h2> Create Customer </h2>
                    <form id="create-post-form" onSubmit={(e) => { this.createPost(e) }}>
                        <div className="form-group col-md-12">
                            <label htmlFor="first_name"> First Name </label>
                            <input type="text" id="first_name" name="first_name" onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Customer's First Name" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="last_name"> Last Name </label>
                            <input type="text" id="last_name" name="last_name" onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Customer's Last name" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="email"> Email </label>
                            <input type="text" id="email" name="email" onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Email" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="phone"> Phone </label>
                            <input type="text" id="phone" name="phone" onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Phone Number" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="address"> Address </label>
                            <input type="text" id="address" name="address" onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Address" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="description"> Description  </label>
                            <input type="text" id="description" name="description" onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter description" />
                        </div>

                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit"> Create Customer </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Create);