import inquirer from "inquirer";
import emoji from "node-emoji";
import figlet from "figlet";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const challenges = fs
  .readdirSync(path.resolve(__dirname, "../src/challenges"))
  .map((challenge) => challenge.replace(/_/g, " ").split(".challenge.ts")[0]);

console.clear();

console.log(chalk.blue(figlet.textSync("TYPASURA")));
console.log(
  chalk
    .hex("#2F73BF")
    .bold("  Beginner level typescript challenges created by Varun Bardwaj.\n")
);

const prompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "challenge",
        message: "Select a challenge.",
        choices: challenges,
      },
    ])
    .then((challenges) => {
      console.log("Running challenge...\n");
      const completed = execSync(
        `ts-node-dev --quiet src/challenges/${challenges.challenge.replace(
          / /g,
          "_"
        )}.challenge.ts`,
        {
          stdio: "inherit",
        }
      );
      if (!completed) {
        console.log(`${emoji.get("white_check_mark")} Challenge completed!\n`);
        inquirer
          .prompt([
            {
              type: "confirm",
              name: "restart",
              message: "Do you want to continue?",
              default: false,
            },
          ])
          .then((output) => {
            if (output.restart) prompt();
          });
      }
    });
};

prompt();
