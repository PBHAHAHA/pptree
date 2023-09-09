#! /usr/bin/env node
var yargs = require("yargs");
const printDirectoryTree = require("../index");
const argv = yargs
  .alias("H", "help")
  .alias("V", "version")
  .option("deep", {
    alias: "d",
    demand: false,
    default: -1,
    describe: "打印显示层级",
    type: "number",
  })
  .option("type", {
    alias: "t",
    demand: false,
    default: "line",
    describe: "打印显示图标【line(默认),ic,arrow】",
    type: "string",
  }).argv;

const curPath = process.cwd();

const levels = argv.deep || -1;
const type = argv.type || "line";
printDirectoryTree(curPath, "", levels, 0,type);
