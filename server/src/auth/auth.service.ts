import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as sha256 from 'crypto-js/sha256';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === sha256(pass).toString()) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { sub: user.id };
    const { firstName, lastName } = user;
    return {
      accessToken: this.jwtService.sign(payload),
      firstName,
      lastName,
    };
  }
}
