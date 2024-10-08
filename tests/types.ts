import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/dist/src/signer-with-address";

import type { OZGovernor, TimelockController, ERC20Token , Sablier } from "../types";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
    export interface Context {
        governor: OZGovernor;
        token: ERC20Token;
        timelock: TimelockController;
        sabiler : Sablier;
        loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
        signers: Signers;
    }
}

export interface Signers {
    admin: SignerWithAddress;
    notAuthorized: SignerWithAddress;
}