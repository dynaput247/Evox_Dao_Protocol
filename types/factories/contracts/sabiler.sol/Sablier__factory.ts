/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Sablier,
  SablierInterface,
} from "../../../contracts/sabiler.sol/Sablier";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_sablierV2LockupAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "Islocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "User_withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_streamID",
        type: "uint256[]",
      },
    ],
    name: "addStreamID",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregateOverflowVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "calculateFinalVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "calculateFinalvotingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_streamID",
        type: "uint256",
      },
    ],
    name: "getRemainingamount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getSablierAmount",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserdepositAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getstreamID",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "gettotalamount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "handleOverflowVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "lock",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "overflowNovotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "overflowYesvotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposal",
    outputs: [
      {
        internalType: "uint256",
        name: "yes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "no",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "abstain",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sablierV2Lockup",
    outputs: [
      {
        internalType: "contract ISablierV2Lockup",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sabliertotalUserAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setvotingMarketCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "staked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "staking",
    outputs: [
      {
        internalType: "contract IStaking",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "streamID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "timeofdeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "unlock",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "updateSablierV2Lockup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingMarketCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052670de0b6b3a76400006007553480156200001d57600080fd5b50604051620015e7380380620015e7833981016040819052620000409162000123565b33806200006757604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6200007281620000b6565b50600180546001600160a01b039485166001600160a01b0319918216179091556003805493851693821693909317909255600280549190931691161790556200016d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200011e57600080fd5b919050565b6000806000606084860312156200013957600080fd5b620001448462000106565b9250620001546020850162000106565b9150620001646040850162000106565b90509250925092565b61146a806200017d6000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c8063753ec1031161011a578063a098c347116100ad578063f2fde38b1161007c578063f2fde38b1461048f578063f435f5a7146104a2578063faa0b3dc146104b5578063fc0c546a146104be578063fd5e6dd1146104d157600080fd5b8063a098c34714610443578063c198173c14610456578063c47bf3c814610469578063ec7694ec1461048657600080fd5b80638f312a36116100e95780638f312a36146103f4578063923e05be14610407578063929cb5d61461041a57806398807d841461042357600080fd5b8063753ec1031461038d578063817b1cd2146103ba5780638b5e13fe146103c35780638da5cb5b146103e357600080fd5b806347e7ef24116101925780635a993f21116101615780635a993f211461032f5780636b665de2146103525780636cc619cb14610372578063715018a61461038557600080fd5b806347e7ef24146102d657806348d9acef146102e95780634cf088d91461030957806358c85dce1461031c57600080fd5b80633328bcfc116101ce5780633328bcfc14610285578063348d466e146102b05780633785cbdf146102c557806343e51928146102ce57600080fd5b8063166e09dd146102005780631e2dd599146102265780632c54e55e146102395780632f6c493c14610262575b600080fd5b61021361020e36600461113e565b6104e4565b6040519081526020015b60405180910390f35b61021361023436600461113e565b6105ad565b61021361024736600461113e565b6001600160a01b03166000908152600b602052604090205490565b61027561027036600461113e565b610609565b604051901515815260200161021d565b600154610298906001600160a01b031681565b6040516001600160a01b03909116815260200161021d565b6102c36102be366004611160565b61066f565b005b61021360095481565b6102c361067c565b6102756102e4366004611179565b61074f565b6102136102f736600461113e565b600e6020526000908152604090205481565b600254610298906001600160a01b031681565b6102c361032a36600461113e565b6108f2565b61027561033d36600461113e565b60116020526000908152604090205460ff1681565b61021361036036600461113e565b60106020526000908152604090205481565b610213610380366004611160565b610a0a565b6102c3610b68565b60045460055460065461039f92919083565b6040805193845260208401929092529082015260600161021d565b610213600d5481565b6103d66103d136600461113e565b610b7c565b60405161021d91906111a3565b6000546001600160a01b0316610298565b6103d661040236600461113e565b610c88565b6102c361041536600461113e565b610cf4565b610213600a5481565b61021361043136600461113e565b600b6020526000908152604090205481565b6102c36104513660046111e7565b610d1e565b610213610464366004611179565b610d41565b610471610d72565b6040805192835260208301919091520161021d565b61021360085481565b6102c361049d36600461113e565b610ecd565b6102756104b036600461113e565b610f0b565b61021360075481565b600354610298906001600160a01b031681565b6102986104df366004611160565b610f6c565b60025460405163162a72af60e11b81526001600160a01b0383811660048301526000928392911690632c54e55e90602401602060405180830381865afa158015610532573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610556919061126d565b90506000610563846105ad565b90506000610571828461129c565b90506105a5816040518060400160405280601081526020016f3a37ba30b63b37ba34b733a837bbb2b960811b815250610f96565b949350505050565b6000806105b983610b7c565b90506000805b8251811015610601578281815181106105da576105da6112af565b6020026020010151826105ed919061129c565b9150806105f9816112c5565b9150506105bf565b509392505050565b6001600160a01b0381166000908152600b602052604081205482906106495760405162461bcd60e51b8152600401610640906112de565b60405180910390fd5b50506001600160a01b03166000908152601160205260409020805460ff19169055600190565b610677610fdf565b600755565b336000818152600b60205260409020546106a85760405162461bcd60e51b8152600401610640906112de565b336000908152600b60205260408120805490829055600d8054919283926106d0908490611308565b909155505060035460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015610726573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074a919061131b565b505050565b60008082116107a05760405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606401610640565b6003546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156107f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081b919061131b565b506001600160a01b0383166000908152600b6020526040812054900361088757600c80546001810182556000919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70180546001600160a01b0319166001600160a01b0385161790555b6001600160a01b0383166000908152600b6020526040812080548492906108af90849061129c565b9250508190555081600d60008282546108c8919061129c565b9091555050506001600160a01b0382166000908152600e6020526040902042905560015b92915050565b60006108fd826104e4565b90506000600360009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610954573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610978919061126d565b90506109ad816040518060400160405280601181526020017063697263756c6174696e67537570706c7960781b815250610f96565b6000670de0b6b3a7640000826007546109c6919061133d565b6109d09190611354565b905080831115610a045760006109e68285611308565b905081935080600a60008282546109fd919061129c565b9091555050505b50505050565b600154604051634869e12d60e01b81526004810183905260009182916001600160a01b0390911690634869e12d90602401602060405180830381865afa158015610a58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7c9190611376565b60015460405163a80fc07160e01b8152600481018690529192506000916001600160a01b039091169063a80fc07190602401602060405180830381865afa158015610acb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aef9190611376565b9050806001600160801b0316826001600160801b03161115610b4a5760405162461bcd60e51b8152602060048201526014602482015273496e76616c69642073747265616d20737461746560601b6044820152606401610640565b6000610b56838361139f565b6001600160801b031695945050505050565b610b70610fdf565b610b7a600061100c565b565b60606000610b8983610c88565b90506000815167ffffffffffffffff811115610ba757610ba76113c6565b604051908082528060200260200182016040528015610bd0578160200160208202803683370190505b509050600182511115610c405760005b8251811015610601576000838281518110610bfd57610bfd6112af565b60200260200101519050610c1081610a0a565b838381518110610c2257610c226112af565b60209081029190910101525080610c38816112c5565b915050610be0565b610c6382600081518110610c5657610c566112af565b6020026020010151610a0a565b81600081518110610c7657610c766112af565b60209081029190910101529392505050565b6001600160a01b0381166000908152600f6020908152604091829020805483518184028101840190945280845260609392830182828015610ce857602002820191906000526020600020905b815481526020019060010190808311610cd4575b50505050509050919050565b610cfc610fdf565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166000908152600f60205260409020610a049083836110c2565b600f6020528160005260406000208181548110610d5d57600080fd5b90600052602060002001600091509150505481565b6004546005546000918291828183610d9281670de0b6b3a764000061133d565b610d9c9190611354565b610da6919061129c565b610db890670de0b6b3a764000061133d565b9050610def604051806040016040528060138152602001723cb2b9903b37ba3290383937b837b93a34b7b760691b8152508261105c565b600a54610dfc908261133d565b610e0e90670de0b6b3a764000061133d565b600881905560408051808201909152601081526f6f766572666c6f77596573766f74657360801b6020820152610e439161105c565b600854600a54610e539190611308565b600981905560408051808201909152600f81526e6f766572666c6f774e6f766f74657360881b6020820152610e879161105c565b60085460048054600090610e9c90849061129c565b909155505060095460058054600090610eb690849061129c565b909155505060045460055490969095509350505050565b610ed5610fdf565b6001600160a01b038116610eff57604051631e4fbdf760e01b815260006004820152602401610640565b610f088161100c565b50565b6001600160a01b0381166000908152600b60205260408120548290610f425760405162461bcd60e51b8152600401610640906112de565b50506001600160a01b03166000908152601160205260409020805460ff1916600190811790915590565b600c8181548110610f7c57600080fd5b6000918252602090912001546001600160a01b0316905081565b610fdb8282604051602401610fac929190611422565b60408051601f198184030181529190526020810180516001600160e01b031663643fd0df60e01b17905261109d565b5050565b6000546001600160a01b03163314610b7a5760405163118cdaa760e01b8152336004820152602401610640565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610fdb828260405160240161107292919061143b565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790525b610f088160006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b8280548282559060005260206000209081019282156110fd579160200282015b828111156110fd5782358255916020019190600101906110e2565b5061110992915061110d565b5090565b5b80821115611109576000815560010161110e565b80356001600160a01b038116811461113957600080fd5b919050565b60006020828403121561115057600080fd5b61115982611122565b9392505050565b60006020828403121561117257600080fd5b5035919050565b6000806040838503121561118c57600080fd5b61119583611122565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b818110156111db578351835292840192918401916001016111bf565b50909695505050505050565b6000806000604084860312156111fc57600080fd5b61120584611122565b9250602084013567ffffffffffffffff8082111561122257600080fd5b818601915086601f83011261123657600080fd5b81358181111561124557600080fd5b8760208260051b850101111561125a57600080fd5b6020830194508093505050509250925092565b60006020828403121561127f57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108ec576108ec611286565b634e487b7160e01b600052603260045260246000fd5b6000600182016112d7576112d7611286565b5060010190565b60208082526010908201526f139bc81d1bdad95b9cc81cdd185ad95960821b604082015260600190565b818103818111156108ec576108ec611286565b60006020828403121561132d57600080fd5b8151801515811461115957600080fd5b80820281158282048414176108ec576108ec611286565b60008261137157634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561138857600080fd5b81516001600160801b038116811461115957600080fd5b6001600160801b038281168282160390808211156113bf576113bf611286565b5092915050565b634e487b7160e01b600052604160045260246000fd5b6000815180845260005b81811015611402576020818501810151868301820152016113e6565b506000602082860101526020601f19601f83011685010191505092915050565b8281526040602082015260006105a560408301846113dc565b60408152600061144e60408301856113dc565b9050826020830152939250505056fea164736f6c6343000814000a";

type SablierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SablierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Sablier__factory extends ContractFactory {
  constructor(...args: SablierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _sablierV2LockupAddress: AddressLike,
    _token: AddressLike,
    _staking: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _sablierV2LockupAddress,
      _token,
      _staking,
      overrides || {}
    );
  }
  override deploy(
    _sablierV2LockupAddress: AddressLike,
    _token: AddressLike,
    _staking: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _sablierV2LockupAddress,
      _token,
      _staking,
      overrides || {}
    ) as Promise<
      Sablier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Sablier__factory {
    return super.connect(runner) as Sablier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SablierInterface {
    return new Interface(_abi) as SablierInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Sablier {
    return new Contract(address, _abi, runner) as unknown as Sablier;
  }
}
