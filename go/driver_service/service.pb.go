// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.14.0
// source: driver_service/service.proto

package driver_service

import (
	messages "github.com/graphql-editor/stucco_proto/go/messages"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_driver_service_service_proto protoreflect.FileDescriptor

var file_driver_service_service_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x64, 0x72, 0x69, 0x76, 0x65, 0x72, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15,
	0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x64, 0x72, 0x69, 0x76, 0x65, 0x72, 0x5f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x1a, 0x17, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2f,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xab,
	0x08, 0x0a, 0x06, 0x44, 0x72, 0x69, 0x76, 0x65, 0x72, 0x12, 0x5b, 0x0a, 0x0c, 0x46, 0x69, 0x65,
	0x6c, 0x64, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x12, 0x24, 0x2e, 0x73, 0x74, 0x75, 0x63,
	0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x65, 0x6c,
	0x64, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x25, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x73, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x73, 0x0a, 0x14, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x66,
	0x61, 0x63, 0x65, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x2c,
	0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x2e, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76,
	0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2d, 0x2e, 0x73,
	0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x49,
	0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x54,
	0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x58, 0x0a, 0x0b, 0x53,
	0x63, 0x61, 0x6c, 0x61, 0x72, 0x50, 0x61, 0x72, 0x73, 0x65, 0x12, 0x23, 0x2e, 0x73, 0x74, 0x75,
	0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x63, 0x61,
	0x6c, 0x61, 0x72, 0x50, 0x61, 0x72, 0x73, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x24, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x73, 0x2e, 0x53, 0x63, 0x61, 0x6c, 0x61, 0x72, 0x50, 0x61, 0x72, 0x73, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x64, 0x0a, 0x0f, 0x53, 0x63, 0x61, 0x6c, 0x61, 0x72, 0x53,
	0x65, 0x72, 0x69, 0x61, 0x6c, 0x69, 0x7a, 0x65, 0x12, 0x27, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63,
	0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x63, 0x61, 0x6c, 0x61,
	0x72, 0x53, 0x65, 0x72, 0x69, 0x61, 0x6c, 0x69, 0x7a, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x28, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x73, 0x2e, 0x53, 0x63, 0x61, 0x6c, 0x61, 0x72, 0x53, 0x65, 0x72, 0x69, 0x61, 0x6c,
	0x69, 0x7a, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x67, 0x0a, 0x10, 0x55,
	0x6e, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12,
	0x28, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x73, 0x2e, 0x55, 0x6e, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x54, 0x79,
	0x70, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e, 0x73, 0x74, 0x75, 0x63,
	0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x55, 0x6e, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x55, 0x0a, 0x0a, 0x53, 0x65, 0x74, 0x53, 0x65, 0x63, 0x72, 0x65,
	0x74, 0x73, 0x12, 0x22, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x65, 0x74, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x65, 0x74, 0x53, 0x65, 0x63, 0x72,
	0x65, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4a, 0x0a, 0x06, 0x53,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x1e, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x4d, 0x65,
	0x73, 0x73, 0x61, 0x67, 0x65, 0x30, 0x01, 0x12, 0x4b, 0x0a, 0x06, 0x53, 0x74, 0x64, 0x6f, 0x75,
	0x74, 0x12, 0x22, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x73, 0x2e, 0x42, 0x79, 0x74, 0x65, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x42, 0x79, 0x74, 0x65, 0x53, 0x74, 0x72, 0x65,
	0x61, 0x6d, 0x30, 0x01, 0x12, 0x4b, 0x0a, 0x06, 0x53, 0x74, 0x64, 0x65, 0x72, 0x72, 0x12, 0x22,
	0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x2e, 0x42, 0x79, 0x74, 0x65, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x73, 0x2e, 0x42, 0x79, 0x74, 0x65, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x30,
	0x01, 0x12, 0x79, 0x0a, 0x16, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2e, 0x2e, 0x73, 0x74,
	0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x75,
	0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2f, 0x2e, 0x73, 0x74,
	0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x75,
	0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x6e, 0x0a, 0x12,
	0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x69, 0x73, 0x74,
	0x65, 0x6e, 0x12, 0x2a, 0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x73, 0x2e, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x4c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2a,
	0x2e, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f, 0x2e, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x73,
	0x2e, 0x53, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x69, 0x73,
	0x74, 0x65, 0x6e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x30, 0x01, 0x42, 0x3a, 0x5a, 0x38,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x67, 0x72, 0x61, 0x70, 0x68,
	0x71, 0x6c, 0x2d, 0x65, 0x64, 0x69, 0x74, 0x6f, 0x72, 0x2f, 0x73, 0x74, 0x75, 0x63, 0x63, 0x6f,
	0x5f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x2f, 0x64, 0x72, 0x69, 0x76, 0x65, 0x72,
	0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_driver_service_service_proto_goTypes = []interface{}{
	(*messages.FieldResolveRequest)(nil),            // 0: stucco.messages.FieldResolveRequest
	(*messages.InterfaceResolveTypeRequest)(nil),    // 1: stucco.messages.InterfaceResolveTypeRequest
	(*messages.ScalarParseRequest)(nil),             // 2: stucco.messages.ScalarParseRequest
	(*messages.ScalarSerializeRequest)(nil),         // 3: stucco.messages.ScalarSerializeRequest
	(*messages.UnionResolveTypeRequest)(nil),        // 4: stucco.messages.UnionResolveTypeRequest
	(*messages.SetSecretsRequest)(nil),              // 5: stucco.messages.SetSecretsRequest
	(*messages.StreamRequest)(nil),                  // 6: stucco.messages.StreamRequest
	(*messages.ByteStreamRequest)(nil),              // 7: stucco.messages.ByteStreamRequest
	(*messages.SubscriptionConnectionRequest)(nil),  // 8: stucco.messages.SubscriptionConnectionRequest
	(*messages.SubscriptionListenRequest)(nil),      // 9: stucco.messages.SubscriptionListenRequest
	(*messages.FieldResolveResponse)(nil),           // 10: stucco.messages.FieldResolveResponse
	(*messages.InterfaceResolveTypeResponse)(nil),   // 11: stucco.messages.InterfaceResolveTypeResponse
	(*messages.ScalarParseResponse)(nil),            // 12: stucco.messages.ScalarParseResponse
	(*messages.ScalarSerializeResponse)(nil),        // 13: stucco.messages.ScalarSerializeResponse
	(*messages.UnionResolveTypeResponse)(nil),       // 14: stucco.messages.UnionResolveTypeResponse
	(*messages.SetSecretsResponse)(nil),             // 15: stucco.messages.SetSecretsResponse
	(*messages.StreamMessage)(nil),                  // 16: stucco.messages.StreamMessage
	(*messages.ByteStream)(nil),                     // 17: stucco.messages.ByteStream
	(*messages.SubscriptionConnectionResponse)(nil), // 18: stucco.messages.SubscriptionConnectionResponse
	(*messages.SubscriptionListenMessage)(nil),      // 19: stucco.messages.SubscriptionListenMessage
}
var file_driver_service_service_proto_depIdxs = []int32{
	0,  // 0: stucco.driver_service.Driver.FieldResolve:input_type -> stucco.messages.FieldResolveRequest
	1,  // 1: stucco.driver_service.Driver.InterfaceResolveType:input_type -> stucco.messages.InterfaceResolveTypeRequest
	2,  // 2: stucco.driver_service.Driver.ScalarParse:input_type -> stucco.messages.ScalarParseRequest
	3,  // 3: stucco.driver_service.Driver.ScalarSerialize:input_type -> stucco.messages.ScalarSerializeRequest
	4,  // 4: stucco.driver_service.Driver.UnionResolveType:input_type -> stucco.messages.UnionResolveTypeRequest
	5,  // 5: stucco.driver_service.Driver.SetSecrets:input_type -> stucco.messages.SetSecretsRequest
	6,  // 6: stucco.driver_service.Driver.Stream:input_type -> stucco.messages.StreamRequest
	7,  // 7: stucco.driver_service.Driver.Stdout:input_type -> stucco.messages.ByteStreamRequest
	7,  // 8: stucco.driver_service.Driver.Stderr:input_type -> stucco.messages.ByteStreamRequest
	8,  // 9: stucco.driver_service.Driver.SubscriptionConnection:input_type -> stucco.messages.SubscriptionConnectionRequest
	9,  // 10: stucco.driver_service.Driver.SubscriptionListen:input_type -> stucco.messages.SubscriptionListenRequest
	10, // 11: stucco.driver_service.Driver.FieldResolve:output_type -> stucco.messages.FieldResolveResponse
	11, // 12: stucco.driver_service.Driver.InterfaceResolveType:output_type -> stucco.messages.InterfaceResolveTypeResponse
	12, // 13: stucco.driver_service.Driver.ScalarParse:output_type -> stucco.messages.ScalarParseResponse
	13, // 14: stucco.driver_service.Driver.ScalarSerialize:output_type -> stucco.messages.ScalarSerializeResponse
	14, // 15: stucco.driver_service.Driver.UnionResolveType:output_type -> stucco.messages.UnionResolveTypeResponse
	15, // 16: stucco.driver_service.Driver.SetSecrets:output_type -> stucco.messages.SetSecretsResponse
	16, // 17: stucco.driver_service.Driver.Stream:output_type -> stucco.messages.StreamMessage
	17, // 18: stucco.driver_service.Driver.Stdout:output_type -> stucco.messages.ByteStream
	17, // 19: stucco.driver_service.Driver.Stderr:output_type -> stucco.messages.ByteStream
	18, // 20: stucco.driver_service.Driver.SubscriptionConnection:output_type -> stucco.messages.SubscriptionConnectionResponse
	19, // 21: stucco.driver_service.Driver.SubscriptionListen:output_type -> stucco.messages.SubscriptionListenMessage
	11, // [11:22] is the sub-list for method output_type
	0,  // [0:11] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_driver_service_service_proto_init() }
func file_driver_service_service_proto_init() {
	if File_driver_service_service_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_driver_service_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_driver_service_service_proto_goTypes,
		DependencyIndexes: file_driver_service_service_proto_depIdxs,
	}.Build()
	File_driver_service_service_proto = out.File
	file_driver_service_service_proto_rawDesc = nil
	file_driver_service_service_proto_goTypes = nil
	file_driver_service_service_proto_depIdxs = nil
}
