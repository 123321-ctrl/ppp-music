### 前言


[Github地址](https://github.com/123321-ctrl/ppp-music)

### 项目介绍

项目参考于网易云音乐PC版，基本实现官方音乐播放、MV播放所有功能

项目目前共四个分支：

### 技术栈

vue + vuex + vue-router + axios +element-ui +vue-lazyload

### 后端API

本项目后端所有数据来自开源项目NeteaseCloudMusicApi，下面附有后端开源项目地址、文档

[后端API仓库地址](https://github.com/Binaryify/NeteaseCloudMusicApi)     

[API文档](https://neteasecloudmusicapi.vercel.app/#/)

### 运行项目

1. 运行后端仓库

    1.1. git clone 后端仓库地址

    1.2. cnpm install

    1.3. node app

2. 运行本仓库代码

    2.1. git clone 本仓库地址

    2.2. cnpm install

    2.3. npm run serve


### 项目效果预览

可看pic分支下的“music图片截图”

### 还待完善
- [] 对历史播放数据进行持久化处理，避免每次都要重新获取。
- [] 重新设计表格
- [] 节省性能开销