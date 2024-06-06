import { Module } from "@nestjs/common";
import { SocketFeedbackModuleBase } from "./base/socketFeedback.module.base";
import { SocketFeedbackService } from "./socketFeedback.service";
import { SocketFeedbackController } from "./socketFeedback.controller";
import { SocketFeedbackResolver } from "./socketFeedback.resolver";

@Module({
  imports: [SocketFeedbackModuleBase],
  controllers: [SocketFeedbackController],
  providers: [SocketFeedbackService, SocketFeedbackResolver],
  exports: [SocketFeedbackService],
})
export class SocketFeedbackModule {}
