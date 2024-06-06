import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SocketFeedbackService } from "./socketFeedback.service";
import { SocketFeedbackControllerBase } from "./base/socketFeedback.controller.base";

@swagger.ApiTags("socketFeedbacks")
@common.Controller("socketFeedbacks")
export class SocketFeedbackController extends SocketFeedbackControllerBase {
  constructor(protected readonly service: SocketFeedbackService) {
    super(service);
  }
}
