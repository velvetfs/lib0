import * as fs from "fs";

const files = fs
  .readdirSync("./")
  .filter((file) => /(?<!(test|config))\.js$/.test(file));

export default [
  {
    input: files,
    output: {
      dir: "./dist",
      format: "cjs",
      sourcemap: true,
      entryFileNames: "[name].cjs",
      chunkFileNames: "[name]-[hash].cjs",
    },
    external: [
      "isomorphic.js",
      "node:crypto",
      "lib0/webcrypto",
      "lib0/performance",
      "perf_hooks",
    ],
  },
  {
    input: files,
    output: {
      dir: "./dist",
      format: "es",
      sourcemap: true,
    },
  },
];
