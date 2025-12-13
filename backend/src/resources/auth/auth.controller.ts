import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from "./dto/register.dto";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerData: RegisterDto) {
    return null;
  }

  @Post('login')
  login(@Body() authData: AuthDto) {
    return null;
  }

  @Post('logout')
  logout() {
    return null;
  }
}
