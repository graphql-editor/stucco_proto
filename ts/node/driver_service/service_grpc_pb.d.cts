// package: stucco.driver_service
// file: driver_service/service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as driver_service_service_pb from "../driver_service/service_pb.cjs";
import * as messages_messages_pb from "../messages/messages_pb.cjs";

interface IDriverService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    fieldResolve: IDriverService_IFieldResolve;
    interfaceResolveType: IDriverService_IInterfaceResolveType;
    scalarParse: IDriverService_IScalarParse;
    scalarSerialize: IDriverService_IScalarSerialize;
    unionResolveType: IDriverService_IUnionResolveType;
    setSecrets: IDriverService_ISetSecrets;
    stream: IDriverService_IStream;
    stdout: IDriverService_IStdout;
    stderr: IDriverService_IStderr;
    subscriptionConnection: IDriverService_ISubscriptionConnection;
    subscriptionListen: IDriverService_ISubscriptionListen;
}

interface IDriverService_IFieldResolve extends grpc.MethodDefinition<messages_messages_pb.FieldResolveRequest, messages_messages_pb.FieldResolveResponse> {
    path: "/stucco.driver_service.Driver/FieldResolve";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.FieldResolveRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.FieldResolveRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.FieldResolveResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.FieldResolveResponse>;
}
interface IDriverService_IInterfaceResolveType extends grpc.MethodDefinition<messages_messages_pb.InterfaceResolveTypeRequest, messages_messages_pb.InterfaceResolveTypeResponse> {
    path: "/stucco.driver_service.Driver/InterfaceResolveType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.InterfaceResolveTypeRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.InterfaceResolveTypeRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.InterfaceResolveTypeResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.InterfaceResolveTypeResponse>;
}
interface IDriverService_IScalarParse extends grpc.MethodDefinition<messages_messages_pb.ScalarParseRequest, messages_messages_pb.ScalarParseResponse> {
    path: "/stucco.driver_service.Driver/ScalarParse";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.ScalarParseRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.ScalarParseRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.ScalarParseResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.ScalarParseResponse>;
}
interface IDriverService_IScalarSerialize extends grpc.MethodDefinition<messages_messages_pb.ScalarSerializeRequest, messages_messages_pb.ScalarSerializeResponse> {
    path: "/stucco.driver_service.Driver/ScalarSerialize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.ScalarSerializeRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.ScalarSerializeRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.ScalarSerializeResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.ScalarSerializeResponse>;
}
interface IDriverService_IUnionResolveType extends grpc.MethodDefinition<messages_messages_pb.UnionResolveTypeRequest, messages_messages_pb.UnionResolveTypeResponse> {
    path: "/stucco.driver_service.Driver/UnionResolveType";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.UnionResolveTypeRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.UnionResolveTypeRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.UnionResolveTypeResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.UnionResolveTypeResponse>;
}
interface IDriverService_ISetSecrets extends grpc.MethodDefinition<messages_messages_pb.SetSecretsRequest, messages_messages_pb.SetSecretsResponse> {
    path: "/stucco.driver_service.Driver/SetSecrets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.SetSecretsRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.SetSecretsRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.SetSecretsResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.SetSecretsResponse>;
}
interface IDriverService_IStream extends grpc.MethodDefinition<messages_messages_pb.StreamRequest, messages_messages_pb.StreamMessage> {
    path: "/stucco.driver_service.Driver/Stream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_messages_pb.StreamRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.StreamRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.StreamMessage>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.StreamMessage>;
}
interface IDriverService_IStdout extends grpc.MethodDefinition<messages_messages_pb.ByteStreamRequest, messages_messages_pb.ByteStream> {
    path: "/stucco.driver_service.Driver/Stdout";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_messages_pb.ByteStreamRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.ByteStreamRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.ByteStream>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.ByteStream>;
}
interface IDriverService_IStderr extends grpc.MethodDefinition<messages_messages_pb.ByteStreamRequest, messages_messages_pb.ByteStream> {
    path: "/stucco.driver_service.Driver/Stderr";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_messages_pb.ByteStreamRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.ByteStreamRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.ByteStream>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.ByteStream>;
}
interface IDriverService_ISubscriptionConnection extends grpc.MethodDefinition<messages_messages_pb.SubscriptionConnectionRequest, messages_messages_pb.SubscriptionConnectionResponse> {
    path: "/stucco.driver_service.Driver/SubscriptionConnection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<messages_messages_pb.SubscriptionConnectionRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.SubscriptionConnectionRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.SubscriptionConnectionResponse>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.SubscriptionConnectionResponse>;
}
interface IDriverService_ISubscriptionListen extends grpc.MethodDefinition<messages_messages_pb.SubscriptionListenRequest, messages_messages_pb.SubscriptionListenMessage> {
    path: "/stucco.driver_service.Driver/SubscriptionListen";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<messages_messages_pb.SubscriptionListenRequest>;
    requestDeserialize: grpc.deserialize<messages_messages_pb.SubscriptionListenRequest>;
    responseSerialize: grpc.serialize<messages_messages_pb.SubscriptionListenMessage>;
    responseDeserialize: grpc.deserialize<messages_messages_pb.SubscriptionListenMessage>;
}

