var request = require('supertest');
var app = require('./server');

var test = require('tape');

const testItemId = "5b56cdec231647748f4f50b5";

const testGetRequest = (url, description) => {
    test(description, (t) => {
        request(app)
            .get(url)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {

                t.error(err, 'No error');
                t.end();
            });
    });
}

const loginBody = {
    login: 'admin',
    password: 'admin'
}

const newItemBody = {
    name: "testItem",
    type: "test",
    producer: "test",
    amount: 1,
    price: 1,
    imageUrl: "none"

}

var loginToken;

const testPostRequest = (url, description, body) => {
    test(description, (t) => {
        request(app)
            .post(url)
            .set('Accept', 'application/json')
            .send(body)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                t.error(err, 'No error');
                t.end();
            });
    });
}

const testLogin = (body) => {
        test("Loggin in: ", (t) => {
            request(app)
                .post('/users/login')
                .set('Accept', 'application/json')
                .send(body)
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    token = res.body.token;
                    t.error(err, 'No error');
                    t.end();
                });
        });

}

const testAddingAndDeletingItem = (token, newItemBody) => {
    testPostRequestWithToken('/items', 'Adding new item: ', newItemBody, token);
    testDeleteRequestWithToken('/items/',"Deleting item: ", token ); 
}

const testPostRequestWithToken = (url, description, body, token) => {
    test(description, (t) => {
        request(app)
            .post(url)
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer '+ token)
            .send(body)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                t.error(err, 'No error');
                t.end();
            });
    });

}

const testDeleteRequestWithToken = (url, description, token) => {
    test(description, (t) => {
        request(app)
            .delete(url)
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer '+ token)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                t.error(err, 'No error');
                t.end();
            });
    });

}

const tokenExample = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTUzMzgxMTkzMywiZXhwIjoxNTMzODE1NTMzfQ.H-TiyRRjuGRTCgC-r393gc9y-58zg5oevOwtg2XN6pQ";

testGetRequest('/items', 'Getting all items: ');
testGetRequest('/items/id/' + testItemId, `Getting single item by id : `);
testGetRequest('/items/type/tv', 'Gettings items by type: ');
testGetRequest('/items/type/tv/page/1', 'Pagination: ');
testGetRequest('/items/search/test', 'Search query: ');
testLogin(loginBody);
testPostRequestWithToken('/items', 'Adding new item: ', newItemBody, tokenExample);












