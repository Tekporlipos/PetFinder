const  app = require('../../app');
const request  = require("supertest");

// admin testing


it("geting user data", async ()=>{
    request(app)
        .get('/admin/getUsers')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
})

it("geting user data by key", async ()=>{
    request(app)
        .get('/admin/getUsers/keys')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
})

it("geting user by key", async ()=>{
    request(app)
        .get('/admin/getUsers/keys/03a6aaf5-8d50-4db8-8403-61a8a5a36318')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
})



// api testing
it("geting all pet", async ()=>{
    request(app)
        .get('/api/v2/03a6aaf5-8d50-4db8-8403-61a8a5a36318')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
})

it("geting pet organisation by key",async ()=>{
    request(app)
        .get('/api/v2/organizations/03a6aaf5-8d50-4db8-8403-61a8a5a36318')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
})


it("geting pet type by key",async ()=>{
    request(app)
        .get('/api/v2/types/03a6aaf5-8d50-4db8-8403-61a8a5a36318')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
})


