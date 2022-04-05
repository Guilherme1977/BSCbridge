import React from 'react';

import { Route } from 'react-router-dom'

import initBridge from './components/bridge'
import setupNetwork from './functions/setupnetwork'
import Header from './components/header'
import Footer from './components/footer'

const Bridge = initBridge({ bridgeETH: window.bridge_eth, bridgeBSC: window.bridge_bsc , tokenETH: window.token_dyp_eth, tokenBSC: window.token_dyp_bsc, tokeniDYP: window.token_idyp })

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        is_wallet_connected: false,
        darkTheme: false
    }
  }
  toggleTheme = () => {
    let darkTheme = !this.state.darkTheme
    document.body.classList[darkTheme?'add':'remove']('dark')
    this.setState({ darkTheme })
  }

  handleConnection = async () => {
    try {
      let is_wallet_connected = await window.connectWallet()

 
      this.setState({is_wallet_connected, coinbase: await window.web3.eth.getCoinbase()})
      
    } catch (e) {
      window.alertify.error(String(e))
    }
    //setupNetwork()
  }

render() {

  if (!this.state.is_wallet_connected) {
    return (<div className='App text-center'>
      <Header darkTheme={this.state.darkTheme} toggleTheme={this.toggleTheme} />
      <div className='container App-container' style={{maxWidth: '838px', minHeight: '512px'}}>
        <div className='mt-5'>
          <h3 className='mb-4'>Please connect wallet to use this dApp</h3>
          <button onClick={this.handleConnection} style={{borderRadius: '6px'}} className='btn btn-primary pr-5 pl-5'>
            CONNECT WALLET</button>
        </div>
      </div>
      <Footer />
    </div>);
  }
  return (
    <div className="App">      
      <Header darkTheme={this.state.darkTheme} toggleTheme={this.toggleTheme} />
      <div style={{minHeight: '550px'}} className="App-container">
      	<Route exact path='/' render={props => <Bridge {...props} />} />
      </div>
      <Footer />
    </div>
  );
}
}

export default App;
