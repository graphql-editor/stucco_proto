import * as jspb from 'google-protobuf'



export class ObjectValue extends jspb.Message {
  getPropsMap(): jspb.Map<string, Value>;
  clearPropsMap(): ObjectValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectValue.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectValue): ObjectValue.AsObject;
  static serializeBinaryToWriter(message: ObjectValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectValue;
  static deserializeBinaryFromReader(message: ObjectValue, reader: jspb.BinaryReader): ObjectValue;
}

export namespace ObjectValue {
  export type AsObject = {
    propsMap: Array<[string, Value.AsObject]>,
  }
}

export class ArrayValue extends jspb.Message {
  getItemsList(): Array<Value>;
  setItemsList(value: Array<Value>): ArrayValue;
  clearItemsList(): ArrayValue;
  addItems(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayValue): ArrayValue.AsObject;
  static serializeBinaryToWriter(message: ArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayValue;
  static deserializeBinaryFromReader(message: ArrayValue, reader: jspb.BinaryReader): ArrayValue;
}

export namespace ArrayValue {
  export type AsObject = {
    itemsList: Array<Value.AsObject>,
  }
}

export class Value extends jspb.Message {
  getI(): number;
  setI(value: number): Value;

  getU(): number;
  setU(value: number): Value;

  getF(): number;
  setF(value: number): Value;

  getS(): string;
  setS(value: string): Value;

  getB(): boolean;
  setB(value: boolean): Value;

  getO(): ObjectValue | undefined;
  setO(value?: ObjectValue): Value;
  hasO(): boolean;
  clearO(): Value;

  getA(): ArrayValue | undefined;
  setA(value?: ArrayValue): Value;
  hasA(): boolean;
  clearA(): Value;

  getAny(): Uint8Array | string;
  getAny_asU8(): Uint8Array;
  getAny_asB64(): string;
  setAny(value: Uint8Array | string): Value;

  getVariable(): string;
  setVariable(value: string): Value;

  getNil(): boolean;
  setNil(value: boolean): Value;

  getTestValueCase(): Value.TestValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    i: number,
    u: number,
    f: number,
    s: string,
    b: boolean,
    o?: ObjectValue.AsObject,
    a?: ArrayValue.AsObject,
    any: Uint8Array | string,
    variable: string,
    nil: boolean,
  }

  export enum TestValueCase { 
    TEST_VALUE_NOT_SET = 0,
    I = 1,
    U = 2,
    F = 3,
    S = 4,
    B = 5,
    O = 6,
    A = 7,
    ANY = 8,
    VARIABLE = 9,
    NIL = 10,
  }
}

export class Error extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    msg: string,
  }
}

export class Function extends jspb.Message {
  getName(): string;
  setName(value: string): Function;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Function.AsObject;
  static toObject(includeInstance: boolean, msg: Function): Function.AsObject;
  static serializeBinaryToWriter(message: Function, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Function;
  static deserializeBinaryFromReader(message: Function, reader: jspb.BinaryReader): Function;
}

export namespace Function {
  export type AsObject = {
    name: string,
  }
}

export class TypeRef extends jspb.Message {
  getName(): string;
  setName(value: string): TypeRef;

  getNonnull(): TypeRef | undefined;
  setNonnull(value?: TypeRef): TypeRef;
  hasNonnull(): boolean;
  clearNonnull(): TypeRef;

  getList(): TypeRef | undefined;
  setList(value?: TypeRef): TypeRef;
  hasList(): boolean;
  clearList(): TypeRef;

  getTestTyperefCase(): TypeRef.TestTyperefCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeRef.AsObject;
  static toObject(includeInstance: boolean, msg: TypeRef): TypeRef.AsObject;
  static serializeBinaryToWriter(message: TypeRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeRef;
  static deserializeBinaryFromReader(message: TypeRef, reader: jspb.BinaryReader): TypeRef;
}

export namespace TypeRef {
  export type AsObject = {
    name: string,
    nonnull?: TypeRef.AsObject,
    list?: TypeRef.AsObject,
  }

  export enum TestTyperefCase { 
    TEST_TYPEREF_NOT_SET = 0,
    NAME = 1,
    NONNULL = 2,
    LIST = 3,
  }
}

export class ResponsePath extends jspb.Message {
  getKey(): Value | undefined;
  setKey(value?: Value): ResponsePath;
  hasKey(): boolean;
  clearKey(): ResponsePath;

