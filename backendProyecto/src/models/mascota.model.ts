import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Plan} from './plan.model';

@model()
export class Mascota extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  NombreMascota: string;

  @property({
    type: 'string',
    required: true,
  })
  Foto: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  Edad: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @property({
    type: 'string',
    required: true,
  })
  Especie: string;

  @belongsTo(() => Usuario)
  usuarioId: string;

  @belongsTo(() => Plan)
  planId: string;

  constructor(data?: Partial<Mascota>) {
    super(data);
  }
}

export interface MascotaRelations {
  // describe navigational properties here
}

export type MascotaWithRelations = Mascota & MascotaRelations;
