  export function shortenAddress(address, chars = 6) {
    const parsed = address
    if (!parsed) {
      throw Error(`Invalid 'address' parameter '${address}'.`)
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
  }
  