import * as grpcWeb from 'grpc-web';

import * as messages_messages_pb from '../messages/messages_pb';


export class DriverClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  fieldResolve(
    request: messages_messages_pb.FieldResolveRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.FieldResolveResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.FieldResolveResponse>;

  interfaceResolveType(
    request: messages_messages_pb.InterfaceResolveTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.InterfaceResolveTypeResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.InterfaceResolveTypeResponse>;

  scalarParse(
    request: messages_messages_pb.ScalarParseRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.ScalarParseResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.ScalarParseResponse>;

  scalarSerialize(
    request: messages_messages_pb.ScalarSerializeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.ScalarSerializeResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.ScalarSerializeResponse>;

  unionResolveType(
    request: messages_messages_pb.UnionResolveTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.UnionResolveTypeResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.UnionResolveTypeResponse>;

  setSecrets(
    request: messages_messages_pb.SetSecretsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.SetSecretsResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.SetSecretsResponse>;

  stream(
    request: messages_messages_pb.StreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.StreamMessage>;

  stdout(
    request: messages_messages_pb.ByteStreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.ByteStream>;

  stderr(
    request: messages_messages_pb.ByteStreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.ByteStream>;

  subscriptionConnection(
    request: messages_messages_pb.SubscriptionConnectionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: messages_messages_pb.SubscriptionConnectionResponse) => void
  ): grpcWeb.ClientReadableStream<messages_messages_pb.SubscriptionConnectionResponse>;

  subscriptionListen(
    request: messages_messages_pb.SubscriptionListenRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.SubscriptionListenMessage>;

}

export class DriverPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  fieldResolve(
    request: messages_messages_pb.FieldResolveRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.FieldResolveResponse>;

  interfaceResolveType(
    request: messages_messages_pb.InterfaceResolveTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.InterfaceResolveTypeResponse>;

  scalarParse(
    request: messages_messages_pb.ScalarParseRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.ScalarParseResponse>;

  scalarSerialize(
    request: messages_messages_pb.ScalarSerializeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.ScalarSerializeResponse>;

  unionResolveType(
    request: messages_messages_pb.UnionResolveTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.UnionResolveTypeResponse>;

  setSecrets(
    request: messages_messages_pb.SetSecretsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.SetSecretsResponse>;

  stream(
    request: messages_messages_pb.StreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.StreamMessage>;

  stdout(
    request: messages_messages_pb.ByteStreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.ByteStream>;

  stderr(
    request: messages_messages_pb.ByteStreamRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.ByteStream>;

  subscriptionConnection(
    request: messages_messages_pb.SubscriptionConnectionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<messages_messages_pb.SubscriptionConnectionResponse>;

  subscriptionListen(
    request: messages_messages_pb.SubscriptionListenRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<messages_messages_pb.SubscriptionListenMessage>;

}

