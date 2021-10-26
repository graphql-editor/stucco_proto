// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var messages_messages_pb = require('../messages/messages_pb.cjs');

function serialize_stucco_messages_ByteStream(arg) {
  if (!(arg instanceof messages_messages_pb.ByteStream)) {
    throw new Error('Expected argument of type stucco.messages.ByteStream');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_ByteStream(buffer_arg) {
  return messages_messages_pb.ByteStream.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_ByteStreamRequest(arg) {
  if (!(arg instanceof messages_messages_pb.ByteStreamRequest)) {
    throw new Error('Expected argument of type stucco.messages.ByteStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_ByteStreamRequest(buffer_arg) {
  return messages_messages_pb.ByteStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_FieldResolveRequest(arg) {
  if (!(arg instanceof messages_messages_pb.FieldResolveRequest)) {
    throw new Error('Expected argument of type stucco.messages.FieldResolveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_FieldResolveRequest(buffer_arg) {
  return messages_messages_pb.FieldResolveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_FieldResolveResponse(arg) {
  if (!(arg instanceof messages_messages_pb.FieldResolveResponse)) {
    throw new Error('Expected argument of type stucco.messages.FieldResolveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_FieldResolveResponse(buffer_arg) {
  return messages_messages_pb.FieldResolveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_InterfaceResolveTypeRequest(arg) {
  if (!(arg instanceof messages_messages_pb.InterfaceResolveTypeRequest)) {
    throw new Error('Expected argument of type stucco.messages.InterfaceResolveTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_InterfaceResolveTypeRequest(buffer_arg) {
  return messages_messages_pb.InterfaceResolveTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_InterfaceResolveTypeResponse(arg) {
  if (!(arg instanceof messages_messages_pb.InterfaceResolveTypeResponse)) {
    throw new Error('Expected argument of type stucco.messages.InterfaceResolveTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_InterfaceResolveTypeResponse(buffer_arg) {
  return messages_messages_pb.InterfaceResolveTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_ScalarParseRequest(arg) {
  if (!(arg instanceof messages_messages_pb.ScalarParseRequest)) {
    throw new Error('Expected argument of type stucco.messages.ScalarParseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_ScalarParseRequest(buffer_arg) {
  return messages_messages_pb.ScalarParseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_ScalarParseResponse(arg) {
  if (!(arg instanceof messages_messages_pb.ScalarParseResponse)) {
    throw new Error('Expected argument of type stucco.messages.ScalarParseResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_ScalarParseResponse(buffer_arg) {
  return messages_messages_pb.ScalarParseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_ScalarSerializeRequest(arg) {
  if (!(arg instanceof messages_messages_pb.ScalarSerializeRequest)) {
    throw new Error('Expected argument of type stucco.messages.ScalarSerializeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_ScalarSerializeRequest(buffer_arg) {
  return messages_messages_pb.ScalarSerializeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_ScalarSerializeResponse(arg) {
  if (!(arg instanceof messages_messages_pb.ScalarSerializeResponse)) {
    throw new Error('Expected argument of type stucco.messages.ScalarSerializeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_ScalarSerializeResponse(buffer_arg) {
  return messages_messages_pb.ScalarSerializeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_SetSecretsRequest(arg) {
  if (!(arg instanceof messages_messages_pb.SetSecretsRequest)) {
    throw new Error('Expected argument of type stucco.messages.SetSecretsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_SetSecretsRequest(buffer_arg) {
  return messages_messages_pb.SetSecretsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_SetSecretsResponse(arg) {
  if (!(arg instanceof messages_messages_pb.SetSecretsResponse)) {
    throw new Error('Expected argument of type stucco.messages.SetSecretsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_SetSecretsResponse(buffer_arg) {
  return messages_messages_pb.SetSecretsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_StreamMessage(arg) {
  if (!(arg instanceof messages_messages_pb.StreamMessage)) {
    throw new Error('Expected argument of type stucco.messages.StreamMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_StreamMessage(buffer_arg) {
  return messages_messages_pb.StreamMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_StreamRequest(arg) {
  if (!(arg instanceof messages_messages_pb.StreamRequest)) {
    throw new Error('Expected argument of type stucco.messages.StreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_StreamRequest(buffer_arg) {
  return messages_messages_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_SubscriptionConnectionRequest(arg) {
  if (!(arg instanceof messages_messages_pb.SubscriptionConnectionRequest)) {
    throw new Error('Expected argument of type stucco.messages.SubscriptionConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_SubscriptionConnectionRequest(buffer_arg) {
  return messages_messages_pb.SubscriptionConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_SubscriptionConnectionResponse(arg) {
  if (!(arg instanceof messages_messages_pb.SubscriptionConnectionResponse)) {
    throw new Error('Expected argument of type stucco.messages.SubscriptionConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_SubscriptionConnectionResponse(buffer_arg) {
  return messages_messages_pb.SubscriptionConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_SubscriptionListenMessage(arg) {
  if (!(arg instanceof messages_messages_pb.SubscriptionListenMessage)) {
    throw new Error('Expected argument of type stucco.messages.SubscriptionListenMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_SubscriptionListenMessage(buffer_arg) {
  return messages_messages_pb.SubscriptionListenMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_SubscriptionListenRequest(arg) {
  if (!(arg instanceof messages_messages_pb.SubscriptionListenRequest)) {
    throw new Error('Expected argument of type stucco.messages.SubscriptionListenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_SubscriptionListenRequest(buffer_arg) {
  return messages_messages_pb.SubscriptionListenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_UnionResolveTypeRequest(arg) {
  if (!(arg instanceof messages_messages_pb.UnionResolveTypeRequest)) {
    throw new Error('Expected argument of type stucco.messages.UnionResolveTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_UnionResolveTypeRequest(buffer_arg) {
  return messages_messages_pb.UnionResolveTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stucco_messages_UnionResolveTypeResponse(arg) {
  if (!(arg instanceof messages_messages_pb.UnionResolveTypeResponse)) {
    throw new Error('Expected argument of type stucco.messages.UnionResolveTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_stucco_messages_UnionResolveTypeResponse(buffer_arg) {
  return messages_messages_pb.UnionResolveTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var DriverService = exports.DriverService = {
  fieldResolve: {
    path: '/stucco.driver_service.Driver/FieldResolve',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.FieldResolveRequest,
    responseType: messages_messages_pb.FieldResolveResponse,
    requestSerialize: serialize_stucco_messages_FieldResolveRequest,
    requestDeserialize: deserialize_stucco_messages_FieldResolveRequest,
    responseSerialize: serialize_stucco_messages_FieldResolveResponse,
    responseDeserialize: deserialize_stucco_messages_FieldResolveResponse,
  },
  interfaceResolveType: {
    path: '/stucco.driver_service.Driver/InterfaceResolveType',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.InterfaceResolveTypeRequest,
    responseType: messages_messages_pb.InterfaceResolveTypeResponse,
    requestSerialize: serialize_stucco_messages_InterfaceResolveTypeRequest,
    requestDeserialize: deserialize_stucco_messages_InterfaceResolveTypeRequest,
    responseSerialize: serialize_stucco_messages_InterfaceResolveTypeResponse,
    responseDeserialize: deserialize_stucco_messages_InterfaceResolveTypeResponse,
  },
  scalarParse: {
    path: '/stucco.driver_service.Driver/ScalarParse',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.ScalarParseRequest,
    responseType: messages_messages_pb.ScalarParseResponse,
    requestSerialize: serialize_stucco_messages_ScalarParseRequest,
    requestDeserialize: deserialize_stucco_messages_ScalarParseRequest,
    responseSerialize: serialize_stucco_messages_ScalarParseResponse,
    responseDeserialize: deserialize_stucco_messages_ScalarParseResponse,
  },
  scalarSerialize: {
    path: '/stucco.driver_service.Driver/ScalarSerialize',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.ScalarSerializeRequest,
    responseType: messages_messages_pb.ScalarSerializeResponse,
    requestSerialize: serialize_stucco_messages_ScalarSerializeRequest,
    requestDeserialize: deserialize_stucco_messages_ScalarSerializeRequest,
    responseSerialize: serialize_stucco_messages_ScalarSerializeResponse,
    responseDeserialize: deserialize_stucco_messages_ScalarSerializeResponse,
  },
  unionResolveType: {
    path: '/stucco.driver_service.Driver/UnionResolveType',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.UnionResolveTypeRequest,
    responseType: messages_messages_pb.UnionResolveTypeResponse,
    requestSerialize: serialize_stucco_messages_UnionResolveTypeRequest,
    requestDeserialize: deserialize_stucco_messages_UnionResolveTypeRequest,
    responseSerialize: serialize_stucco_messages_UnionResolveTypeResponse,
    responseDeserialize: deserialize_stucco_messages_UnionResolveTypeResponse,
  },
  setSecrets: {
    path: '/stucco.driver_service.Driver/SetSecrets',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.SetSecretsRequest,
    responseType: messages_messages_pb.SetSecretsResponse,
    requestSerialize: serialize_stucco_messages_SetSecretsRequest,
    requestDeserialize: deserialize_stucco_messages_SetSecretsRequest,
    responseSerialize: serialize_stucco_messages_SetSecretsResponse,
    responseDeserialize: deserialize_stucco_messages_SetSecretsResponse,
  },
  stream: {
    path: '/stucco.driver_service.Driver/Stream',
    requestStream: false,
    responseStream: true,
    requestType: messages_messages_pb.StreamRequest,
    responseType: messages_messages_pb.StreamMessage,
    requestSerialize: serialize_stucco_messages_StreamRequest,
    requestDeserialize: deserialize_stucco_messages_StreamRequest,
    responseSerialize: serialize_stucco_messages_StreamMessage,
    responseDeserialize: deserialize_stucco_messages_StreamMessage,
  },
  stdout: {
    path: '/stucco.driver_service.Driver/Stdout',
    requestStream: false,
    responseStream: true,
    requestType: messages_messages_pb.ByteStreamRequest,
    responseType: messages_messages_pb.ByteStream,
    requestSerialize: serialize_stucco_messages_ByteStreamRequest,
    requestDeserialize: deserialize_stucco_messages_ByteStreamRequest,
    responseSerialize: serialize_stucco_messages_ByteStream,
    responseDeserialize: deserialize_stucco_messages_ByteStream,
  },
  stderr: {
    path: '/stucco.driver_service.Driver/Stderr',
    requestStream: false,
    responseStream: true,
    requestType: messages_messages_pb.ByteStreamRequest,
    responseType: messages_messages_pb.ByteStream,
    requestSerialize: serialize_stucco_messages_ByteStreamRequest,
    requestDeserialize: deserialize_stucco_messages_ByteStreamRequest,
    responseSerialize: serialize_stucco_messages_ByteStream,
    responseDeserialize: deserialize_stucco_messages_ByteStream,
  },
  subscriptionConnection: {
    path: '/stucco.driver_service.Driver/SubscriptionConnection',
    requestStream: false,
    responseStream: false,
    requestType: messages_messages_pb.SubscriptionConnectionRequest,
    responseType: messages_messages_pb.SubscriptionConnectionResponse,
    requestSerialize: serialize_stucco_messages_SubscriptionConnectionRequest,
    requestDeserialize: deserialize_stucco_messages_SubscriptionConnectionRequest,
    responseSerialize: serialize_stucco_messages_SubscriptionConnectionResponse,
    responseDeserialize: deserialize_stucco_messages_SubscriptionConnectionResponse,
  },
  subscriptionListen: {
    path: '/stucco.driver_service.Driver/SubscriptionListen',
    requestStream: false,
    responseStream: true,
    requestType: messages_messages_pb.SubscriptionListenRequest,
    responseType: messages_messages_pb.SubscriptionListenMessage,
    requestSerialize: serialize_stucco_messages_SubscriptionListenRequest,
    requestDeserialize: deserialize_stucco_messages_SubscriptionListenRequest,
    responseSerialize: serialize_stucco_messages_SubscriptionListenMessage,
    responseDeserialize: deserialize_stucco_messages_SubscriptionListenMessage,
  },
};

exports.DriverClient = grpc.makeGenericClientConstructor(DriverService);
