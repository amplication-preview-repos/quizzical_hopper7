import { SocketFeedback as TSocketFeedback } from "../api/socketFeedback/SocketFeedback";

export const SOCKETFEEDBACK_TITLE_FIELD = "id";

export const SocketFeedbackTitle = (record: TSocketFeedback): string => {
  return record.id?.toString() || String(record.id);
};
