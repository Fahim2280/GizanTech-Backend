import { Controller, Post, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Post('login')
  async login(@Body() user: { username: string; password: string }) {
    if (user.username === 'admin' && user.password === '12345') {
      const payload = { username: user.username, sub: 1 };
      const token = this.jwtService.sign(payload);
      return { access_token: token };
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
