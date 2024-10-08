/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface ISabilerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calculateFinalVotes"
      | "calculateFinalvotingPower"
      | "gettotalamount"
      | "handleOverflowVotes"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculateFinalVotes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateFinalvotingPower",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "gettotalamount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "handleOverflowVotes",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateFinalVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateFinalvotingPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gettotalamount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleOverflowVotes",
    data: BytesLike
  ): Result;
}

export interface ISabiler extends BaseContract {
  connect(runner?: ContractRunner | null): ISabiler;
  waitForDeployment(): Promise<this>;

  interface: ISabilerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  calculateFinalVotes: TypedContractMethod<
    [],
    [[bigint, bigint]],
    "nonpayable"
  >;

  calculateFinalvotingPower: TypedContractMethod<
    [_user: AddressLike],
    [bigint],
    "view"
  >;

  gettotalamount: TypedContractMethod<[_user: AddressLike], [bigint], "view">;

  handleOverflowVotes: TypedContractMethod<
    [_user: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calculateFinalVotes"
  ): TypedContractMethod<[], [[bigint, bigint]], "nonpayable">;
  getFunction(
    nameOrSignature: "calculateFinalvotingPower"
  ): TypedContractMethod<[_user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "gettotalamount"
  ): TypedContractMethod<[_user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "handleOverflowVotes"
  ): TypedContractMethod<[_user: AddressLike], [void], "nonpayable">;

  filters: {};
}
