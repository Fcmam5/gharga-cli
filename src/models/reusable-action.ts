import { ActionInput } from "./action-input";

// See: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#about-yaml-syntax-for-github-actions
export interface ReusableGHAction {
  name: string;
  author?: string;
  on: WorkflowCall;
}

export interface WorkflowCall {
  workflow_call: WorkflowRun;
  workflow_dispatch: WorkflowRun;
  workflow_run: WorkflowRun;
}

interface WorkflowRun {
  inputs: ActionInput;
}
