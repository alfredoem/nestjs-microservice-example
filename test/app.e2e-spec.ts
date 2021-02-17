import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Testinge2emodule } from './testinge2emodule';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await Testinge2emodule.create();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('ok');
  });
});
