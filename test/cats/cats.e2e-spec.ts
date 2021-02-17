import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Testinge2emodule } from '../testinge2emodule';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await Testinge2emodule.create();
  });
  describe('when realizas una petición con datos incompletos', () => {
    it('then se crea el recurso', () => {
      return request(app.getHttpServer())
        .post('/cats')
        .send({
          age: '1',
          breed: 'yes'
        })
        .expect(400);
    });
  });
  describe('when realizas una petición con los datos completos', () => {
    it('then se crea el recurso', () => {
      return request(app.getHttpServer())
        .post('/cats')
        .send({
          name: 'Minos',
          age: '1',
          breed: 'yes'
        })
        .expect(201);
    });
  });
  describe('when realizas una busqueda con todos los filtros', () => {
    it('then obtienes resultados', () => {
      const limit = 10;
      return request(app.getHttpServer())
        .get('/cats?limit=' + limit)
        .expect(200)
        .then((response) => {
          expect(response.body).not.toBeNull();
        });
    });
  });
  describe('when realizas una busqueda especifica', () => {
    it('then obtienes un resultado', () => {
      const id = 11;
      return request(app.getHttpServer())
        .get('/cats/' + id)
        .expect(200)
        .expect(`This action returns a #${id} cat`);
    });
  });
  describe('when realizas una actualización con los datos completos', () => {
    it('then se actualiza el recurso', () => {
      const id = 9;
      return request(app.getHttpServer())
        .put('/cats/' + id)
        .send({
          name: 'Minos',
          age: '2',
          breed: 'yes'
        })
        .expect(200)
        .expect(`This action updates a #${id} cat`);
    });
  });
  describe('when realizas una eliminación especificando el id del recursos', () => {
    it('then se elimina el recurso', () => {
      const id = 11;
      return request(app.getHttpServer())
        .delete('/cats/' + id)
        .expect(200)
        .expect(`This action removes a #${id} cat`);
    });
  });
});