export const DriverService: IDriverService;

export interface IDriverServer extends grpc.UntypedServiceImplementation {
    fieldResolve: grpc.handleUnaryCall<messages_messages_pb.FieldResolveRequest, messages_messages_pb.FieldResolveResponse>;
    interfaceResolveType: grpc.handleUnaryCall<messages_messages_pb.InterfaceResolveTypeRequest, messages_messages_pb.InterfaceResolveTypeResponse>;
    scalarParse: grpc.handleUnaryCall<messages_messages_pb.ScalarParseRequest, messages_messages_pb.ScalarParseResponse>;
    scalarSerialize: grpc.handleUnaryCall<messages_messages_pb.ScalarSerializeRequest, messages_messages_pb.ScalarSerializeResponse>;
    unionResolveType: grpc.handleUnaryCall<messages_messages_pb.UnionResolveTypeRequest, messages_messages_pb.UnionResolveTypeResponse>;
    setSecrets: grpc.handleUnaryCall<messages_messages_pb.SetSecretsRequest, messages_messages_pb.SetSecretsResponse>;
    stream: grpc.handleServerStreamingCall<messages_messages_pb.StreamRequest, messages_messages_pb.StreamMessage>;
    stdout: grpc.handleServerStreamingCall<messages_messages_pb.ByteStreamRequest, messages_messages_pb.ByteStream>;
    stderr: grpc.handleServerStreamingCall<messages_messages_pb.ByteStreamRequest, messages_messages_pb.ByteStream>;
    subscriptionConnection: grpc.handleUnaryCall<messages_messages_pb.SubscriptionConnectionRequest, messages_messages_pb.SubscriptionConnectionResponse>;
    subscriptionListen: grpc.handleServerStreamingCall<messages_messages_pb.SubscriptionListenRequest, messages_messages_pb.SubscriptionListenMessage>;
}

