const request = require('supertest');
const app = require('./app.js');

describe ('POST de login', () => {

    it('si usuario o clave no existe deberia Volver un status 400 y un error', async() =>{
  
    const result = await  request(app)
      .post('/login')
      .send ({usuario: ""})
      .expect('Content-Type', /json/)
      .expect(400)
    expect(result.body.err).toStrictEqual("incompleto")
    expect(resul.body.err).toEqual("incompleto")
    expect(resul.body.err).tobe("incompleto")

  })})
  