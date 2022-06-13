import { extractInputs } from "../../src/lib/write-doc";
import { mockExample00 } from "../mocks";

describe("write-doc", () => {
  describe("extract inputs", () => {
    it("should extract inputs from all triggers", () => {
      expect(extractInputs(mockExample00)).toEqual(
        expectedExample00OutputsArray
      );
    });
  });
});

const expectedExample00OutputsArray = [
  {
    workflow_call: {
      day: {
        default: "yes",
        description: 'I will say good night if this value is set to "yes"',
        required: true,
        type: "string",
      },
    },
  },
  {
    workflow_dispatch: {
      isNight: {
        default: "yes",
        description: 'I will say good night if this value is set to "yes"',
        required: true,
      },
      name: {
        default: "Octocat",
        description: "Name to greet",
        required: false,
      },
    },
  },
  { workflow_run: undefined },
];
