import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class REServiceIndex extends Component {
  static async getInitialProps() {
    const reServices = await factory.methods.deployedREServices().call();
    return { reServices: reServices };
  }
  renderREServices() {
    const items = this.props.reServices.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/reService/${address}/listings/listingsSummary`}>
            <a>View Listings Summary</a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <h3> Open Listings </h3>
          <Link route="/reService/new">
            <a>
              <Button
                floated="right"
                content="Create REService"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderREServices()}
        </div>
      </Layout>
    );
  }
}

export default REServiceIndex;
