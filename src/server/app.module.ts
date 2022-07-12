import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { AppController } from './app.controller';
import path from 'path';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: true,
        dir: path.resolve(__dirname, '..', 'src'),
      }) /* null means that nest-next 
    should look for pages in root dir */,
      {
        passthrough404: true,
        viewsDir: null,
      },
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    ProjectModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
