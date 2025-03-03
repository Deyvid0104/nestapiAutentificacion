import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { LibroService } from './libro.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@Controller("libro") 
export class LibroController {
  constructor(private readonly autorService: LibroService) {}
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAutorDto: CreateLibroDto) {    
    return this.autorService.create(createAutorDto);  
  }
  // Crea un autor
  // http://localhost:5000/autor
  // Ejemplo
  /*
  {
    "titulo": "Mi libro",
    "descripcion": "Un libro muy interesante",
    "portadaUrl": "http://portadadelibro.png",
    "autorId": 1
  }
  */
  
  @Get()
  findAll() {   
    return this.autorService.findAll();   
  }
  // Obtiene todos los libros
  // http://localhost:5000/libro
  
  @Get(':id')
  findOne(@Param('id') id: string) {    
    return this.autorService.findOne(+id);  
  }
  // Obtiene un libro
  // http://localhost:5000/libro/[id]
  
  @UseGuards(JwtAuthGuard)
  @Put(":id")
  update(@Param('id') id: string, @Body() updateAutorDto: UpdateLibroDto) {
    return this.autorService.update(+id, updateAutorDto)
  }
  // Actualiza un libro
  // http://localhost:5000/libro/[id]
  // Ejemplo, solo se actualiza si se esta autenticado
  /*
  {
    "titulo": "Mi libro",
    "descripcion": "Un libro muy interesante",
    "portadaUrl": "http://portadadelibro.png",
    "autorId": 1
  }
  */
  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {  
    return this.autorService.remove(+id);      
  }
  // Elimina un libro
  // http://localhost:5000/libro/[id]
  // Nota, solo se elimina si se esta autenticado
}