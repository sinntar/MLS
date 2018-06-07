import React, { Component } from "react";
import Layout from "../../reService/components/Layout";
import REService from "../../ethereum/reService";

class ListingDetails extends Component {
  static async getInitialProps(props) {
    console.log(props.query.address);
    const reService = REService(props.query.address);
    const listing = await reService.methods.propertyListings(0).call();
    console.log(listing.zipCode);
    return {};
  }

  render() {
    return (
      <Layout>
        <h3> This is Listing details Page</h3>
      </Layout>
    );
  }
}

export default ListingDetails;
