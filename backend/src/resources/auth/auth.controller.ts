import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register() {
    return null;
  }

  @Post('login')
  login() {
    return null;
  }

  @Post('logout')
  logout() {
    return null;
  }
}
