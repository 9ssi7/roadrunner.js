const Benchmark = require("benchmark");
const jwt = require("jsonwebtoken");
const wasm = require("../pkg/roadrunner");

const secret = "your-secret-key";
const token = jwt.sign({ sub: "user123", company: "ExampleCorp" }, secret, {
  expiresIn: "4h",
});

function jwtDecode() {
  return jwt.verify(token, secret);
}

function wasmDecode() {
  return wasm.jwt_decode(secret, token);
}

const suite = new Benchmark.Suite();

suite
  .add("jsonwebtoken decode", function () {
    jwtDecode();
  })
  .add("Roadrunner decode", function () {
    wasmDecode();
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
