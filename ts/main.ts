import _messages from './node/messages/messages_pb.cjs';
import _driverService from './node/driver_service/service_grpc_pb.cjs';

export const messages = { ..._messages };
export const driverService = { ..._driverService };
