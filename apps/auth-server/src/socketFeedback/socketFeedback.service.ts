import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocketFeedbackServiceBase } from "./base/socketFeedback.service.base";

@Injectable()
export class SocketFeedbackService extends SocketFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
