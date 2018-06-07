import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import REService from "../../../ethereum/reService";
import ListingRow from "../../../components/ListingRow";

class ListingsSummary extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    console.log("Listings Summary" + address);
    const reService = REService(address);

    const listingsCount = await reService.methods
      .getBasicPropertyInfoCount()
      .call();

    console.log("Media Count -> " + listingsCount);
    const listings = await Promise.all(
      Array(parseInt(listingsCount))
        .fill()
        .map((element, index) => {
          return reService.methods.propertyListings(index).call();
        })
    );
    console.log(listings);
    return {
      listings,
      listingsCount,
      address
    };
  }

  renderRows() {
    return this.props.listings.map((listing, index) => {
      return (
        <ListingRow
          key={index}
          id={index}
          listing={listing}
          address={this.props.address}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3> Listings </h3>
        <div>
          <Table>
            <Header>
              <Row>
                <HeaderCell> Property ID </HeaderCell>
                <HeaderCell> Property Type </HeaderCell>
                <HeaderCell> Sale Type </HeaderCell>
                <HeaderCell> Zip Code </HeaderCell>
                <HeaderCell> Size </HeaderCell>
                <HeaderCell> Price </HeaderCell>
                <HeaderCell> Media </HeaderCell>
              </Row>
            </Header>
            <Body>{this.renderRows()}</Body>
          </Table>
          <Link route={`/reService/${this.props.address}/listings/listingNew`}>
            <a>
              <Button
                floated="right"
                content="Create Listing"
                icon="add circle"
                primary
              />
            </a>
          </Link>
        </div>
        <div>Found {this.props.listingsCount} Listings. </div>
        <div>The Contract Address is {this.props.address} </div>
      </Layout>
    );
  }
}
export default ListingsSummary;
