import { Module } from '@nestjs/common';
import { MessagesResolver } from './message.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MessagesResolver],
  exports: [MessagesResolver],
})
export class MessageModule {}
