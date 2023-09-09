const fs = require("fs");
const path = require("path");

const ICONS = {
  line: {
    folder: "|--",
    text: "|--",
  },
  ic: {
    folder: "📁",
    text: "📄",
  },
  arrow: {
    folder: "▶",
    text: "▶",
  },
};

/**
 *
 * @param {*} dirPath 执行路径
 * @param {*} indent 前置显示（空格等）
 * @param {*} level 需要打印的层级
 * @param {*} deep 当前执行的第几层
 * @param {*} type 图标样式
 * @returns
 */
function printDirectoryTree(
  dirPath,
  indent = "",
  level = -1,
  deep = 0,
  type = "line"
) {
  if (level === 0) {
    return;
  }
  const baseName = path.basename(dirPath);
  let nullstr = "";
  for (let i = 0; i < deep; i++) {
    nullstr += "  ";
  }
  if (deep == 0) {
    // console.log("📁 "+baseName)
  }
  deep += 1;
  const patterns = [/^node_modules$/];
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => !file.startsWith("."))
    .filter((file) => !patterns.some((pattern) => pattern.test(file)))
    .sort();
  let marker = indent;
  for (let i = 0; i < deep; i++) {
    marker += "  ";
  }
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      console.log(marker + `${ICONS[type].folder} ` + file);
      printDirectoryTree(filePath, marker, level - 1, deep, type);
    } else {
      console.log(marker + `${ICONS[type].text} ` + file);
    }
  });
}

module.exports = printDirectoryTree;
