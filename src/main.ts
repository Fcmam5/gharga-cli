import { renderTableString } from "./lib/write-doc";
import { loadActionAsJSON } from "./lib/read-yaml";

const fileContent = loadActionAsJSON("./.github/workflows/00-example.yaml");

console.log(renderTableString(fileContent));
