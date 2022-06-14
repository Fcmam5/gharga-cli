import { DispatchActionInput } from '../models/action-input';
import {
  CustomWorkflowInputs,
  ReusableGHAction,
  WorkflowCallTypes,
} from '../models/reusable-action';

export const extractInputs = (
  ghWorkflowObj: ReusableGHAction,
): CustomWorkflowInputs => WorkflowCallTypes.reduce(
  (acc, wct) => ({
    ...acc,
    [wct]: ghWorkflowObj.on[wct]?.inputs,
  }),
  {},
);

const renderDispatchWorkflow = (dai: DispatchActionInput) => {
  const inputNames = Object.keys(dai);
  const rows = inputNames
    .map((inputName) => {
      const {
        description,
        required,
        deprecationMessage,
        default: defaultVal,
        type,
        options,
      } = dai[inputName];
      return `**${inputName}** | ${type || 'string'} | ${description || ''}${
        options ? ` (possible values: ${options.join()})` : ''
      } | **${required}** |  *\`${defaultVal || ''}\`* |  ${
        deprecationMessage || '-'
      }`;
    })
    .join('\n');

  return `### Dispatch
  
  | Name | Type | Description | Required | default | deprecationMessage
  | -- | -- |  -- | -- | -- | --
  ${rows}
  `;
};

export const renderTableString = (ghWorkflowObj: ReusableGHAction): string => {
  const inputs = extractInputs(ghWorkflowObj);
  const workflowDispatch = inputs.workflow_dispatch;
  let toRender = `# ${ghWorkflowObj.name}

## Usage

`;

  if (workflowDispatch) {
    toRender += renderDispatchWorkflow(workflowDispatch);
  }

  return `${toRender}\n`;
};
