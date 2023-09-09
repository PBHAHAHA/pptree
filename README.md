

<p align="center">
    <img width="180" src="./assets/pptree.png" alt="logo">
</p>

![DingTalk](https://img.shields.io/static/v1?label=Github&message=pptree&color=green)
<!-- ![StaticBadge](https://img.shields.io/badge/label=) -->


## 介绍

> pptree 是用于在终端打印出项目的树形结构

## 文档

> 安装
```bash
npm install pptree -g
```

> 使用

直接使用，可打印出当前执行目录的项目结构
```bash
pptree
```

打印查找的层级（默认是-1，表示打印全部）
```bash
pptree -d 2 
```

打印的图标类型(line、ic、arrow)
```bash
pptree -t ic
```
