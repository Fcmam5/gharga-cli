import { renderTableString } from "./lib/write-doc";
import { loadActionAsJSON } from "./lib/read-yaml";

const fileContent = loadActionAsJSON("./.github/workflows/example.yaml");

console.log(renderTableString(fileContent));
