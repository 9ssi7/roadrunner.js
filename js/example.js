const wasm = require("../pkg/roadrunner");
const userId = "user123";
const company = "ExampleCorp";
const secret = "your-secret-key";

const token = wasm.jwt_encode(secret, company, userId);
console.log("Encoded JWT:", token);

try {
  const decoded = wasm.jwt_decode(secret, token);
  console.log("Decoded JWT:", decoded);
} catch (e) {
  console.error("Error decoding JWT:", e);
}
