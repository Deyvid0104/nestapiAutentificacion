import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor,'tarea')
    private libroRepository: Repository<Autor>,
  ) {}

  async create(createLibroDto: CreateAutorDto): Promise<Autor> {
    const libro = this.libroRepository.create(createLibroDto)
    return this.libroRepository.save(libro)
  }
  // Crea un autor (POST)
  // http://localhost:5000/autor
  // Ejemplo
  /*
  {
    "nombre": "Juan Perez",
    "biografia": "Desarrollador de software"
    "fotoUrl": "http://fotodeautor.png"
  */

  async findAll(): Promise<Autor[]> {
    return this.libroRepository.find()
  }
  // Obtiene todos los autores (GET)
  // http://localhost:5000/autor

  async findOne(id: number): Promise<Autor> {
    return this.libroRepository.findOne({ where: { id }})
  }
  // Obtiene un autor (GET)
  // http://localhost:5000/autor/[id]

  async update(id: number, updateLibroDto: UpdateAutorDto): Promise<Autor> {
    await this.libroRepository.update(id, updateLibroDto)
    return this.libroRepository.findOne({ where: { id } })
  }
  // Actualiza un autor (PUT)
  // http://localhost:5000/autor/[id]
  // Ejemplo
  /*
  
  */

  async remove(id: number): Promise<void> {
    await this.libroRepository.delete(id)
  }
  // Elimina un autor (DELETE)
  // http://localhost:5000/autor/[id]
}