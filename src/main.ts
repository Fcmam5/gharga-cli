import { renderTableString } from './lib/triggers/actions/workflow-dispatch';
import { loadActionAsJSON } from './lib/read-yaml';

// const fileContent = loadActionAsJSON("./.github/workflows/00-example.yaml");
const fileContent = loadActionAsJSON('./.github/workflows/01-with-choice.yaml');

console.log(renderTableString(fileContent));
