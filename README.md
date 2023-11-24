# Roadrunner

Roadrunner is a package developed using Rust and WebAssembly (Wasm) to enhance performance in Node.js applications. This package optimizes heavy computations in Node.js by leveraging the efficiency and speed of Rust's runtime through Wasm. Currently, the package is in a demo phase and includes functionalities for handling JSON Web Tokens (JWT) operations.

## Approach

Our approach aims to improve the performance of critical operations in Node.js by utilizing the robust and fast runtime advantages of Rust. Our benchmark tests on JWT operations have observed significant performance improvements when compared to traditional JavaScript implementations.

## Benchmark Results

In our benchmark tests, the WebAssembly-based encoding process yielded the following results compared to the `jsonwebtoken` Node.js package:

### Encode

```txt
jsonwebtoken encode x 2,760 ops/sec ±0.99% (94 runs sampled)
Roadrunner encode x 203,534 ops/sec ±0.78% (98 runs sampled)
Fastest is Roadrunner encode
```

### Decode

```txt
jsonwebtoken decode x 2,785 ops/sec ±1.29% (87 runs sampled)
Roadrunner decode x 178,624 ops/sec ±0.59% (98 runs sampled)
Fastest is Roadrunner decode
```

These results indicate that our WebAssembly-based solution can perform up to 73 times more operations per second than the standard `jsonwebtoken` Node.js package.

## Development and Local Setup

To develop and test the project locally:

- 1. Clone the project from the GitHub repository:

```bash
git clone https://github.com/9ssi7/roadrunner.git
cd roadrunner
```

- 2. To build the Wasm module:

```bash
wasm-pack build --target nodejs
```

- 3. Install dependencies specified in the package.json file located in the js folder:

```bash
cd roadrunner/js
npm install
```

- 4. Run benchmarks:

```bash
npm run benchmark-all
```

## License

This project is licensed under the [Apache 2.0 License](./LICENSE).
