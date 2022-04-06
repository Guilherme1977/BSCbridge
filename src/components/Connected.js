import React, { Component } from "react";
import Success from "../assets/success.png";
import { shortenAddress } from "../functions/getShortAddress";
import {useCopyClipboard} from '../functions/copyClipboard'
import Copy from '../assets/copy.svg'
class Connected extends Component {
  render() {
//   const [isCopied, setCopied] = useCopyClipboard()

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
          <img src={Copy} alt='copy'/>
        </h3>
        <h5 className="mb-0">{shortenAddress(window.ethereum.selectedAddress)}</h5>
      </div>
    );
  }
}

export default Connected;
