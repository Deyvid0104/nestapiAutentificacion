import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsuarioService,
    private jwtService: JwtService
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
    // Valida si el usuario existe y si la contraseña es correcta
  }

  async register(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await this.userService.create(name, email, hashedPassword);
    return this.login(user);
    // Crea un nuevo usuario con contraseña hash y devuelve un token
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

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
    // Genera un token con el payload del usuario
  }
  // Ejemplo
  // http://localhost:5000/auth/login (POST)
  /*
  {
    "email": "deyvid@asir.com",
    "password": "admin"
  }
  */
}
