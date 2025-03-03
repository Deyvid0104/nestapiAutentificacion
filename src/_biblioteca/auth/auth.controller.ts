import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  // Ejemplo
  // http://localhost:5000/auth/login (POST)
  /*
  {
    "email": "deyvid@asir.com",
    "password": "admin"
  }
  */

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string }) {
    return this.authService.register(body.name, body.email, body.password);
  }
  // Ejemplo
  // http://localhost:5000/auth/register (POST)
  /*
  {
    "name": "Deyvid",
    "email": "deyvid@asir.com",
    "password": "admin"
  }
  */
}
