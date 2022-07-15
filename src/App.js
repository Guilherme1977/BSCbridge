import React from "react";

import initBridge from "./components/bridge";
// import setupNetwork from "./functions/setupnetwork";
import Header from "./components/header";
import Footer from "./components/footer";
import EthLogo from "./assets/ethLogo.svg";
import BscLogo from "./assets/bscLogo.svg";
import NotConnected from "./components/NotConnected";
import Connected from "./components/Connected";
import DoubleArrows from "./assets/arrows.svg";
import ExchangeCircle from "./assets/exchangeCircle.svg";


const Bridge = initBridge({
  bridgeETH: window.bridge_eth,
  bridgeBSC: window.bridge_bsc,
  tokenETH: window.token_dyp_eth,
  tokenBSC: window.token_dyp_bsc,
  tokeniDYP: window.token_idyp,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_wallet_connected: false,
      darkTheme: false,
    };
  }
  toggleTheme = () => {
    let darkTheme = !this.state.darkTheme;
    document.body.classList[darkTheme ? "add" : "remove"]("dark");
    this.setState({ darkTheme });
  };

  handleConnection = async () => {
    try {
      let is_wallet_connected = await window.connectWallet();

      this.setState({
        is_wallet_connected,
        coinbase: await window.web3.eth.getCoinbase(),
      });
    } catch (e) {
      window.alertify.error(String(e));
    }
    //setupNetwork()
  };

  render() {
    return (
      <div className="App text-center">
        <Header
          darkTheme={this.state.darkTheme}
          toggleTheme={this.toggleTheme}
        />
        <div className="container App-container">
          <div className="mt-4">
            <div className="container-fluid">
            <div className="exchangeWrapper">
              <h3 className="leftTitleWrapper mb-0">
                <img src={ExchangeCircle} alt="circle" className="chainlogos"/>
                Exchange Path
              </h3>
              <div className="rightTitleWrapper">
                <h3 className="mb-0 blockchain">
                  <img src={EthLogo} alt="ethLogo" className="chainlogos"/>
                  ETH
                </h3>
                <img src={DoubleArrows} alt="arrows" />
                <h3 className="mb-0 blockchain">
                  <img src={BscLogo} alt="bscLogo" className="chainlogos"/>
                  BSC
                </h3>
              </div>
            </div>
            {this.state.is_wallet_connected === false ? (
              <NotConnected handleConnection={this.handleConnection} />
            ) : (
              <Connected account={this.state.coinbase} />
            )}</div>
            <Bridge />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
