import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductoServicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  Proveedor: string;

  @property({
    type: 'string',
    required: true,
  })
  Precio: string;


  constructor(data?: Partial<ProductoServicio>) {
    super(data);
  }
}

export interface ProductoServicioRelations {
  // describe navigational properties here
}

export type ProductoServicioWithRelations = ProductoServicio & ProductoServicioRelations;