  getPrev(): ResponsePath | undefined;
  setPrev(value?: ResponsePath): ResponsePath;
  hasPrev(): boolean;
  clearPrev(): ResponsePath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsePath.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsePath): ResponsePath.AsObject;
  static serializeBinaryToWriter(message: ResponsePath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsePath;
  static deserializeBinaryFromReader(message: ResponsePath, reader: jspb.BinaryReader): ResponsePath;
}

export namespace ResponsePath {
  export type AsObject = {
    key?: Value.AsObject,
    prev?: ResponsePath.AsObject,
  }
}

export class Variable extends jspb.Message {
  getName(): string;
  setName(value: string): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    name: string,
  }
}

export class VariableDefinition extends jspb.Message {
  getVariable(): Variable | undefined;
  setVariable(value?: Variable): VariableDefinition;
  hasVariable(): boolean;
  clearVariable(): VariableDefinition;

  getDefaultvalue(): Value | undefined;
  setDefaultvalue(value?: Value): VariableDefinition;
  hasDefaultvalue(): boolean;
  clearDefaultvalue(): VariableDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: VariableDefinition): VariableDefinition.AsObject;
  static serializeBinaryToWriter(message: VariableDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableDefinition;
  static deserializeBinaryFromReader(message: VariableDefinition, reader: jspb.BinaryReader): VariableDefinition;
}

export namespace VariableDefinition {
  export type AsObject = {
    variable?: Variable.AsObject,
    defaultvalue?: Value.AsObject,
  }
}

export class Directive extends jspb.Message {
  getName(): string;
  setName(value: string): Directive;

  getArgumentsMap(): jspb.Map<string, Value>;
  clearArgumentsMap(): Directive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Directive.AsObject;
  static toObject(includeInstance: boolean, msg: Directive): Directive.AsObject;
  static serializeBinaryToWriter(message: Directive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Directive;
  static deserializeBinaryFromReader(message: Directive, reader: jspb.BinaryReader): Directive;
}

export namespace Directive {
  export type AsObject = {
    name: string,
    argumentsMap: Array<[string, Value.AsObject]>,
  }
}

export class FragmentDefinition extends jspb.Message {
  getDirectivesList(): Array<Directive>;
  setDirectivesList(value: Array<Directive>): FragmentDefinition;
  clearDirectivesList(): FragmentDefinition;
  addDirectives(value?: Directive, index?: number): Directive;

  getTypecondition(): TypeRef | undefined;
  setTypecondition(value?: TypeRef): FragmentDefinition;
  hasTypecondition(): boolean;
  clearTypecondition(): FragmentDefinition;

  getSelectionsetList(): Array<Selection>;
  setSelectionsetList(value: Array<Selection>): FragmentDefinition;
  clearSelectionsetList(): FragmentDefinition;
  addSelectionset(value?: Selection, index?: number): Selection;

  getVariabledefinitionsList(): Array<VariableDefinition>;
  setVariabledefinitionsList(value: Array<VariableDefinition>): FragmentDefinition;
  clearVariabledefinitionsList(): FragmentDefinition;
  addVariabledefinitions(value?: VariableDefinition, index?: number): VariableDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FragmentDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: FragmentDefinition): FragmentDefinition.AsObject;
  static serializeBinaryToWriter(message: FragmentDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FragmentDefinition;
  static deserializeBinaryFromReader(message: FragmentDefinition, reader: jspb.BinaryReader): FragmentDefinition;
}

export namespace FragmentDefinition {
  export type AsObject = {
    directivesList: Array<Directive.AsObject>,
    typecondition?: TypeRef.AsObject,
    selectionsetList: Array<Selection.AsObject>,
    variabledefinitionsList: Array<VariableDefinition.AsObject>,
  }
}

export class Selection extends jspb.Message {
  getName(): string;
  setName(value: string): Selection;

  getArgumentsMap(): jspb.Map<string, Value>;
  clearArgumentsMap(): Selection;

  getDirectivesList(): Array<Directive>;
  setDirectivesList(value: Array<Directive>): Selection;
  clearDirectivesList(): Selection;
  addDirectives(value?: Directive, index?: number): Directive;

  getSelectionsetList(): Array<Selection>;
  setSelectionsetList(value: Array<Selection>): Selection;
  clearSelectionsetList(): Selection;
  addSelectionset(value?: Selection, index?: number): Selection;

