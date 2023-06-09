import { ethers } from "ethers";
const DidRegistryContractAbi = require("./polygon-did-registory-contract-abi.json");

export class RegistryContractInitialization {
      /**
       * Creates an instance of the polygon DID registry smart contract.
       * @param url
       * @param privateKey
       * @param contractAddress
       * @returns Returns the instance created.
       */
      async instanceCreation(
            privateKey: string,
            url: string,
            contractAddress: string
      ): Promise<ethers.Contract> {
            const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(
                  url
            );
            const wallet: ethers.Wallet = new ethers.Wallet(privateKey, provider);
            const registry: ethers.Contract = new ethers.Contract(
                  contractAddress,
                  DidRegistryContractAbi,
                  wallet
            );
            return registry;
      }
}
