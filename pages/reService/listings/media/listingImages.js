import React, { Component } from "react";
import {
  Form,
  Button,
  Spinner,
  Message,
  Input,
  Image,
  Loader
} from "semantic-ui-react";
import { Router } from "../../../../routes";
import Layout from "../../../../components/Layout";
import REService from "../../../../ethereum/reService";
import ipfs from "../../../../ethereum/ipfs";
import web3 from "../../../../ethereum/web3";

class ListingImageSummary extends Component {
  state = {
    ipfsHash: null,
    buffer: "",
    ethAddress: "",
    blockNumber: "",
    transactionHash: "",
    gasUsed: "",
    txReceipt: "",
    loading: false,
    errorMessage: ""
  };

  static async getInitialProps(props) {
    const { address, propertyId } = props.query;
    console.log("Address Is -> " + address);
    console.log("The Selected Property ID is ->" + propertyId);
    const reService = REService(address);

    try {
      const listingsCount = await reService.methods
        .getPropertyMediaCount()
        .call();

      console.log("Total Image Count -> " + listingsCount);
      const listings = await Promise.all(
        Array(parseInt(listingsCount))
          .fill()

          .map((element, index) => {
            return reService.methods.propertyMediaData(index).call();
          })
      );

      let list = listings.filter(list => {
        //console.log(list.propertyId);
        if (list.propertyId == propertyId) {
          return list;
        }
      });

      console.log(list);

      //console.log(listings);
      return {
        list,
        listingsCount,
        address,
        propertyId
      };
    } catch (err) {
      console.log("Oops -> " + err.message);
    }
  }

  captureFile = event => {
    this.setState({ loading: true, errorMessage: "" });
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];

    console.log("Got file", file);

    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  };
  convertToBuffer = async reader => {
    //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    this.setState({ buffer });
    this.onClick();
    this.onSubmit();
    console.log("Loading State is False");
  };

  onClick = async () => {
    try {
      console.log("Entered OnClick");
      this.setState({ blockNumber: "waiting.." });
      this.setState({ gasUsed: "waiting..." });
      //get Transaction Receipt in console on click
      //See: https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt
      await web3.eth.getTransactionReceipt(
        this.state.transactionHash,
        (err, txReceipt) => {
          console.log(err, txReceipt);
          this.setState({ txReceipt });
        }
      ); //await for getTransactionReceipt
      await this.setState({ blockNumber: this.state.txReceipt.blockNumber });
      await this.setState({ gasUsed: this.state.txReceipt.gasUsed });
    } catch (error) {
      //try

      console.log(error);
      this.setState({ errorMessage: error.message });
    } //catch
  }; //onClick
  createMediaLink = async () => {
    console.log("** The IPFS Hash is -> " + this.state.ipfsHash);
    console.log("** The Property ID is -> " + this.props.propertyId);

    const accounts = await web3.eth.getAccounts();
    const reService = REService(this.state.ethAddress);
    try {
      await reService.methods
        .uploadPropertyMedia(this.props.propertyId, this.state.ipfsHash)
        .send({
          from: accounts[0]
        });

      console.log("Before Router Push");
      console.log(`The Address is ->  ${this.props.address}`);
      console.log(`The Propert ID is -> ${this.props.propertyId}`);
      this.setState({ loading: false });

      Router.pushRoute(
        `/reService/${this.props.address}/listings/listingsSummary`
      );
    } catch (err) {
      console.log("Oops Error ... " + err.message);
      this.setState({ errorMessage: err.message });
    }
  }; //createMediaLink
  onSubmit = async event => {
    //event.preventDefault();
    //bring in user's metamask account address
    const accounts = await web3.eth.getAccounts();

    console.log("Sending from Metamask account: " + accounts[0]);
    console.log("Eth Address : " + this.props.address);

    //obtain contract address from storehash.js
    const ethAddress = this.props.address;
    this.setState({ ethAddress });
    const reService = REService(ethAddress);
    //save document to IPFS,return its hash#, and set hash# to state
    //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add
    await ipfs.add(this.state.buffer, (err, ipfsHash) => {
      console.log(err, ipfsHash);
      //setState by setting ipfsHash to ipfsHash[0].hash
      this.setState({ ipfsHash: ipfsHash[0].hash });
      console.log("The IPFS Hash is -> " + this.state.ipfsHash);
      // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract
      //return the transaction hash from the ethereum contract
      //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send

      reService.methods.sendHash(this.state.ipfsHash).send(
        {
          from: accounts[0]
        },
        (error, transactionHash) => {
          console.log("The Transaction Hash is " + transactionHash);
          this.createMediaLink();
          this.setState({ transactionHash });
        }
      ); //storehash
    }); //await ipfs.add
    // Store the ipfsHash in Block Chain
  }; //onSubmit

  renderMedia() {
    return this.props.list.map(list => {
      return (
        <img
          key={list.propertyId}
          class="ui image"
          src={`https://gateway.ipfs.io/ipfs/${list.mediaURL}`}
        />
      );
    });
  }
  render() {
    return (
      <Layout>
        <h3> Listing Image Summary </h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <div floated="right" loading={this.state.loading}>
            <label for="file" class="ui icon button" style={{ float: "right" }}>
              <i class="upload icon" />
              &nbsp;&nbsp;Upload Media
            </label>
            <input
              type="file"
              id="file"
              onChange={this.captureFile}
              style={{ display: "none" }}
            />
            {this.state.loading ? (
              <div class="ui active centered inline loader" />
            ) : (
              <div class="none" />
            )}
          </div>
          <div class="ui medium images">{this.renderMedia()}</div>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}
export default ListingImageSummary;
