import { ActionInput, DispatchActionInput } from "./action-input";

// See: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#about-yaml-syntax-for-github-actions
export interface ReusableGHAction {
  name: string;
  author?: string;
  on: WorkflowCall;
  jobs: unknown;
}

export interface WorkflowCall {
  workflow_call?: WorkflowRun;
  workflow_dispatch?: WorkflowDispatch;
  workflow_run?: WorkflowRun;
}

export interface WorkflowRun {
  inputs: ActionInput;
}
export interface WorkflowDispatch {
  inputs: DispatchActionInput;
}

type WorkflowCallType = "workflow_call" | "workflow_dispatch" | "workflow_run";
export const WorkflowCallTypes: WorkflowCallType[] = [
  "workflow_call",
  "workflow_dispatch",
  "workflow_run",
];
