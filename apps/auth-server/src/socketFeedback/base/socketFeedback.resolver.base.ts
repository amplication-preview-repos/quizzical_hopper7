/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SocketFeedback } from "./SocketFeedback";
import { SocketFeedbackCountArgs } from "./SocketFeedbackCountArgs";
import { SocketFeedbackFindManyArgs } from "./SocketFeedbackFindManyArgs";
import { SocketFeedbackFindUniqueArgs } from "./SocketFeedbackFindUniqueArgs";
import { DeleteSocketFeedbackArgs } from "./DeleteSocketFeedbackArgs";
import { SocketFeedbackService } from "../socketFeedback.service";
@graphql.Resolver(() => SocketFeedback)
export class SocketFeedbackResolverBase {
  constructor(protected readonly service: SocketFeedbackService) {}

  async _socketFeedbacksMeta(
    @graphql.Args() args: SocketFeedbackCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SocketFeedback])
  async socketFeedbacks(
    @graphql.Args() args: SocketFeedbackFindManyArgs
  ): Promise<SocketFeedback[]> {
    return this.service.socketFeedbacks(args);
  }

  @graphql.Query(() => SocketFeedback, { nullable: true })
  async socketFeedback(
    @graphql.Args() args: SocketFeedbackFindUniqueArgs
  ): Promise<SocketFeedback | null> {
    const result = await this.service.socketFeedback(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SocketFeedback)
  async deleteSocketFeedback(
    @graphql.Args() args: DeleteSocketFeedbackArgs
  ): Promise<SocketFeedback | null> {
    try {
      return await this.service.deleteSocketFeedback(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
