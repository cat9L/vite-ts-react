# Electron Forge Template: Vite + TypeScript + React

这是一个用于 Electron Forge 的模板，集成了 Vite、TypeScript 和 React，帮助你快速启动一个现代化的 Electron 应用程序开发。

## 特性

- 🚀 使用 [Vite](https://vitejs.dev/) 实现快速的开发体验
- 🔒 TypeScript 支持，提供类型安全
- ⚛️ React 框架集成
- 📦 Electron Forge 打包和分发工具
- 🔥 热重载支持
- 🎨 现代化的项目结构

## 使用方法

### 创建新项目

使用 Electron Forge CLI 创建一个新项目：

```bash
npm init electron-app@latest my-app -- --template=@electron-forge/template-vite-ts-react
```

或者

```bash
npx create-electron-app my-app --template=@electron-forge/template-vite-ts-react
```

### 项目结构

```
my-app/
├── main/                  # 主进程代码
│   ├── main.ts            # 主进程入口点
│   ├── preload.ts         # 预加载脚本
│   └── renderer.ts        # 渲染器进程代码
├── renderer/              # 渲染器进程代码 (React)
│   ├── public/            # 静态资源
│   └── src/               # React 源代码
│       ├── assets/        # 资源文件
│       ├── App.tsx        # React 主组件
│       ├── main.tsx       # React 入口点
│       └── ...
├── forge.config.ts        # Electron Forge 配置
├── vite.main.config.ts    # 主进程的 Vite 配置
├── vite.preload.config.ts # 预加载脚本的 Vite 配置
├── vite.renderer.config.ts # 渲染器进程的 Vite 配置
└── ...
```

### 可用命令

- `npm start` - 启动应用程序的开发版本
- `npm run package` - 打包应用程序
- `npm run make` - 构建应用程序的分发版本
- `npm run publish` - 发布应用程序

## 自定义

你可以根据需要修改以下文件：

- `forge.config.ts` - Electron Forge 配置
- `vite.*.config.ts` - Vite 配置
- `main/main.ts` - 主进程代码
- `renderer/src/App.tsx` - React 应用程序入口点

## 许可证

MIT