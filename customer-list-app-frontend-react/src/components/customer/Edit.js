import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../helper';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            customer: {},
            values: {},
            submitted: false
        };
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        axios.get(`${server.baseURL}/customer/customer/${this.state.id}`).then(data => {
            this.setState({ customer: data.data });
        })
    }

    handleFormSubmission = (e) => {
        e.preventDefault();
        this.__updateCustomerDetails(this.state.values);
    }

    __updateCustomerDetails(customerData) {
        axios.put(`${server.baseURL}/customer/update?customerID=${this.state.id}`, customerData).then(data => {
            this.__redirectToHome();
        });
    }


    __redirectToHome() {
        this.setState({ submitted: true })
        setTimeout(() => {
            this.props.history.push('/');
        }, 1500);
    }

    __setValue = (values) => {
        this.setState({ values: { ...this.state.values, ...values } })
    }

    handleInput(e) {
        this.__setValue({ [e.target.id]: e.target.value })
    }

    render() {
        const { submitted } = this.state;
        return (
            <div className="App">
                {this.state.customer &&
                    <div>

                        < h1 > Customer List Management App</h1>
                        <p> Built with Nest.js, React.js and MongoDB </p>

                        <div className={'col-md-12 form-wrapper'}>
                            {submitted && (
                                <div className="alert alert-info" role="alert">
                                    Customer details has been edited successfully
                                </div>
                            )}

                            <h2> Edit Customer </h2>
                            <form id="create-post-form" onSubmit={(e) => { this.handleFormSubmission(e) }} noValidate={true}>
                                <div className="form-group col-md-12">
                                    <label htmlFor="first_name"> First Name </label>
                                    <input type="text" id="first_name" name="first_name" defaultValue={this.state.customer.first_name} onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Customer's First Name" />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="last_name"> Last Name </label>
                                    <input type="text" id="last_name" name="last_name" defaultValue={this.state.customer.last_name} onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Customer's Last name" />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="email"> Email </label>
                                    <input type="text" id="email" name="email" defaultValue={this.state.customer.email} onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Email" />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="phone"> Phone </label>
                                    <input type="text" id="phone" name="phone" defaultValue={this.state.customer.phone} onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Phone Number" />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="address"> Address </label>
                                    <input type="text" id="address" name="address" defaultValue={this.state.customer.address} onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter Address" />
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="description"> Description  </label>
                                    <input type="text" id="description" name="description" defaultValue={this.state.customer.description} onChange={(e) => { this.handleInput(e) }} className="form-control" placeholder="Enter description" />
                                </div>

                                <div className="form-group col-md-4 pull-right">
                                    <button className="btn btn-success" type="submit"> Create Customer </button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Edit);