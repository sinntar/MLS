import React, { Component } from "react";
import {
  Button,
  Input,
  Form,
  Message,
  Dropdown,
  Spinner
} from "semantic-ui-react";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";
import REService from "../../../ethereum/reService";
import web3 from "../../../ethereum/web3";
import propertyTypeOptions from "../../../ethereum/data/propertyType";
import saleTypeOptions from "../../../ethereum/data/saleType";

class ListingsNew extends Component {
  state = {
    errorMessage: "",
    loading: false,
    propertyId: "",
    propertyType: "",
    saleType: "",
    zipCode: "",
    size: "",
    price: ""
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    console.log("Listing New Page " + address);
    return { address };
  }
  onSubmit = async event => {
    event.preventDefault();
    console.log("Entering onSubmit");

    console.log(this.state.propertyId);
    console.log(this.state.propertyType);
    console.log(this.state.saleType);
    console.log(this.state.zipCode);
    console.log(this.state.size);
    console.log(this.state.price);

    this.setState({ loading: true, errorMessage: "" });
    try {
      const reService = REService(this.props.address);
      const accounts = await web3.eth.getAccounts();
      console.log("Accounts -> " + accounts[0]);
      await reService.methods
        .createListing(
          this.state.propertyId,
          this.state.propertyType,
          this.state.saleType,
          this.state.zipCode,
          this.state.size,
          this.state.price
        )
        .send({
          from: accounts[0]
        });
      Router.pushRoute(
        `/reService/${this.props.address}/listings/listingsSummary`
      );
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3> Create a Listing </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Property ID </label>
            <Input
              placeholder="1A333545"
              value={this.state.propertyId}
              onChange={event =>
                this.setState({ propertyId: event.target.value })
              }
            />
            <label> Property Type </label>
            <Dropdown
              placeholder="Commercial"
              fluid
              selection
              options={propertyTypeOptions}
              value={this.state.propertyType}
              onChange={event =>
                this.setState({ propertyType: event.target.textContent })
              }
            />
            <label> Sale Type </label>
            <Dropdown
              placeholder="Sale"
              fluid
              selection
              options={saleTypeOptions}
              value={this.state.saleType}
              onChange={event =>
                this.setState({ saleType: event.target.textContent })
              }
            />
            <label> Zip Code </label>
            <Input
              placeholder="75028"
              value={this.state.zipCode}
              onChange={event => this.setState({ zipCode: event.target.value })}
            />
            <label> Size </label>
            <Input
              label="Sq Feet"
              labelPosition="right"
              placeholder="5000"
              value={this.state.size}
              onChange={event => this.setState({ size: event.target.value })}
            />
            <label> Price </label>
            <Input
              label="$ per Sq Feet"
              labelPosition="right"
              placeholder="95"
              value={this.state.price}
              onChange={event => this.setState({ price: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary floated="right">
            Save
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default ListingsNew;
