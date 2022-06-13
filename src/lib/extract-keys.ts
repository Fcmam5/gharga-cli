import { ReusableGHAction } from "../models/reusable-action";

export const extractInputs = (ghWorkflowObj: ReusableGHAction) => {
  console.log(ghWorkflowObj.on.workflow_dispatch.inputs["isNight"].description);
};
