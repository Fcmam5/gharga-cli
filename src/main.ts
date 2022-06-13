import { extractInputs } from "./lib/write-doc";
import { loadActionAsJSON } from "./lib/read-yaml";

const fileContent = loadActionAsJSON("./.github/workflows/example.yaml");

console.log(extractInputs(fileContent));
