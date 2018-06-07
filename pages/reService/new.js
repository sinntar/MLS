import React, { Component } from "react";
import { Button, Input, Form, Message, Dropdown } from "semantic-ui-react";
import { Link, Router } from "../../routes";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class REServiceNew extends Component {
  state = {
    minContribution: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.CreateREService(this.state.minContribution).send({
        from: accounts[0]
      });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3> Create a Service </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Minimum Contribution </label>
            <Input
              label="Wei"
              labelPosition="right"
              placeholder="100 Wei"
              value={this.state.minContribution}
              onChange={event =>
                this.setState({ minContribution: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create Service
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default REServiceNew;