  getDefinition(): FragmentDefinition | undefined;
  setDefinition(value?: FragmentDefinition): Selection;
  hasDefinition(): boolean;
  clearDefinition(): Selection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Selection.AsObject;
  static toObject(includeInstance: boolean, msg: Selection): Selection.AsObject;
  static serializeBinaryToWriter(message: Selection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Selection;
  static deserializeBinaryFromReader(message: Selection, reader: jspb.BinaryReader): Selection;
}

export namespace Selection {
  export type AsObject = {
    name: string,
    argumentsMap: Array<[string, Value.AsObject]>,
    directivesList: Array<Directive.AsObject>,
    selectionsetList: Array<Selection.AsObject>,
    definition?: FragmentDefinition.AsObject,
  }
}

export class OperationDefinition extends jspb.Message {
  getOperation(): string;
  setOperation(value: string): OperationDefinition;

  getName(): string;
  setName(value: string): OperationDefinition;

  getVariabledefinitionsList(): Array<VariableDefinition>;
  setVariabledefinitionsList(value: Array<VariableDefinition>): OperationDefinition;
  clearVariabledefinitionsList(): OperationDefinition;
  addVariabledefinitions(value?: VariableDefinition, index?: number): VariableDefinition;

  getDirectivesList(): Array<Directive>;
  setDirectivesList(value: Array<Directive>): OperationDefinition;
  clearDirectivesList(): OperationDefinition;
  addDirectives(value?: Directive, index?: number): Directive;

  getSelectionsetList(): Array<Selection>;
  setSelectionsetList(value: Array<Selection>): OperationDefinition;
  clearSelectionsetList(): OperationDefinition;
  addSelectionset(value?: Selection, index?: number): Selection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: OperationDefinition): OperationDefinition.AsObject;
  static serializeBinaryToWriter(message: OperationDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationDefinition;
  static deserializeBinaryFromReader(message: OperationDefinition, reader: jspb.BinaryReader): OperationDefinition;
}

export namespace OperationDefinition {
  export type AsObject = {
    operation: string,
    name: string,
    variabledefinitionsList: Array<VariableDefinition.AsObject>,
    directivesList: Array<Directive.AsObject>,
    selectionsetList: Array<Selection.AsObject>,
  }
}

export class FieldResolveInfo extends jspb.Message {
  getFieldname(): string;
  setFieldname(value: string): FieldResolveInfo;

  getPath(): ResponsePath | undefined;
  setPath(value?: ResponsePath): FieldResolveInfo;
  hasPath(): boolean;
  clearPath(): FieldResolveInfo;

  getReturntype(): TypeRef | undefined;
  setReturntype(value?: TypeRef): FieldResolveInfo;
  hasReturntype(): boolean;
  clearReturntype(): FieldResolveInfo;

  getParenttype(): TypeRef | undefined;
  setParenttype(value?: TypeRef): FieldResolveInfo;
  hasParenttype(): boolean;
  clearParenttype(): FieldResolveInfo;

  getOperation(): OperationDefinition | undefined;
  setOperation(value?: OperationDefinition): FieldResolveInfo;
  hasOperation(): boolean;
  clearOperation(): FieldResolveInfo;

  getVariablevaluesMap(): jspb.Map<string, Value>;
  clearVariablevaluesMap(): FieldResolveInfo;

  getRootvalue(): Value | undefined;
  setRootvalue(value?: Value): FieldResolveInfo;
  hasRootvalue(): boolean;
  clearRootvalue(): FieldResolveInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldResolveInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FieldResolveInfo): FieldResolveInfo.AsObject;
  static serializeBinaryToWriter(message: FieldResolveInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldResolveInfo;
  static deserializeBinaryFromReader(message: FieldResolveInfo, reader: jspb.BinaryReader): FieldResolveInfo;
}

export namespace FieldResolveInfo {
  export type AsObject = {
    fieldname: string,
    path?: ResponsePath.AsObject,
    returntype?: TypeRef.AsObject,
    parenttype?: TypeRef.AsObject,
    operation?: OperationDefinition.AsObject,
    variablevaluesMap: Array<[string, Value.AsObject]>,
    rootvalue?: Value.AsObject,
  }
}

export class FieldResolveRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): FieldResolveRequest;
  hasFunction(): boolean;
  clearFunction(): FieldResolveRequest;

  getSource(): Value | undefined;
  setSource(value?: Value): FieldResolveRequest;
  hasSource(): boolean;
  clearSource(): FieldResolveRequest;

  getArgumentsMap(): jspb.Map<string, Value>;
  clearArgumentsMap(): FieldResolveRequest;

  getInfo(): FieldResolveInfo | undefined;
  setInfo(value?: FieldResolveInfo): FieldResolveRequest;
  hasInfo(): boolean;
  clearInfo(): FieldResolveRequest;

  getSecretsMap(): jspb.Map<string, string>;
  clearSecretsMap(): FieldResolveRequest;

