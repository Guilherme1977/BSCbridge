import React, { Component } from "react";
import Success from "../assets/success.png";
import { shortenAddress } from "../functions/getShortAddress";
import Copy from "../assets/copy.png";
class Connected extends Component {
  state = {
    copied: false,
  };
  render() {
    //   const [isCopied, setCopied] = useCopyClipboard()
    const account = window.ethereum.selectedAddress;
    return (
      <div className="connectWallet">
        <h3 className="titleWrapper">
          <div className="successWrapper">
            <img
              src={Success}
              alt="success"
              style={{ height: 20, width: 20 }}
            />
          </div>
          Wallet has been connected
        </h3>
        <h5 className="mb-0 d-flex justify-content-center gap-3">
          {shortenAddress(account)}
          {this.state.copied === true ? (
            <img src={Success} alt="success" />
          ) : (
            <img
              src={Copy}
              alt="copy"
              style={{
                height: 20,
                width: 20,
                filter: "contrast(0.5)",
                cursor: "pointer",
              }}
              onClick={() => {
                navigator.clipboard.writeText(account);
                this.setState({ copied: true });
              }}
            />
          )}
        </h5>
      </div>
    );
  }
}

export default Connected;
