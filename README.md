# 海风小店 - 完整项目

本项目整合了海风小店的三个核心模块。

## 📁 项目结构

\\\
hioshop/
├── miniprogram/    # 微信小程序端
├── admin/          # 后台管理系统（子模块）
└── server/         # 后端 API 服务（子模块）
\\\

## 🚀 克隆项目

### 克隆主仓库及所有子模块
\\\ash
git clone --recursive https://github.com/beisi-tech/hioshop-miniprogram.git
\\\

### 或者分步克隆
\\\ash
git clone https://github.com/beisi-tech/hioshop-miniprogram.git
cd hioshop-miniprogram
git submodule update --init --recursive
\\\

## 🔄 更新子模块

\\\ash
# 更新所有子模块到最新版本
git submodule update --remote

# 更新特定子模块
cd admin
git pull origin master
\\\

## 📖 原始仓库

- 小程序端: https://github.com/beisi-tech/hioshop-miniprogram
- 后台管理: https://github.com/beisi-tech/hioshop-admin
- 服务端: https://github.com/beisi-tech/hioshop-server

## 📚 各模块说明

### 小程序端（miniprogram）
微信小程序商城前端，详见 miniprogram/README.md

### 后台管理（admin）
基于 Electron/Vue.js 的管理后台

### 服务端（server）
基于 Node.js + ThinkJS + MySQL 的后端 API
