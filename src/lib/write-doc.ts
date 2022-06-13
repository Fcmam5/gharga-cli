import { DispatchActionInput } from "../models/action-input";
import {
  CustomWorkflowInputs,
  ReusableGHAction,
  WorkflowCall,
  WorkflowCallTypes,
} from "../models/reusable-action";

export const extractInputs = (
  ghWorkflowObj: ReusableGHAction
): CustomWorkflowInputs => {
  return WorkflowCallTypes.reduce(
    (acc, wct) => ({
      ...acc,
      [wct]: ghWorkflowObj.on[wct]?.inputs,
    }),
    {}
  );
};

export const renderTableString = (ghWorkflowObj: ReusableGHAction): string => {
  const inputs = extractInputs(ghWorkflowObj);
  const workflowDispatch = inputs["workflow_dispatch"];
  let toRender = `# ${ghWorkflowObj.name}

## Usage

`;

  if (workflowDispatch) {
    toRender += renderDispatchWorkflow(workflowDispatch);
  }

  return toRender + "\n";
};

const renderDispatchWorkflow = (dai: DispatchActionInput) => {
  const inputNames = Object.keys(dai);
  const rows = inputNames
    .map((inputName) => {
      const {
        description,
        required,
        deprecationMessage,
        default: _default,
      } = dai[inputName];
      return `**${inputName}** | ${description} | **${required}** |  *\`${_default}\`* |  ${
        deprecationMessage || "-"
      }`;
    })
    .join("\n");

  return `### Dispatch

| Name | Description | Required | default | deprecationMessage
| -- | -- | -- | -- | --
${rows}
`;
};