  getProtocol(): Value | undefined;
  setProtocol(value?: Value): FieldResolveRequest;
  hasProtocol(): boolean;
  clearProtocol(): FieldResolveRequest;

  getSubscritpionpayload(): Value | undefined;
  setSubscritpionpayload(value?: Value): FieldResolveRequest;
  hasSubscritpionpayload(): boolean;
  clearSubscritpionpayload(): FieldResolveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldResolveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FieldResolveRequest): FieldResolveRequest.AsObject;
  static serializeBinaryToWriter(message: FieldResolveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldResolveRequest;
  static deserializeBinaryFromReader(message: FieldResolveRequest, reader: jspb.BinaryReader): FieldResolveRequest;
}

export namespace FieldResolveRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
    source?: Value.AsObject,
    argumentsMap: Array<[string, Value.AsObject]>,
    info?: FieldResolveInfo.AsObject,
    secretsMap: Array<[string, string]>,
    protocol?: Value.AsObject,
    subscritpionpayload?: Value.AsObject,
  }
}

export class FieldResolveResponse extends jspb.Message {
  getResponse(): Value | undefined;
  setResponse(value?: Value): FieldResolveResponse;
  hasResponse(): boolean;
  clearResponse(): FieldResolveResponse;

  getError(): Error | undefined;
  setError(value?: Error): FieldResolveResponse;
  hasError(): boolean;
  clearError(): FieldResolveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldResolveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FieldResolveResponse): FieldResolveResponse.AsObject;
  static serializeBinaryToWriter(message: FieldResolveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldResolveResponse;
  static deserializeBinaryFromReader(message: FieldResolveResponse, reader: jspb.BinaryReader): FieldResolveResponse;
}

export namespace FieldResolveResponse {
  export type AsObject = {
    response?: Value.AsObject,
    error?: Error.AsObject,
  }
}

export class InterfaceResolveTypeInfo extends jspb.Message {
  getFieldname(): string;
  setFieldname(value: string): InterfaceResolveTypeInfo;

  getPath(): ResponsePath | undefined;
  setPath(value?: ResponsePath): InterfaceResolveTypeInfo;
  hasPath(): boolean;
  clearPath(): InterfaceResolveTypeInfo;

  getReturntype(): TypeRef | undefined;
  setReturntype(value?: TypeRef): InterfaceResolveTypeInfo;
  hasReturntype(): boolean;
  clearReturntype(): InterfaceResolveTypeInfo;

  getParenttype(): TypeRef | undefined;
  setParenttype(value?: TypeRef): InterfaceResolveTypeInfo;
  hasParenttype(): boolean;
  clearParenttype(): InterfaceResolveTypeInfo;

  getOperation(): OperationDefinition | undefined;
  setOperation(value?: OperationDefinition): InterfaceResolveTypeInfo;
  hasOperation(): boolean;
  clearOperation(): InterfaceResolveTypeInfo;

  getVariablevaluesMap(): jspb.Map<string, Value>;
  clearVariablevaluesMap(): InterfaceResolveTypeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceResolveTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceResolveTypeInfo): InterfaceResolveTypeInfo.AsObject;
  static serializeBinaryToWriter(message: InterfaceResolveTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceResolveTypeInfo;
  static deserializeBinaryFromReader(message: InterfaceResolveTypeInfo, reader: jspb.BinaryReader): InterfaceResolveTypeInfo;
}

export namespace InterfaceResolveTypeInfo {
  export type AsObject = {
    fieldname: string,
    path?: ResponsePath.AsObject,
    returntype?: TypeRef.AsObject,
    parenttype?: TypeRef.AsObject,
    operation?: OperationDefinition.AsObject,
    variablevaluesMap: Array<[string, Value.AsObject]>,
  }
}

export class InterfaceResolveTypeRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): InterfaceResolveTypeRequest;
  hasFunction(): boolean;
  clearFunction(): InterfaceResolveTypeRequest;

  getValue(): Value | undefined;
  setValue(value?: Value): InterfaceResolveTypeRequest;
  hasValue(): boolean;
  clearValue(): InterfaceResolveTypeRequest;

  getInfo(): InterfaceResolveTypeInfo | undefined;
  setInfo(value?: InterfaceResolveTypeInfo): InterfaceResolveTypeRequest;
  hasInfo(): boolean;
  clearInfo(): InterfaceResolveTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceResolveTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceResolveTypeRequest): InterfaceResolveTypeRequest.AsObject;
  static serializeBinaryToWriter(message: InterfaceResolveTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceResolveTypeRequest;
  static deserializeBinaryFromReader(message: InterfaceResolveTypeRequest, reader: jspb.BinaryReader): InterfaceResolveTypeRequest;
}

