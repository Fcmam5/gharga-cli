import {
  ReusableGHAction,
  WorkflowCall,
  WorkflowCallTypes,
} from "../models/reusable-action";

export const extractInputs = (ghWorkflowObj: ReusableGHAction) => {
  return WorkflowCallTypes.map((wct) => ({
    [wct]: ghWorkflowObj.on[wct]?.inputs,
  }));
};
