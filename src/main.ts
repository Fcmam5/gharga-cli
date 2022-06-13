import { extractInputs } from "./lib/extract-keys";
import { loadActionAsJSON } from "./lib/read-yaml";

const fileContent = loadActionAsJSON("./.github/workflows/example.yaml");

console.log(extractInputs(fileContent));
