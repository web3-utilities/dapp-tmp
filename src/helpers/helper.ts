import BigNumber from "bignumber.js"

export function ellipseAddress(address: string | null | undefined, width = 6): string {
  if (!address) {
    return ''
  }

  if (width === -1) {
    return address
  }

  return `${address.slice(0, width)}...${address.slice(-width)}`
}

export const displayBalance = (balance: string | undefined, decimals?: number, fixed?: number): string => {
  if (!balance || balance === 'NaN') {
    balance = '0'
  }

  decimals = decimals ? decimals : 18
  fixed = fixed !== undefined ? fixed : 3
  return new BigNumber(balance).dividedBy(new BigNumber('10').pow(decimals)).toFormat(fixed, BigNumber.ROUND_DOWN)
}