/* eslint-disable @typescript-eslint/no-use-before-define */

import {
  extractInputs,
  renderTableString,
} from '../../../../src/lib/triggers/actions/workflow-dispatch';
import { mockExample00 } from '../../../mocks';

describe('write-doc', () => {
  describe('extract inputs', () => {
    it('should extract inputs from all triggers', () => {
      expect(extractInputs(mockExample00)).toEqual(expectedExample00OutputsArray);
    });
  });

  describe('renderDispatchWorkflow', () => {
    it('renders a markdown table', () => {
      expect(renderTableString(mockExample00)).toEqual(expectedMdContent);
    });
  });
});

const expectedExample00OutputsArray = {
  workflow_call: {
    day: {
      default: 'yes',
      description: 'I will say good night if this value is set to "yes"',
      required: true,
      type: 'string',
    },
  },
  workflow_dispatch: {
    isNight: {
      default: 'yes',
      description: 'I will say good night if this value is set to "yes"',
      required: true,
    },
    name: {
      default: 'Octocat',
      description: 'Name to greet',
      required: false,
    },
  },
  workflow_run: undefined,
};

const expectedMdContent = `# 00-Example: Greeting Action

## Usage

### Dispatch

| Name | Type | Description | Required | default | deprecationMessage
| -- | -- |  -- | -- | -- | --
**isNight** | string | I will say good night if this value is set to "yes" | **true** |  *\`yes\`* |  -
**name** | string | Name to greet | **false** |  *\`Octocat\`* |  -

`;
