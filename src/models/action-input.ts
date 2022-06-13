export interface ActionInput {
  [name: string]: ActionInputType;
}

export interface DispatchActionInput {
  [name: string]: DispatchInputType;
}

// See: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id
interface ActionInputType {
  required: boolean;
  type?: inputType;
  description: string;
  default?: string;
  deprecationMessage?: string;
}

interface DispatchInputType {
  required: boolean;
  description: string;
  default?: string;
  deprecationMessage?: string;
  type?: inputType;
  options?: string[];
}

// See: https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatchinputs
type inputType = "boolean" | "string" | "choice" | "environment";
