import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  homePage() {
    return {};
  }

  @Get('/login')
  @Render('auth/login')
  loginPage() {
    return {};
  }

  @Get('/signup')
  @Render('auth/signup')
  signUpPage() {
    return {};
  }

  @Get('/profile')
  @Render('user/profile')
  profilePage() {
    return {};
  }
}
