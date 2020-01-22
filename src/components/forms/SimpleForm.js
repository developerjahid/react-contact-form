import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
    render() {
        return (
            <div>
                <Form className="container">
                    <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input value={this.state.name} type="text" name="name" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input value={this.state.email} type="email" name="email" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleText">Message</Label>
                    <Input value={this.state.message} type="textarea" name="text" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SimpleForm
