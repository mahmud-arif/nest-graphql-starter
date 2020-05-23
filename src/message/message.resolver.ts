import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class MessagesResolver {
  // the injected dependency is injected as an argument to the constructor
  constructor(private readonly prisma: PrismaService) {}

  @Query()
  messages(@Args() args) {
    return this.prisma.client.messages(args);
  }

  @Mutation()
  createMessage(@Args() args) {
    return this.prisma.client.createMessage(args);
  }
}
