const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');

var {Todo}= require('./../models/todo');



beforeEach((done)=>{
  Todo.remove({}).then(()=>done());});

describe('POST /todo' , () => {
  it('should create a new todo',(done)=>{

    var text = 'test text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=> {
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=> done(e));
    });

  });
  it('should not create a new todo',(done)=>{

    var text = '';

    request(app)
    .post('/todos')
    .send({text})
    .expect(400)
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=> {
        expect(todos.length).toBe(0);
        done();
      }).catch((e)=> done(e));
    });

  });

});
describe('GET /todo' , () => {
  it('should get all todos',(done)=>{

    var doc = [];

    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.doc).toEqual(doc);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
done();
    });

  });
});
