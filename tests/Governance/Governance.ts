import { ethers } from "hardhat";
import { expect } from "chai";

import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

import type { Signers } from "../types";

import {  deployGovernanceContractsFixture } from "./Governance.fixture";
import { shouldBehaveLikeGovernor } from "./Goverance.behavior";

describe("OZGovernor", async function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.signers.notAuthorized = signers[1];    

    this.loadFixture = loadFixture;
  });

  beforeEach(async function () {   

    const { token,timelock,governor, sablier} = await this.loadFixture(deployGovernanceContractsFixture);
    this.governor = governor;
    this.token = token;
    this.timelock = timelock;
    this.sablier = sablier;

  });
  console.log("meow")
  shouldBehaveLikeGovernor();
});


// describe("OZGovernorTimestamp", async function () {
//   before(async function () {
//     this.signers = {} as Signers;

//     const signers = await ethers.getSigners();
//     this.signers.admin = signers[0];
//     this.signers.notAuthorized = signers[1];    

//     this.loadFixture = loadFixture;
//   });

//   beforeEach(async function () {   

//     const { token,timelock,governor } = await this.loadFixture(deployGovernanceContractsClockTimestampFixture);
//     this.governor = governor;
//     this.token = token;
//     this.timelock = timelock;

//   });

//   shouldBehaveLikeGovernorWithTimestamp();
// });