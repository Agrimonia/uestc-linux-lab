# Linux-lab

UESTC-综合课程设计III-基于UNIX/Linux的自学系统

## 安装

### 1. 安装 Node.js

```bash
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

其他系统请查阅 [通过包管理器方式安装 Node.js](https://nodejs.org/zh-cn/download/package-manager/)。

### 2. 通过 npm 安装 linux-lab

```bash
npm i -g linux-lab
```

### 3. 直接运行

```bash
linux-lab
```

## ToDoList

- [ ] 选择题题库
- [ ] 填空题题库
- [x] 固定难度模式
- [ ] 自动难度模式
- [x] 完成练习后打分并给出答案
- [ ] 学习评分和统计结果

## 主要任务

1. 编写一个在UNIX/Linux操作系统下的通用命令自主学习系统。为该自学系统建立的命令库中至少包含三种以上不同难度的的通用命令，每种难度至少包含30条以上的命令以及每条命令对应的功能描述。
2. 程序运行时，用户可以在菜单上选择固定难度或自动难度两种难度模式之一。在固定难度模式下，无论用户回答正确或回答错误，都给出指定难度的题目。在自动难度模式下系统在用户连续答对或答错指定数量的题目后自动增加难度或降低难度。
3. 用户在学习时，可以采用以下两种学习模式：根据所给出的命令形式选择该命令功能，或者根据指定的命令的功能来选择对应的命令内容。
4. 程序运行结束时，系统给出该用户的学习评分和统计结果。
5. 完成概要设计，注意模块划分，画出系统的总体结构图；
6. 完成详细设计，画出主要功能模块的运行流程图；
7. 完成代码编写，编程语言和开发工具可以任选；
8. 进行系统测试，程序运行时能够根据用户输入的菜单选项而运行在不同的难度和不同的学习模式下，特别是能够在自动难度模式下，根据使用者的学习正确率而自动提高或降低难度级别。程序结束时能够给出用户学习时的统计信息，该统计信息包含用户对不同难度题目的正确率，以及同一题目的回答正确率等内容。统计信息所包含的内容由用户进入程序时的菜单选择来设定。
9. 系统应该能够稳定可靠地运行，界面简洁大方；
10. 最后的设计报告需体现小组成员的分工，并说明每位组员独立完成的工作部分。