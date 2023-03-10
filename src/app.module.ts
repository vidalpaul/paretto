import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UtilsModule,
  ],
})
export class AppModule {}
