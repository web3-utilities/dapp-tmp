import { isAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { Contract, ContractInterface } from '@ethersproject/contracts'
import { JsonRpcProvider } from '@ethersproject/providers'

export function getContract(
  library: JsonRpcProvider,
  address: string,
  ABI: ContractInterface,
  account?: string | null | undefined
): Contract {
  if (!isAddress(address ?? '') || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, account ? library.getSigner(account).connectUnchecked() : library)
}
