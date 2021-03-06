import { ReusableGHAction } from '../src/models/reusable-action';

export const mockExample00: ReusableGHAction = {
  name: '00-Example: Greeting Action',
  on: {
    workflow_call: {
      inputs: {
        day: {
          type: 'string',
          required: true,
          default: 'yes',
          description: 'I will say good night if this value is set to "yes"',
        },
      },
    },
    workflow_dispatch: {
      inputs: {
        isNight: {
          required: true,
          default: 'yes',
          description: 'I will say good night if this value is set to "yes"',
        },
        name: {
          default: 'Octocat',
          description: 'Name to greet',
          required: false,
        },
      },
    },
  },
  jobs: {
    greet: {
      'runs-on': 'ubuntu-latest',
      steps: [
        {
          name: 'Say Goodnight',
          if: "github.event.inputs.isNight == 'yes'",
          run: 'echo "GREETING=Goodnight" >> $GITHUB_ENV',
        },
        {
          name: 'Say Hello',
          if: "github.event.inputs.isNight == 'no'",
          run: 'echo "GREETING=Hello" >> $GITHUB_ENV',
        },
        {
          name: 'Generate output',
          id: 'the-sentence',
          // eslint-disable-next-line no-template-curly-in-string
          run: 'echo "::set-output name=greeting-phrase::\'${{ env.GREETING }} ${{ github.event.inputs.name }}\'"',
        },
        {
          name: 'Actually say something',
          // eslint-disable-next-line no-template-curly-in-string
          run: 'echo "${{ steps.the-sentence.outputs.greeting-phrase }}"',
        },
      ],
    },
  },
};

export default mockExample00;
