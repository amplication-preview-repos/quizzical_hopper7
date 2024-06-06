import { SocketFeedbackWhereInput } from "./SocketFeedbackWhereInput";
import { SocketFeedbackOrderByInput } from "./SocketFeedbackOrderByInput";

export type SocketFeedbackFindManyArgs = {
  where?: SocketFeedbackWhereInput;
  orderBy?: Array<SocketFeedbackOrderByInput>;
  skip?: number;
  take?: number;
};
