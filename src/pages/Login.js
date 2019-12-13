import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { UserContext } from "../contexts/User";

var axios = require('axios');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      accessToken: ""
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    axios.post('http://localhost:8090/login', {
      email: data.get('email'),
      password: data.get('password')
    })
      .then(res => {
        this.setState({
          accessToken: res.data.accessToken
        });
        localStorage.setItem("token", this.state.accessToken)
      });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>{" "}
        <Button type="submit">Submit</Button>
        {/* <Input 
          type="text"
          value={this.state.accessToken}
        /> */}
      </Form>
    );
  }
}
