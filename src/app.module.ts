import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { join } from 'path';
import { MessageModule } from './message/message.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      
    }),
    MessageModule,
    PrismaModule,
  ],

})
export class AppModule {}
