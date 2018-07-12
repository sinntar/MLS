import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import web3 from "../ethereum/web3";
import REServiceFactory from "../ethereum/build/REServiceFactory.json";


class REServiceIndex extends Component {
  static async getInitialProps() {
    const reServices = await factory.methods.GetDeployedREServices().call();
    console.log("****************");
    console.log(reServices);
    let obj = [];
    for (let i = 0; i < reServices.length; i++) {
      obj.push({ address: reServices[i], name: "Contract " + i });
    }
    console.log(obj);
    return { reServices: obj };
  }
  renderREServices() {
    const items = this.props.reServices.map(contract => {
      return {
        header: contract.name,
        meta: "Address: " + contract.address,
        description: (
          <Link
            route={`/reService/${contract.address}/listings/listingsSummary`}
          >
            <Button
              color="teal"
              floated="right"
              content="View"
              icon="right arrow"
              labelPosition="right"
            />
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
        <div className="ui breadcrumb" style={{ margin: "0px 0px 20px 0px" }}>
          <Link route={`/`}>
            <a className="section">MLS</a>
          </Link>

          <div className="divider"> / </div>
          <Link route={`/`}>
            <a className="active section">Contracts</a>
          </Link>
        </div>

        <div>
          <div className="ui grid">
            <div className="ten wide column">
              <h1 className="ui header">Contracts</h1>
            </div>
            <div className="six wide column">
              <Link route="/reService/new">
                <a>
                  <Button
                    color="teal"
                    floated="right"
                    content="New Contract"
                    icon="add circle"
                  />
                </a>
              </Link>
            </div>
          </div>

          {this.renderREServices()}
        </div>
      </Layout>
    );
  }
}

export default REServiceIndex;
