import { Type } from "class-transformer"
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator"
import { ProductoTallaDto } from "src/_1casoN_N/productotalla/dto/create-productotalla.dto"

export class CreateProductoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string
  
    @IsNotEmpty()
    @IsString()
    descripcion: string
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ProductoTallaDto)
    tallas: ProductoTallaDto[]
  }
