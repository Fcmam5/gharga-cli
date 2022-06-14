import { ActionInput, DispatchActionInput } from './action-input';

type WorkflowCallType = 'workflow_call' | 'workflow_dispatch' | 'workflow_run';
export const WorkflowCallTypes: WorkflowCallType[] = [
  'workflow_call',
  'workflow_dispatch',
  'workflow_run',
];

export interface WorkflowRun {
  inputs: ActionInput;
}

export interface WorkflowDispatch {
  inputs: DispatchActionInput;
}

export interface WorkflowCall {
  workflow_call?: WorkflowRun;
  workflow_dispatch?: WorkflowDispatch;
  workflow_run?: WorkflowRun;
}

// See: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#about-yaml-syntax-for-github-actions
export interface ReusableGHAction {
  name: string;
  on: WorkflowCall;
  jobs: unknown;
}

// Custom types
export interface CustomWorkflowInputs {
  workflow_call?: ActionInput;
  workflow_dispatch?: DispatchActionInput;
  workflow_run?: ActionInput;
}
