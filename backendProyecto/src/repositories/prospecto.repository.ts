import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Prospecto, ProspectoRelations} from '../models';

export class ProspectoRepository extends DefaultCrudRepository<
  Prospecto,
  typeof Prospecto.prototype.id,
  ProspectoRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(Prospecto, dataSource);
  }
}
