import * as graphql from "@nestjs/graphql";
import { SocketFeedbackResolverBase } from "./base/socketFeedback.resolver.base";
import { SocketFeedback } from "./base/SocketFeedback";
import { SocketFeedbackService } from "./socketFeedback.service";

@graphql.Resolver(() => SocketFeedback)
export class SocketFeedbackResolver extends SocketFeedbackResolverBase {
  constructor(protected readonly service: SocketFeedbackService) {
    super(service);
  }
}
