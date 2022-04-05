import React from 'react'

export default class Header extends React.Component {
    render() {
      let {darkTheme, toggleTheme} = this.props
        return (
            <div style={{background: 'var(--box-bg)', padding: '16px', boxShadow: '0 0 6px 0 rgba(0,0,0,.2)', height: '100px'}} className='App-header'>
        <div className="container mr-0 ml-0" style={{maxWidth: '100%'}}>
          <div className="row">
            <div className="col-md-7 logo-column header-logo col-5">
              <h2  className='container text-left' style={{position: 'relative', maxWidth: '100%', marginLeft: '-10px' }}>
                <a href='/' style={{ display: 'flex' }}>
                  <img className='wlogo' style={{position: 'relative', maxWidth: '90%', objectFit: 'contain', paddingRight: '10px', height: '75px'}} alt='Staking DAPP' src='/logo192.png'
                       height='125'/>
                  <img className='d-none dlogo' style={{position: 'relative', maxWidth: '90%', objectFit: 'contain', paddingRight: '10px', height: '75px'}} alt='Staking DAPP' src='/img/dlogo.svg'
                       height='125'/>
                  {' '}<p className="header-title-1" style={{ paddingLeft: '10px', marginTop: 'auto' }}>Bridge</p>
                </a>
              </h2>
            </div>
            <div className="col-md-5 pr-0 pl-0 col-7" id="infoPool">
              <div className="sc-eilVRo jaXjyZ">
                <div className="sc-eerKOB bKbMab"><span className="sc-jzgbtB dwWyiU"></span>
                  <div className="sc-bnXvFD bcIrBV">
                    <a style={{borderRadius: '15px', marginRight: '1rem', padding: '2px 7px 2px'}} href="https://github.com/dypfinance/DYP-Bridge-and-Staking-on-Binance-Smart-Chain" target="_blank" id="connect-wallet"
                       className="sc-gqjmRU gacWOr sc-iAyFgw sc-jWBwVP sc-cMhqgX sc-esOvli iivcTi"><p
                        className="sc-hMFtBS cxjZDP">Check Audits</p></a>
                  </div>
                  <div className="checkbox-drak">
                    <label className="ui-switcher" aria-checked={darkTheme}>
                    <input checked={darkTheme} autoComplete="off" id="myCheck" onChange={toggleTheme} className="form-check-input d-none" type="checkbox" name="inlineRadioOptions" />
                    </label>
                      {/* <input autocomplete="off" id="myCheck" onchange="myFunction()" className="form-check-input" type="checkbox" name="inlineRadioOptions" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}