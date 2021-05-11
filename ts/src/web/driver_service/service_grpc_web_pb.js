/**
 * @fileoverview gRPC-Web generated client stub for stucco.driver_service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var messages_messages_pb = require('../messages/messages_pb.js')
const proto = {};
proto.stucco = {};
proto.stucco.driver_service = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stucco.driver_service.DriverClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stucco.driver_service.DriverPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.FieldResolveRequest,
 *   !proto.stucco.messages.FieldResolveResponse>}
 */
const methodDescriptor_Driver_FieldResolve = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/FieldResolve',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.FieldResolveRequest,
  messages_messages_pb.FieldResolveResponse,
  /**
   * @param {!proto.stucco.messages.FieldResolveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.FieldResolveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.FieldResolveRequest,
 *   !proto.stucco.messages.FieldResolveResponse>}
 */
const methodInfo_Driver_FieldResolve = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.FieldResolveResponse,
  /**
   * @param {!proto.stucco.messages.FieldResolveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.FieldResolveResponse.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.FieldResolveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stucco.messages.FieldResolveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.FieldResolveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.fieldResolve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stucco.driver_service.Driver/FieldResolve',
      request,
      metadata || {},
      methodDescriptor_Driver_FieldResolve,
      callback);
};


/**
 * @param {!proto.stucco.messages.FieldResolveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stucco.messages.FieldResolveResponse>}
 *     Promise that resolves to the response
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.fieldResolve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stucco.driver_service.Driver/FieldResolve',
      request,
      metadata || {},
      methodDescriptor_Driver_FieldResolve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.InterfaceResolveTypeRequest,
 *   !proto.stucco.messages.InterfaceResolveTypeResponse>}
 */
const methodDescriptor_Driver_InterfaceResolveType = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/InterfaceResolveType',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.InterfaceResolveTypeRequest,
  messages_messages_pb.InterfaceResolveTypeResponse,
  /**
   * @param {!proto.stucco.messages.InterfaceResolveTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.InterfaceResolveTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.InterfaceResolveTypeRequest,
 *   !proto.stucco.messages.InterfaceResolveTypeResponse>}
 */
const methodInfo_Driver_InterfaceResolveType = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.InterfaceResolveTypeResponse,
  /**
   * @param {!proto.stucco.messages.InterfaceResolveTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.InterfaceResolveTypeResponse.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.InterfaceResolveTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stucco.messages.InterfaceResolveTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.InterfaceResolveTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.interfaceResolveType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stucco.driver_service.Driver/InterfaceResolveType',
      request,
      metadata || {},
      methodDescriptor_Driver_InterfaceResolveType,
      callback);
};


/**
 * @param {!proto.stucco.messages.InterfaceResolveTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stucco.messages.InterfaceResolveTypeResponse>}
 *     Promise that resolves to the response
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.interfaceResolveType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stucco.driver_service.Driver/InterfaceResolveType',
      request,
      metadata || {},
      methodDescriptor_Driver_InterfaceResolveType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.ScalarParseRequest,
 *   !proto.stucco.messages.ScalarParseResponse>}
 */
const methodDescriptor_Driver_ScalarParse = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/ScalarParse',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.ScalarParseRequest,
  messages_messages_pb.ScalarParseResponse,
  /**
   * @param {!proto.stucco.messages.ScalarParseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.ScalarParseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.ScalarParseRequest,
 *   !proto.stucco.messages.ScalarParseResponse>}
 */
const methodInfo_Driver_ScalarParse = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.ScalarParseResponse,
  /**
   * @param {!proto.stucco.messages.ScalarParseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.ScalarParseResponse.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.ScalarParseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stucco.messages.ScalarParseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.ScalarParseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.scalarParse =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stucco.driver_service.Driver/ScalarParse',
      request,
      metadata || {},
      methodDescriptor_Driver_ScalarParse,
      callback);
};


/**
 * @param {!proto.stucco.messages.ScalarParseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stucco.messages.ScalarParseResponse>}
 *     Promise that resolves to the response
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.scalarParse =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stucco.driver_service.Driver/ScalarParse',
      request,
      metadata || {},
      methodDescriptor_Driver_ScalarParse);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.ScalarSerializeRequest,
 *   !proto.stucco.messages.ScalarSerializeResponse>}
 */
const methodDescriptor_Driver_ScalarSerialize = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/ScalarSerialize',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.ScalarSerializeRequest,
  messages_messages_pb.ScalarSerializeResponse,
  /**
   * @param {!proto.stucco.messages.ScalarSerializeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.ScalarSerializeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.ScalarSerializeRequest,
 *   !proto.stucco.messages.ScalarSerializeResponse>}
 */
