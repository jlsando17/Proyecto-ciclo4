import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodb4',
  connector: 'mongodb',
  url: 'mongodb+srv://jose007:Jerry1508@clusterweb.sir0oev.mongodb.net/MascotasBD?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Mongodb4DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodb4';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodb4', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