export namespace InterfaceResolveTypeRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
    value?: Value.AsObject,
    info?: InterfaceResolveTypeInfo.AsObject,
  }
}

export class InterfaceResolveTypeResponse extends jspb.Message {
  getType(): TypeRef | undefined;
  setType(value?: TypeRef): InterfaceResolveTypeResponse;
  hasType(): boolean;
  clearType(): InterfaceResolveTypeResponse;

  getError(): Error | undefined;
  setError(value?: Error): InterfaceResolveTypeResponse;
  hasError(): boolean;
  clearError(): InterfaceResolveTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceResolveTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceResolveTypeResponse): InterfaceResolveTypeResponse.AsObject;
  static serializeBinaryToWriter(message: InterfaceResolveTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceResolveTypeResponse;
  static deserializeBinaryFromReader(message: InterfaceResolveTypeResponse, reader: jspb.BinaryReader): InterfaceResolveTypeResponse;
}

export namespace InterfaceResolveTypeResponse {
  export type AsObject = {
    type?: TypeRef.AsObject,
    error?: Error.AsObject,
  }
}

export class ScalarParseRequest extends jspb.Message {
  getValue(): Value | undefined;
  setValue(value?: Value): ScalarParseRequest;
  hasValue(): boolean;
  clearValue(): ScalarParseRequest;

  getFunction(): Function | undefined;
  setFunction(value?: Function): ScalarParseRequest;
  hasFunction(): boolean;
  clearFunction(): ScalarParseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScalarParseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScalarParseRequest): ScalarParseRequest.AsObject;
  static serializeBinaryToWriter(message: ScalarParseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScalarParseRequest;
  static deserializeBinaryFromReader(message: ScalarParseRequest, reader: jspb.BinaryReader): ScalarParseRequest;
}

export namespace ScalarParseRequest {
  export type AsObject = {
    value?: Value.AsObject,
    pb_function?: Function.AsObject,
  }
}

export class ScalarParseResponse extends jspb.Message {
  getValue(): Value | undefined;
  setValue(value?: Value): ScalarParseResponse;
  hasValue(): boolean;
  clearValue(): ScalarParseResponse;

  getError(): Error | undefined;
  setError(value?: Error): ScalarParseResponse;
  hasError(): boolean;
  clearError(): ScalarParseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScalarParseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScalarParseResponse): ScalarParseResponse.AsObject;
  static serializeBinaryToWriter(message: ScalarParseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScalarParseResponse;
  static deserializeBinaryFromReader(message: ScalarParseResponse, reader: jspb.BinaryReader): ScalarParseResponse;
}

export namespace ScalarParseResponse {
  export type AsObject = {
    value?: Value.AsObject,
    error?: Error.AsObject,
  }
}

export class ScalarSerializeRequest extends jspb.Message {
  getValue(): Value | undefined;
  setValue(value?: Value): ScalarSerializeRequest;
  hasValue(): boolean;
  clearValue(): ScalarSerializeRequest;

  getFunction(): Function | undefined;
  setFunction(value?: Function): ScalarSerializeRequest;
  hasFunction(): boolean;
  clearFunction(): ScalarSerializeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScalarSerializeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScalarSerializeRequest): ScalarSerializeRequest.AsObject;
  static serializeBinaryToWriter(message: ScalarSerializeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScalarSerializeRequest;
  static deserializeBinaryFromReader(message: ScalarSerializeRequest, reader: jspb.BinaryReader): ScalarSerializeRequest;
}

export namespace ScalarSerializeRequest {
  export type AsObject = {
    value?: Value.AsObject,
    pb_function?: Function.AsObject,
  }
}

export class ScalarSerializeResponse extends jspb.Message {
  getValue(): Value | undefined;
  setValue(value?: Value): ScalarSerializeResponse;
  hasValue(): boolean;
  clearValue(): ScalarSerializeResponse;

  getError(): Error | undefined;
  setError(value?: Error): ScalarSerializeResponse;
  hasError(): boolean;
  clearError(): ScalarSerializeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScalarSerializeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScalarSerializeResponse): ScalarSerializeResponse.AsObject;
  static serializeBinaryToWriter(message: ScalarSerializeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScalarSerializeResponse;
  static deserializeBinaryFromReader(message: ScalarSerializeResponse, reader: jspb.BinaryReader): ScalarSerializeResponse;
}

export namespace ScalarSerializeResponse {
  export type AsObject = {
    value?: Value.AsObject,
    error?: Error.AsObject,
  }
}

