import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    if (err || !user) {
      if (
        info?.message === 'No auth token' ||
        info?.name === 'JsonWebTokenError'
      ) {
        throw new UnauthorizedException(
          'No auth token provided. Please include a valid token in the Authorization header.',
        );
      }
      if (info?.message === 'jwt malformed') {
        throw new UnauthorizedException('Invalid token format.');
      }
      if (info?.message === 'jwt expired') {
        throw new UnauthorizedException(
          'Token has expired. Please log in again.',
        );
      }
      throw err || new UnauthorizedException('Unauthorized access.');
    }
    return user;
  }
}
