import assert from "assert";
import { questionGenerator, validInput } from "../lib/inquirer";

const rawQuestions = [
  {
    id: "1",
    type: "sa",
    title: "进入上一次工作路径的命令是？",
    choices: [
      'A. cd /',
      'B. cd ~',
      'C. cd -',
      'D. cd !$'
    ],
    answer: "C. cd -"
  },
  {
    id: "2",
    type: "qa",
    title: "请写出进入上一次工作路径的命令。",
    answer: "cd -"
  }
];

const inquirerQuestions = [
  {
    name: '1',
    type: 'list',
    message: '进入上一次工作路径的命令是？',
    choices: [
      'A. cd /',
      'B. cd ~',
      'C. cd -',
      'D. cd !$'
    ],
    validate: (value: string) => {
      if (value.length) {
        return true;
      }
    }
  },
  {
    name: "2",
    type: "editor",
    message: "请写出进入上一次工作路径的命令。",
    validate: (value: string) => {
      if (validInput(value)) {
        return true;
      } else {
        return "请输入有效命令";
      }
    }
  }
];

describe("questionGenerator", () => {
  it("should generate valid inquirer question object", () => {
    assert.deepEqual(JSON.stringify(questionGenerator(rawQuestions)), JSON.stringify(inquirerQuestions));
  });
});