export class UnionResolveTypeInfo extends jspb.Message {
  getFieldname(): string;
  setFieldname(value: string): UnionResolveTypeInfo;

  getPath(): ResponsePath | undefined;
  setPath(value?: ResponsePath): UnionResolveTypeInfo;
  hasPath(): boolean;
  clearPath(): UnionResolveTypeInfo;

  getReturntype(): TypeRef | undefined;
  setReturntype(value?: TypeRef): UnionResolveTypeInfo;
  hasReturntype(): boolean;
  clearReturntype(): UnionResolveTypeInfo;

  getParenttype(): TypeRef | undefined;
  setParenttype(value?: TypeRef): UnionResolveTypeInfo;
  hasParenttype(): boolean;
  clearParenttype(): UnionResolveTypeInfo;

  getOperation(): OperationDefinition | undefined;
  setOperation(value?: OperationDefinition): UnionResolveTypeInfo;
  hasOperation(): boolean;
  clearOperation(): UnionResolveTypeInfo;

  getVariablevaluesMap(): jspb.Map<string, Value>;
  clearVariablevaluesMap(): UnionResolveTypeInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnionResolveTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UnionResolveTypeInfo): UnionResolveTypeInfo.AsObject;
  static serializeBinaryToWriter(message: UnionResolveTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnionResolveTypeInfo;
  static deserializeBinaryFromReader(message: UnionResolveTypeInfo, reader: jspb.BinaryReader): UnionResolveTypeInfo;
}

export namespace UnionResolveTypeInfo {
  export type AsObject = {
    fieldname: string,
    path?: ResponsePath.AsObject,
    returntype?: TypeRef.AsObject,
    parenttype?: TypeRef.AsObject,
    operation?: OperationDefinition.AsObject,
    variablevaluesMap: Array<[string, Value.AsObject]>,
  }
}

export class UnionResolveTypeRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): UnionResolveTypeRequest;
  hasFunction(): boolean;
  clearFunction(): UnionResolveTypeRequest;

  getValue(): Value | undefined;
  setValue(value?: Value): UnionResolveTypeRequest;
  hasValue(): boolean;
  clearValue(): UnionResolveTypeRequest;

  getInfo(): UnionResolveTypeInfo | undefined;
  setInfo(value?: UnionResolveTypeInfo): UnionResolveTypeRequest;
  hasInfo(): boolean;
  clearInfo(): UnionResolveTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnionResolveTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnionResolveTypeRequest): UnionResolveTypeRequest.AsObject;
  static serializeBinaryToWriter(message: UnionResolveTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnionResolveTypeRequest;
  static deserializeBinaryFromReader(message: UnionResolveTypeRequest, reader: jspb.BinaryReader): UnionResolveTypeRequest;
}

export namespace UnionResolveTypeRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
    value?: Value.AsObject,
    info?: UnionResolveTypeInfo.AsObject,
  }
}

export class UnionResolveTypeResponse extends jspb.Message {
  getType(): TypeRef | undefined;
  setType(value?: TypeRef): UnionResolveTypeResponse;
  hasType(): boolean;
  clearType(): UnionResolveTypeResponse;

  getError(): Error | undefined;
  setError(value?: Error): UnionResolveTypeResponse;
  hasError(): boolean;
  clearError(): UnionResolveTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnionResolveTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnionResolveTypeResponse): UnionResolveTypeResponse.AsObject;
  static serializeBinaryToWriter(message: UnionResolveTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnionResolveTypeResponse;
  static deserializeBinaryFromReader(message: UnionResolveTypeResponse, reader: jspb.BinaryReader): UnionResolveTypeResponse;
}

export namespace UnionResolveTypeResponse {
  export type AsObject = {
    type?: TypeRef.AsObject,
    error?: Error.AsObject,
  }
}

export class Secret extends jspb.Message {
  getKey(): string;
  setKey(value: string): Secret;

