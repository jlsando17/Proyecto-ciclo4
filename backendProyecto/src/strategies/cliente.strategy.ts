import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {Request, RedirectRoute, HttpErrors} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import {ParamsDictionary} from 'express-serve-static-core';
import parseBearerToken from 'parse-bearer-token';
import {ParsedQs} from 'qs';
import {AutenticacionService} from '../services/autenticacion.service';



export class EstrategiaCliente implements AuthenticationStrategy {
  name: string = 'cliente';

  constructor(
    @service(AutenticacionService)
    public servicioAutencacion: AutenticacionService
  ) { }

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    let token = parseBearerToken(request);

    if (token) {
      let datos = this.servicioAutencacion.ValidarTokenJWT(token)
      if (datos) {
        let perfil: UserProfile = Object.assign({
          nombre: datos.data.nombre
        });
        return perfil;

      } else {
        throw new HttpErrors[401]('El token no sirve')

      }
    } else {
      throw new HttpErrors[401]('no se incluyo token')
    }
  }

}

