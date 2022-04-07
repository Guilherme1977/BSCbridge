  export function shortenAddress(address, chars = 6) {
    const parsed = window.ethereum.selectedAddress
    if (!parsed) {
      throw Error(`Invalid 'address' parameter '${address}'.`)
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
  }
  