  getValue(): string;
  setValue(value: string): Secret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Secret.AsObject;
  static toObject(includeInstance: boolean, msg: Secret): Secret.AsObject;
  static serializeBinaryToWriter(message: Secret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Secret;
  static deserializeBinaryFromReader(message: Secret, reader: jspb.BinaryReader): Secret;
}

export namespace Secret {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class SetSecretsRequest extends jspb.Message {
  getSecretsList(): Array<Secret>;
  setSecretsList(value: Array<Secret>): SetSecretsRequest;
  clearSecretsList(): SetSecretsRequest;
  addSecrets(value?: Secret, index?: number): Secret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSecretsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSecretsRequest): SetSecretsRequest.AsObject;
  static serializeBinaryToWriter(message: SetSecretsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSecretsRequest;
  static deserializeBinaryFromReader(message: SetSecretsRequest, reader: jspb.BinaryReader): SetSecretsRequest;
}

export namespace SetSecretsRequest {
  export type AsObject = {
    secretsList: Array<Secret.AsObject>,
  }
}

export class SetSecretsResponse extends jspb.Message {
  getError(): Error | undefined;
  setError(value?: Error): SetSecretsResponse;
  hasError(): boolean;
  clearError(): SetSecretsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSecretsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSecretsResponse): SetSecretsResponse.AsObject;
  static serializeBinaryToWriter(message: SetSecretsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSecretsResponse;
  static deserializeBinaryFromReader(message: SetSecretsResponse, reader: jspb.BinaryReader): SetSecretsResponse;
}

export namespace SetSecretsResponse {
  export type AsObject = {
    error?: Error.AsObject,
  }
}

export class StreamInfo extends jspb.Message {
  getFieldname(): string;
  setFieldname(value: string): StreamInfo;

  getPath(): ResponsePath | undefined;
  setPath(value?: ResponsePath): StreamInfo;
  hasPath(): boolean;
  clearPath(): StreamInfo;

  getReturntype(): TypeRef | undefined;
  setReturntype(value?: TypeRef): StreamInfo;
  hasReturntype(): boolean;
  clearReturntype(): StreamInfo;

  getParenttype(): TypeRef | undefined;
  setParenttype(value?: TypeRef): StreamInfo;
  hasParenttype(): boolean;
  clearParenttype(): StreamInfo;

  getOperation(): OperationDefinition | undefined;
  setOperation(value?: OperationDefinition): StreamInfo;
  hasOperation(): boolean;
  clearOperation(): StreamInfo;

  getVariablevaluesMap(): jspb.Map<string, Value>;
  clearVariablevaluesMap(): StreamInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StreamInfo): StreamInfo.AsObject;
  static serializeBinaryToWriter(message: StreamInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamInfo;
  static deserializeBinaryFromReader(message: StreamInfo, reader: jspb.BinaryReader): StreamInfo;
}

export namespace StreamInfo {
  export type AsObject = {
    fieldname: string,
    path?: ResponsePath.AsObject,
    returntype?: TypeRef.AsObject,
    parenttype?: TypeRef.AsObject,
    operation?: OperationDefinition.AsObject,
    variablevaluesMap: Array<[string, Value.AsObject]>,
  }
}

export class StreamRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): StreamRequest;
  hasFunction(): boolean;
  clearFunction(): StreamRequest;

  getArgumentsMap(): jspb.Map<string, Value>;
  clearArgumentsMap(): StreamRequest;

  getInfo(): StreamInfo | undefined;
  setInfo(value?: StreamInfo): StreamRequest;
  hasInfo(): boolean;
  clearInfo(): StreamRequest;

  getSecretsMap(): jspb.Map<string, string>;
  clearSecretsMap(): StreamRequest;

  getProtocol(): Value | undefined;
  setProtocol(value?: Value): StreamRequest;
  hasProtocol(): boolean;
  clearProtocol(): StreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
    argumentsMap: Array<[string, Value.AsObject]>,
    info?: StreamInfo.AsObject,
    secretsMap: Array<[string, string]>,
    protocol?: Value.AsObject,
  }
}

export class StreamMessage extends jspb.Message {
  getResponse(): Value | undefined;
  setResponse(value?: Value): StreamMessage;
  hasResponse(): boolean;
  clearResponse(): StreamMessage;

  getError(): Error | undefined;
  setError(value?: Error): StreamMessage;
  hasError(): boolean;
  clearError(): StreamMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessage.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessage): StreamMessage.AsObject;
  static serializeBinaryToWriter(message: StreamMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessage;
  static deserializeBinaryFromReader(message: StreamMessage, reader: jspb.BinaryReader): StreamMessage;
}

export namespace StreamMessage {
  export type AsObject = {
    response?: Value.AsObject,
    error?: Error.AsObject,
  }
}

export class ByteStreamRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ByteStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ByteStreamRequest): ByteStreamRequest.AsObject;
  static serializeBinaryToWriter(message: ByteStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ByteStreamRequest;
  static deserializeBinaryFromReader(message: ByteStreamRequest, reader: jspb.BinaryReader): ByteStreamRequest;
}

export namespace ByteStreamRequest {
  export type AsObject = {
  }
}

