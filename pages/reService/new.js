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
        <div className="ui breadcrumb" style={{ margin: "0px 0px 20px 0px" }}>
          <a className="section">MLS</a>
          <div className="divider"> / </div>
          <Link route={`/`}>
            <a className="section">Contracts</a>
          </Link>
          <div className="divider"> / </div>
          <a className="active section">New</a>
        </div>

        <h1 className="ui header">Create New Contract</h1>

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
          <Button loading={this.state.loading} color="teal" floated="right">
            Submit
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default REServiceNew;
