import React, { Component } from "react";
import WalletLogo from "../assets/walletLogo.svg";
import { PropTypes } from 'prop-types'


class NotConnected extends Component {
    static propTypes = {
        handleConnection : PropTypes.func,
    }
  render() {
      const { handleConnection } = this.props;
    return (
      <div className="connectWallet">
        <h3 className="titleWrapper">
          <img src={WalletLogo} alt="success" />
          Please connect wallet to use this dApp
        </h3>
        <button
          onClick={handleConnection}
          style={{ borderRadius: "6px" }}
          className="btn connectWalletBTN pr-5 pl-5"
        >
          CONNECT WALLET
        </button>
      </div>
    );
  }
}

export default NotConnected;