const methodInfo_Driver_ScalarSerialize = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.ScalarSerializeResponse,
  /**
   * @param {!proto.stucco.messages.ScalarSerializeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.ScalarSerializeResponse.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.ScalarSerializeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stucco.messages.ScalarSerializeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.ScalarSerializeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.scalarSerialize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stucco.driver_service.Driver/ScalarSerialize',
      request,
      metadata || {},
      methodDescriptor_Driver_ScalarSerialize,
      callback);
};


/**
 * @param {!proto.stucco.messages.ScalarSerializeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stucco.messages.ScalarSerializeResponse>}
 *     Promise that resolves to the response
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.scalarSerialize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stucco.driver_service.Driver/ScalarSerialize',
      request,
      metadata || {},
      methodDescriptor_Driver_ScalarSerialize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.UnionResolveTypeRequest,
 *   !proto.stucco.messages.UnionResolveTypeResponse>}
 */
const methodDescriptor_Driver_UnionResolveType = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/UnionResolveType',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.UnionResolveTypeRequest,
  messages_messages_pb.UnionResolveTypeResponse,
  /**
   * @param {!proto.stucco.messages.UnionResolveTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.UnionResolveTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.UnionResolveTypeRequest,
 *   !proto.stucco.messages.UnionResolveTypeResponse>}
 */
const methodInfo_Driver_UnionResolveType = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.UnionResolveTypeResponse,
  /**
   * @param {!proto.stucco.messages.UnionResolveTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.UnionResolveTypeResponse.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.UnionResolveTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stucco.messages.UnionResolveTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.UnionResolveTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.unionResolveType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stucco.driver_service.Driver/UnionResolveType',
      request,
      metadata || {},
      methodDescriptor_Driver_UnionResolveType,
      callback);
};


/**
 * @param {!proto.stucco.messages.UnionResolveTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stucco.messages.UnionResolveTypeResponse>}
 *     Promise that resolves to the response
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.unionResolveType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stucco.driver_service.Driver/UnionResolveType',
      request,
      metadata || {},
      methodDescriptor_Driver_UnionResolveType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.SetSecretsRequest,
 *   !proto.stucco.messages.SetSecretsResponse>}
 */
const methodDescriptor_Driver_SetSecrets = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/SetSecrets',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.SetSecretsRequest,
  messages_messages_pb.SetSecretsResponse,
  /**
   * @param {!proto.stucco.messages.SetSecretsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.SetSecretsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.SetSecretsRequest,
 *   !proto.stucco.messages.SetSecretsResponse>}
 */
const methodInfo_Driver_SetSecrets = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.SetSecretsResponse,
  /**
   * @param {!proto.stucco.messages.SetSecretsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.SetSecretsResponse.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.SetSecretsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stucco.messages.SetSecretsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.SetSecretsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.setSecrets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stucco.driver_service.Driver/SetSecrets',
      request,
      metadata || {},
      methodDescriptor_Driver_SetSecrets,
      callback);
};


/**
 * @param {!proto.stucco.messages.SetSecretsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stucco.messages.SetSecretsResponse>}
 *     Promise that resolves to the response
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.setSecrets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stucco.driver_service.Driver/SetSecrets',
      request,
      metadata || {},
      methodDescriptor_Driver_SetSecrets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.StreamRequest,
 *   !proto.stucco.messages.StreamMessage>}
 */
const methodDescriptor_Driver_Stream = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/Stream',
  grpc.web.MethodType.SERVER_STREAMING,
  messages_messages_pb.StreamRequest,
  messages_messages_pb.StreamMessage,
  /**
   * @param {!proto.stucco.messages.StreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.StreamMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.StreamRequest,
 *   !proto.stucco.messages.StreamMessage>}
 */
const methodInfo_Driver_Stream = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.StreamMessage,
  /**
   * @param {!proto.stucco.messages.StreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.StreamMessage.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.StreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.StreamMessage>}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.stream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stucco.driver_service.Driver/Stream',
      request,
      metadata || {},
      methodDescriptor_Driver_Stream);
};


/**
 * @param {!proto.stucco.messages.StreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.StreamMessage>}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.stream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stucco.driver_service.Driver/Stream',
      request,
      metadata || {},
      methodDescriptor_Driver_Stream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.ByteStreamRequest,
 *   !proto.stucco.messages.ByteStream>}
 */
const methodDescriptor_Driver_Stdout = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/Stdout',
  grpc.web.MethodType.SERVER_STREAMING,
  messages_messages_pb.ByteStreamRequest,
  messages_messages_pb.ByteStream,
  /**
   * @param {!proto.stucco.messages.ByteStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.ByteStream.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.ByteStreamRequest,
 *   !proto.stucco.messages.ByteStream>}
 */
