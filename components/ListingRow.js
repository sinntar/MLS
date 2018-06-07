import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import { Layout } from "../components/Layout";
import { Link } from "../routes";
import REService from "../ethereum/reService";

class ListingRow extends Component {
  static getInitialProps(props) {
    const { address } = props.query;
  }
  render() {
    const { Row, Cell } = Table;
    const { id, listing } = this.props;
    const propertyId = listing.propertyId;
    console.log("The Property is ->" + propertyId);
    return (
      <Row>
        <Cell> {listing.propertyId}</Cell>
        <Cell> {listing.propertyType}</Cell>
        <Cell> {listing.saleType}</Cell>
        <Cell> {listing.zipCode}</Cell>
        <Cell> {listing.size}</Cell>
        <Cell> {listing.price}</Cell>
        <Cell>
          <Link
            route={`/reService/${this.props.address}/listings/media/${
              listing.propertyId
            }/listingImages`}
          >
            <Button color="teal" basic>
              Media
            </Button>
          </Link>
        </Cell>
      </Row>
    );
  }
}
export default ListingRow;
