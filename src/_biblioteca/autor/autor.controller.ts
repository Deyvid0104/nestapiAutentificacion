import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@Controller("autor") 
export class AutorController {
  constructor(private readonly autorService: AutorService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAutorDto: CreateAutorDto) {    
    return this.autorService.create(createAutorDto);  
  }
  // Crea un autor 
  // http://localhost:5000/autor
  // Ejemplo
  /*
  {
    "nombre": "Juan Perez",
    "biografia": "Desarrollador de software"
    "fotoUrl": "http://fotodeautor.png"
  }
  */
  
  
  @Get()
  findAll() {   return this.autorService.findAll(); 
  }
  // Obtiene todos los autores
  // http://localhost:5000/autor
  
  @Get(':id')
  findOne(@Param('id') id: string) {    return this.autorService.findOne(+id);  }
  // Obtiene un autor
  // http://localhost:5000/autor/[id]

  
  @Put(":id")
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateAutorDto: UpdateAutorDto) {
    return this.autorService.update(+id, updateAutorDto)
  }
  // Actualiza un autor
  // http://localhost:5000/autor/[id]
  // Ejemplo
  /*
  {
    "nombre": "Juan Perez",
    "biografia": "Desarrollador de software"
    "fotoUrl": "http://fotodeautor.png"
  }
  */
  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {  return this.autorService.remove(+id);  }
  // Elimina un autor
  // http://localhost:5000/autor/[id]
}