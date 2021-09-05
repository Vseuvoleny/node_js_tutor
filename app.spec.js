const request = require("supertest");
const assert = require("assert");
const app = require("./app").app;

describe("Express test", () => {
  it("should return Hello test", (done) => {
    request(app).get("/").expect("hello from simple server :)").end(done);
  });
  it("should return notFound with status 404", (done) => {
    request(app).get("/error").expect(404).expect("Not Found").end(done);
  });
  it("should return user with name Tom and age 22", (done) => {
    request(app)
      .get("/user")
      .expect((response) => {
        assert.deepStrictEqual(response.body, { name: "Tom", age: 12 });
      })
      .end(done);
  });
});
