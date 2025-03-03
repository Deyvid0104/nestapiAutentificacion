import { Module } from '@nestjs/common';
import { UsuarioService } from './users.service';
import { UserController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Usuario],'tarea')],
  controllers: [UserController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuarioModule {}
