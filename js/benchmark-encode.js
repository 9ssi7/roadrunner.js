const Benchmark = require("benchmark");
const jwt = require("jsonwebtoken");
const wasm = require("../pkg/roadrunner");

const userId = "user123";
const company = "ExampleCorp";
const secret = "your-secret-key";

function jwtEncode() {
  return jwt.sign({ sub: userId, company }, secret, { expiresIn: "4h" });
}

function wasmEncode() {
  return wasm.jwt_encode(secret, userId, company);
}

const suite = new Benchmark.Suite();

suite
  .add("jsonwebtoken encode", function () {
    jwtEncode();
  })
  .add("Roadrunner encode", function () {
    wasmEncode();
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