const methodInfo_Driver_Stdout = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.ByteStream,
  /**
   * @param {!proto.stucco.messages.ByteStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.ByteStream.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.ByteStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.ByteStream>}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.stdout =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stucco.driver_service.Driver/Stdout',
      request,
      metadata || {},
      methodDescriptor_Driver_Stdout);
};


/**
 * @param {!proto.stucco.messages.ByteStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.ByteStream>}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.stdout =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stucco.driver_service.Driver/Stdout',
      request,
      metadata || {},
      methodDescriptor_Driver_Stdout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.ByteStreamRequest,
 *   !proto.stucco.messages.ByteStream>}
 */
const methodDescriptor_Driver_Stderr = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/Stderr',
  grpc.web.MethodType.SERVER_STREAMING,
  messages_messages_pb.ByteStreamRequest,
  messages_messages_pb.ByteStream,
  /**
   * @param {!proto.stucco.messages.ByteStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.ByteStream.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.ByteStreamRequest,
 *   !proto.stucco.messages.ByteStream>}
 */
const methodInfo_Driver_Stderr = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.ByteStream,
  /**
   * @param {!proto.stucco.messages.ByteStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.ByteStream.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.ByteStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.ByteStream>}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.stderr =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stucco.driver_service.Driver/Stderr',
      request,
      metadata || {},
      methodDescriptor_Driver_Stderr);
};


/**
 * @param {!proto.stucco.messages.ByteStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.ByteStream>}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.stderr =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stucco.driver_service.Driver/Stderr',
      request,
      metadata || {},
      methodDescriptor_Driver_Stderr);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.SubscriptionConnectionRequest,
 *   !proto.stucco.messages.SubscriptionConnectionResponse>}
 */
const methodDescriptor_Driver_SubscriptionConnection = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/SubscriptionConnection',
  grpc.web.MethodType.UNARY,
  messages_messages_pb.SubscriptionConnectionRequest,
  messages_messages_pb.SubscriptionConnectionResponse,
  /**
   * @param {!proto.stucco.messages.SubscriptionConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.SubscriptionConnectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.SubscriptionConnectionRequest,
 *   !proto.stucco.messages.SubscriptionConnectionResponse>}
 */
const methodInfo_Driver_SubscriptionConnection = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.SubscriptionConnectionResponse,
  /**
   * @param {!proto.stucco.messages.SubscriptionConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.SubscriptionConnectionResponse.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.SubscriptionConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stucco.messages.SubscriptionConnectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.SubscriptionConnectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.subscriptionConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stucco.driver_service.Driver/SubscriptionConnection',
      request,
      metadata || {},
      methodDescriptor_Driver_SubscriptionConnection,
      callback);
};


/**
 * @param {!proto.stucco.messages.SubscriptionConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stucco.messages.SubscriptionConnectionResponse>}
 *     Promise that resolves to the response
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.subscriptionConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stucco.driver_service.Driver/SubscriptionConnection',
      request,
      metadata || {},
      methodDescriptor_Driver_SubscriptionConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stucco.messages.SubscriptionListenRequest,
 *   !proto.stucco.messages.SubscriptionListenMessage>}
 */
const methodDescriptor_Driver_SubscriptionListen = new grpc.web.MethodDescriptor(
  '/stucco.driver_service.Driver/SubscriptionListen',
  grpc.web.MethodType.SERVER_STREAMING,
  messages_messages_pb.SubscriptionListenRequest,
  messages_messages_pb.SubscriptionListenMessage,
  /**
   * @param {!proto.stucco.messages.SubscriptionListenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.SubscriptionListenMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stucco.messages.SubscriptionListenRequest,
 *   !proto.stucco.messages.SubscriptionListenMessage>}
 */
const methodInfo_Driver_SubscriptionListen = new grpc.web.AbstractClientBase.MethodInfo(
  messages_messages_pb.SubscriptionListenMessage,
  /**
   * @param {!proto.stucco.messages.SubscriptionListenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  messages_messages_pb.SubscriptionListenMessage.deserializeBinary
);


/**
 * @param {!proto.stucco.messages.SubscriptionListenRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.SubscriptionListenMessage>}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverClient.prototype.subscriptionListen =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stucco.driver_service.Driver/SubscriptionListen',
      request,
      metadata || {},
      methodDescriptor_Driver_SubscriptionListen);
};


/**
 * @param {!proto.stucco.messages.SubscriptionListenRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stucco.messages.SubscriptionListenMessage>}
 *     The XHR Node Readable Stream
 */
proto.stucco.driver_service.DriverPromiseClient.prototype.subscriptionListen =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stucco.driver_service.Driver/SubscriptionListen',
      request,
      metadata || {},
      methodDescriptor_Driver_SubscriptionListen);
};


module.exports = proto.stucco.driver_service;