export interface IDriverClient {
    fieldResolve(request: messages_messages_pb.FieldResolveRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.FieldResolveResponse) => void): grpc.ClientUnaryCall;
    fieldResolve(request: messages_messages_pb.FieldResolveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.FieldResolveResponse) => void): grpc.ClientUnaryCall;
    fieldResolve(request: messages_messages_pb.FieldResolveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.FieldResolveResponse) => void): grpc.ClientUnaryCall;
    interfaceResolveType(request: messages_messages_pb.InterfaceResolveTypeRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.InterfaceResolveTypeResponse) => void): grpc.ClientUnaryCall;
    interfaceResolveType(request: messages_messages_pb.InterfaceResolveTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.InterfaceResolveTypeResponse) => void): grpc.ClientUnaryCall;
    interfaceResolveType(request: messages_messages_pb.InterfaceResolveTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.InterfaceResolveTypeResponse) => void): grpc.ClientUnaryCall;
    scalarParse(request: messages_messages_pb.ScalarParseRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarParseResponse) => void): grpc.ClientUnaryCall;
    scalarParse(request: messages_messages_pb.ScalarParseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarParseResponse) => void): grpc.ClientUnaryCall;
    scalarParse(request: messages_messages_pb.ScalarParseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarParseResponse) => void): grpc.ClientUnaryCall;
    scalarSerialize(request: messages_messages_pb.ScalarSerializeRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarSerializeResponse) => void): grpc.ClientUnaryCall;
    scalarSerialize(request: messages_messages_pb.ScalarSerializeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarSerializeResponse) => void): grpc.ClientUnaryCall;
    scalarSerialize(request: messages_messages_pb.ScalarSerializeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarSerializeResponse) => void): grpc.ClientUnaryCall;
    unionResolveType(request: messages_messages_pb.UnionResolveTypeRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UnionResolveTypeResponse) => void): grpc.ClientUnaryCall;
    unionResolveType(request: messages_messages_pb.UnionResolveTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UnionResolveTypeResponse) => void): grpc.ClientUnaryCall;
    unionResolveType(request: messages_messages_pb.UnionResolveTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UnionResolveTypeResponse) => void): grpc.ClientUnaryCall;
    setSecrets(request: messages_messages_pb.SetSecretsRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SetSecretsResponse) => void): grpc.ClientUnaryCall;
    setSecrets(request: messages_messages_pb.SetSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SetSecretsResponse) => void): grpc.ClientUnaryCall;
    setSecrets(request: messages_messages_pb.SetSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SetSecretsResponse) => void): grpc.ClientUnaryCall;
    stream(request: messages_messages_pb.StreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.StreamMessage>;
    stream(request: messages_messages_pb.StreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.StreamMessage>;
    stdout(request: messages_messages_pb.ByteStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.ByteStream>;
    stdout(request: messages_messages_pb.ByteStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.ByteStream>;
    stderr(request: messages_messages_pb.ByteStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.ByteStream>;
    stderr(request: messages_messages_pb.ByteStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.ByteStream>;
    subscriptionConnection(request: messages_messages_pb.SubscriptionConnectionRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SubscriptionConnectionResponse) => void): grpc.ClientUnaryCall;
    subscriptionConnection(request: messages_messages_pb.SubscriptionConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SubscriptionConnectionResponse) => void): grpc.ClientUnaryCall;
    subscriptionConnection(request: messages_messages_pb.SubscriptionConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SubscriptionConnectionResponse) => void): grpc.ClientUnaryCall;
    subscriptionListen(request: messages_messages_pb.SubscriptionListenRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.SubscriptionListenMessage>;
    subscriptionListen(request: messages_messages_pb.SubscriptionListenRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.SubscriptionListenMessage>;
}

export class DriverClient extends grpc.Client implements IDriverClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public fieldResolve(request: messages_messages_pb.FieldResolveRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.FieldResolveResponse) => void): grpc.ClientUnaryCall;
    public fieldResolve(request: messages_messages_pb.FieldResolveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.FieldResolveResponse) => void): grpc.ClientUnaryCall;
    public fieldResolve(request: messages_messages_pb.FieldResolveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.FieldResolveResponse) => void): grpc.ClientUnaryCall;
    public interfaceResolveType(request: messages_messages_pb.InterfaceResolveTypeRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.InterfaceResolveTypeResponse) => void): grpc.ClientUnaryCall;
    public interfaceResolveType(request: messages_messages_pb.InterfaceResolveTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.InterfaceResolveTypeResponse) => void): grpc.ClientUnaryCall;
    public interfaceResolveType(request: messages_messages_pb.InterfaceResolveTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.InterfaceResolveTypeResponse) => void): grpc.ClientUnaryCall;
    public scalarParse(request: messages_messages_pb.ScalarParseRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarParseResponse) => void): grpc.ClientUnaryCall;
    public scalarParse(request: messages_messages_pb.ScalarParseRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarParseResponse) => void): grpc.ClientUnaryCall;
    public scalarParse(request: messages_messages_pb.ScalarParseRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarParseResponse) => void): grpc.ClientUnaryCall;
    public scalarSerialize(request: messages_messages_pb.ScalarSerializeRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarSerializeResponse) => void): grpc.ClientUnaryCall;
    public scalarSerialize(request: messages_messages_pb.ScalarSerializeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarSerializeResponse) => void): grpc.ClientUnaryCall;
    public scalarSerialize(request: messages_messages_pb.ScalarSerializeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.ScalarSerializeResponse) => void): grpc.ClientUnaryCall;
    public unionResolveType(request: messages_messages_pb.UnionResolveTypeRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UnionResolveTypeResponse) => void): grpc.ClientUnaryCall;
    public unionResolveType(request: messages_messages_pb.UnionResolveTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UnionResolveTypeResponse) => void): grpc.ClientUnaryCall;
    public unionResolveType(request: messages_messages_pb.UnionResolveTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.UnionResolveTypeResponse) => void): grpc.ClientUnaryCall;
    public setSecrets(request: messages_messages_pb.SetSecretsRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SetSecretsResponse) => void): grpc.ClientUnaryCall;
    public setSecrets(request: messages_messages_pb.SetSecretsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SetSecretsResponse) => void): grpc.ClientUnaryCall;
    public setSecrets(request: messages_messages_pb.SetSecretsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SetSecretsResponse) => void): grpc.ClientUnaryCall;
    public stream(request: messages_messages_pb.StreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.StreamMessage>;
    public stream(request: messages_messages_pb.StreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.StreamMessage>;
    public stdout(request: messages_messages_pb.ByteStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.ByteStream>;
    public stdout(request: messages_messages_pb.ByteStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.ByteStream>;
    public stderr(request: messages_messages_pb.ByteStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.ByteStream>;
    public stderr(request: messages_messages_pb.ByteStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.ByteStream>;
    public subscriptionConnection(request: messages_messages_pb.SubscriptionConnectionRequest, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SubscriptionConnectionResponse) => void): grpc.ClientUnaryCall;
    public subscriptionConnection(request: messages_messages_pb.SubscriptionConnectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SubscriptionConnectionResponse) => void): grpc.ClientUnaryCall;
    public subscriptionConnection(request: messages_messages_pb.SubscriptionConnectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: messages_messages_pb.SubscriptionConnectionResponse) => void): grpc.ClientUnaryCall;
    public subscriptionListen(request: messages_messages_pb.SubscriptionListenRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.SubscriptionListenMessage>;
    public subscriptionListen(request: messages_messages_pb.SubscriptionListenRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<messages_messages_pb.SubscriptionListenMessage>;
}