export class ByteStream extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): ByteStream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ByteStream.AsObject;
  static toObject(includeInstance: boolean, msg: ByteStream): ByteStream.AsObject;
  static serializeBinaryToWriter(message: ByteStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ByteStream;
  static deserializeBinaryFromReader(message: ByteStream, reader: jspb.BinaryReader): ByteStream;
}

export namespace ByteStream {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class SubscriptionConnectionRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): SubscriptionConnectionRequest;
  hasFunction(): boolean;
  clearFunction(): SubscriptionConnectionRequest;

  getQuery(): string;
  setQuery(value: string): SubscriptionConnectionRequest;

  getVariablevaluesMap(): jspb.Map<string, Value>;
  clearVariablevaluesMap(): SubscriptionConnectionRequest;

  getOperationname(): string;
  setOperationname(value: string): SubscriptionConnectionRequest;

  getProtocol(): Value | undefined;
  setProtocol(value?: Value): SubscriptionConnectionRequest;
  hasProtocol(): boolean;
  clearProtocol(): SubscriptionConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionConnectionRequest): SubscriptionConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: SubscriptionConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionConnectionRequest;
  static deserializeBinaryFromReader(message: SubscriptionConnectionRequest, reader: jspb.BinaryReader): SubscriptionConnectionRequest;
}

export namespace SubscriptionConnectionRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
    query: string,
    variablevaluesMap: Array<[string, Value.AsObject]>,
    operationname: string,
    protocol?: Value.AsObject,
  }
}

export class SubscriptionConnectionResponse extends jspb.Message {
  getResponse(): Value | undefined;
  setResponse(value?: Value): SubscriptionConnectionResponse;
  hasResponse(): boolean;
  clearResponse(): SubscriptionConnectionResponse;

  getError(): Error | undefined;
  setError(value?: Error): SubscriptionConnectionResponse;
  hasError(): boolean;
  clearError(): SubscriptionConnectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionConnectionResponse): SubscriptionConnectionResponse.AsObject;
  static serializeBinaryToWriter(message: SubscriptionConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionConnectionResponse;
  static deserializeBinaryFromReader(message: SubscriptionConnectionResponse, reader: jspb.BinaryReader): SubscriptionConnectionResponse;
}

export namespace SubscriptionConnectionResponse {
  export type AsObject = {
    response?: Value.AsObject,
    error?: Error.AsObject,
  }
}

export class SubscriptionListenRequest extends jspb.Message {
  getFunction(): Function | undefined;
  setFunction(value?: Function): SubscriptionListenRequest;
  hasFunction(): boolean;
  clearFunction(): SubscriptionListenRequest;

  getQuery(): string;
  setQuery(value: string): SubscriptionListenRequest;

  getVariablevaluesMap(): jspb.Map<string, Value>;
  clearVariablevaluesMap(): SubscriptionListenRequest;

  getOperationname(): string;
  setOperationname(value: string): SubscriptionListenRequest;

  getProtocol(): Value | undefined;
  setProtocol(value?: Value): SubscriptionListenRequest;
  hasProtocol(): boolean;
  clearProtocol(): SubscriptionListenRequest;

  getOperation(): OperationDefinition | undefined;
  setOperation(value?: OperationDefinition): SubscriptionListenRequest;
  hasOperation(): boolean;
  clearOperation(): SubscriptionListenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionListenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionListenRequest): SubscriptionListenRequest.AsObject;
  static serializeBinaryToWriter(message: SubscriptionListenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionListenRequest;
  static deserializeBinaryFromReader(message: SubscriptionListenRequest, reader: jspb.BinaryReader): SubscriptionListenRequest;
}

export namespace SubscriptionListenRequest {
  export type AsObject = {
    pb_function?: Function.AsObject,
    query: string,
    variablevaluesMap: Array<[string, Value.AsObject]>,
    operationname: string,
    protocol?: Value.AsObject,
    operation?: OperationDefinition.AsObject,
  }
}

export class SubscriptionListenMessage extends jspb.Message {
  getNext(): boolean;
  setNext(value: boolean): SubscriptionListenMessage;

  getPayload(): Value | undefined;
  setPayload(value?: Value): SubscriptionListenMessage;
  hasPayload(): boolean;
  clearPayload(): SubscriptionListenMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionListenMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionListenMessage): SubscriptionListenMessage.AsObject;
  static serializeBinaryToWriter(message: SubscriptionListenMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionListenMessage;
  static deserializeBinaryFromReader(message: SubscriptionListenMessage, reader: jspb.BinaryReader): SubscriptionListenMessage;
}

export namespace SubscriptionListenMessage {
  export type AsObject = {
    next: boolean,
    payload?: Value.AsObject,
  }
}

