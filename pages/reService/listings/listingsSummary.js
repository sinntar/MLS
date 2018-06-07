import React, { Component } from "react";
import { Button, Table, Card, Icon, Grid, Label } from "semantic-ui-react";
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

  renderCards() {
    return this.props.listings.map((listing, index) => {
      const extra = (
        <a>
          <Icon name="video" />
          <Link
            route={`/reService/${this.props.address}/listings/media/${
              listing.propertyId
            }/listingImages`}
          >
            View Media
          </Link>
        </a>
      );

      const desc = (
        <div>
          <Grid>
            <Grid.Column width={8}>
              PropertyID: {listing.propertyId}
            </Grid.Column>
            <Grid.Column width={8}>Zip: {listing.zipCode}</Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column width={8}>Size: {listing.size}</Grid.Column>
            <Grid.Column width={8}>Price: {listing.price}</Grid.Column>
          </Grid>
        </div>
      );

      return (
        <Card
          image="https://gateway.ipfs.io/ipfs/QmWDQpBNjrobkHhyCjgDFJXXVMc3NQjFcLkG1hTDKB3ZPq"
          header={listing.propertyType}
          meta={listing.saleType}
          description={desc}
          extra={extra}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <div className="ui breadcrumb">
          <Link route={`/`}>
            <a className="section">MLS</a>
          </Link>
          <div className="divider"> / </div>
          <Link route={`/`}>
            <a className="section">Contracts</a>
          </Link>
          <div className="divider"> / </div>
          <a className="active section">Listings</a>
        </div>
        <div style={{ margin: "0px 0px 20px 0px" }} />
        <div className="ui grid">
          <div className="ten wide column">
            <h1 className="ui header">
              Listings <Label>{this.props.listingsCount}</Label>
            </h1>
          </div>
          <div className="six wide column">
            <Link
              route={`/reService/${this.props.address}/listings/listingNew`}
            >
              <a>
                <Button
                  floated="right"
                  content="Create Listing"
                  icon="add circle"
                  color="teal"
                />
              </a>
            </Link>
          </div>
        </div>
        <div style={{ margin: "0px 0px 20px 0px" }} />
        <Card.Group>{this.renderCards()}</Card.Group>
      </Layout>
    );
  }
}
export default ListingsSummary;
