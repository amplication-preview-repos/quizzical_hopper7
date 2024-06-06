/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SocketFeedbackService } from "../socketFeedback.service";
import { SocketFeedbackCreateInput } from "./SocketFeedbackCreateInput";
import { SocketFeedback } from "./SocketFeedback";
import { SocketFeedbackFindManyArgs } from "./SocketFeedbackFindManyArgs";
import { SocketFeedbackWhereUniqueInput } from "./SocketFeedbackWhereUniqueInput";
import { SocketFeedbackUpdateInput } from "./SocketFeedbackUpdateInput";

export class SocketFeedbackControllerBase {
  constructor(protected readonly service: SocketFeedbackService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SocketFeedback })
  async createSocketFeedback(
    @common.Body() data: SocketFeedbackCreateInput
  ): Promise<SocketFeedback> {
    return await this.service.createSocketFeedback({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SocketFeedback] })
  @ApiNestedQuery(SocketFeedbackFindManyArgs)
  async socketFeedbacks(
    @common.Req() request: Request
  ): Promise<SocketFeedback[]> {
    const args = plainToClass(SocketFeedbackFindManyArgs, request.query);
    return this.service.socketFeedbacks({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SocketFeedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async socketFeedback(
    @common.Param() params: SocketFeedbackWhereUniqueInput
  ): Promise<SocketFeedback | null> {
    const result = await this.service.socketFeedback({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SocketFeedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSocketFeedback(
    @common.Param() params: SocketFeedbackWhereUniqueInput,
    @common.Body() data: SocketFeedbackUpdateInput
  ): Promise<SocketFeedback | null> {
    try {
      return await this.service.updateSocketFeedback({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SocketFeedback })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSocketFeedback(
    @common.Param() params: SocketFeedbackWhereUniqueInput
  ): Promise<SocketFeedback | null> {
    try {
      return await this.service.deleteSocketFeedback({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
