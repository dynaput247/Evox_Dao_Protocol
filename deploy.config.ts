export const config:any = {
  // Configuration for the deployment
  // Change the values for a more personalized deployment
  token: {
    name: "sweet dream2 evox Token",
    symbol: "sweet dream2 evox Token",
    admin: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    pauser: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    minter: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021"
  },
  // Timelock
  timelock: {
    minDelay: 20, // 12 days (assuming 12 seconds per block)
    proposer: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    executer: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    admin: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021"
  },
  // Set clockMode to true for timestamp mode, false for block number mode
  clockMode: false,
  // Governor
  governor: {
    name: "sweet dream2 evox Dao",
    // 7200 is 24 hours (assuming 12 seconds per block)
    votingDelay: 600,
    // 50400 is 7 days (assuming 12 seconds per block)
    votingPeriod: 600,
    // Threshold to be able to propose
    proposalThreshold: 0, // Set a non-zero value to prevent proposal spam.

    timelock: "0x6398b6Cb974A3aF13f6259157D48cA65fb6A05DB",
    sablier: "0xf600Aad4228AC03d5c46b3e78cC87840790E1783",
    token: "0x6f6E03DB649186CaBC02Ae13245d4BA892D64183",
  },
  // First Mint is used to mint the initial tokens for this governance
  // It must be higher than the proposalThreshold
  // so there are enough tokens for the governance to be able to propose
  // 
  // ATTENTION:
  // If the amount is not higher than 0, it will not mint any tokens and will also maintain roles for the deployer.
  // Keep it as ZERO if you plan on doing manual changes and mints, before locking it up to be controlled by governor contracts.
  // 
  // After the first mint, the deployer will lose the minter and admin role and give it to the timelock, which is the executor.
  init: {
    token: "0x6f6E03DB649186CaBC02Ae13245d4BA892D64183", 
    governor: "0xEc1c43eEC594f98946FdcE679c249605cb845838",
    timelock: "0x6398b6Cb974A3aF13f6259157D48cA65fb6A05DB",
    sablier: "0xf600Aad4228AC03d5c46b3e78cC87840790E1783",
    user1: "0xFcFB312FD2f225798e01f23c11a5861f4A732216",
    user2: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    amount1: 10000_000000000000000000n,
    amount2: 10000_000000000000000000n
  },

  Sablier: {
    name : "sweet dream2 evox Sablier",
    sablier_contract_sepolia : "0x7a43F8a888fa15e68C103E18b0439Eb1e98E4301",
    quorum : 1000_000000000000000000n,
    admin: "0x33D33E756cB06b81fF0E861C0f071D3ae7E75021",
    governor: "0xEc1c43eEC594f98946FdcE679c249605cb845838",
    token: "0x6f6E03DB649186CaBC02Ae13245d4BA892D64183"
  }
}