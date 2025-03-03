import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './entities/libro.entity';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro,'tarea')
    private libroRepository: Repository<Libro>,
  ) {}

  async create(createLibroDto: CreateLibroDto): Promise<Libro> {
    const libro = this.libroRepository.create(createLibroDto)
    return this.libroRepository.save(libro)
  }
  // Crea un libro (POST)
  // http://localhost:5000/libro
  // Ejemplo
  /*
  {
    "titulo": "Mi libro",
    "descripcion": "Un libro muy interesante",
    "portadaUrl": "http://portadadelibro.png",
    "autorId": 1
  }
  */

  async findAll(): Promise<Libro[]> {
    return this.libroRepository.find({ relations: ["autor"] })
  }
  // Obtiene todos los libros (GET)
  // http://localhost:5000/libro
  
  async findOne(id: number): Promise<Libro> {
    return this.libroRepository.findOne({ where: { id }, relations: ["autor"] })
  }
  // Obtiene un libro por id (GET)
  // http://localhost:5000/libro/[id]

  async update(id: number, updateLibroDto: UpdateLibroDto): Promise<Libro> {
    await this.libroRepository.update(id, updateLibroDto)
    return this.libroRepository.findOne({ where: { id } })
  }
  // Actualiza un libro (PUT)
  // http://localhost:5000/libro/[id]
  // Ejemplo
  /*
  {
    "titulo": "Mi libro actualizado",
    "descripcion": "Un libro muy interesante actualizado",
    "portadaUrl": "http://portadadelibroactualizado.png",
    "autorId": 1
  }
  */

  async remove(id: number): Promise<void> {
    await this.libroRepository.delete(id)
  }
  // Elimina un libro (DELETE)
  // http://localhost:5000/libro/[id]
}