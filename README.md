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

### 安装和使用模板

正确的使用流程如下：

1. 先将模板仓库克隆到本地：

```bash
# 克隆仓库到本地
git clone https://github.com/cat9L/vite-ts-react.git vite-ts-react-template
```

2. 然后全局安装本地模板：

```bash
# 全局安装本地模板
npm install -g ./vite-ts-react-template
```

3. 使用已安装的模板创建项目：

```bash
# 使用全局安装的模板
npx electron-forge init --template=@electron-forge/template-vite-ts-react my-app-name
```

> **注意**：根据测试结果和 Electron Forge 文档，直接使用 GitHub 仓库链接作为模板源会失败，必须先将模板克隆到本地并全局安装。

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

## 使用示例

以下是一个完整的使用示例，展示如何从头开始安装模板并创建新项目：

```bash
# 1. 克隆模板仓库到本地（如果您已经有本地模板目录，可以跳过此步骤）
git clone https://github.com/cat9L/vite-ts-react.git vite-ts-react-template

# 2. 全局安装模板
cd vite-ts-react-template  # 进入模板目录
npm install -g .  # 全局安装当前目录的模板
cd ..             # 返回上层目录

# 3. 创建新的项目目录并初始化
mkdir test-app && cd test-app
npx electron-forge init --template=@electron-forge/template-vite-ts-react

# 4. 启动应用进行测试
npm start
```

执行上述命令后，您将看到一个包含以下文件结构的新项目：
- `main/` - 包含主进程代码
- `renderer/` - 包含渲染进程代码和 React 应用
- 各种配置文件如 `forge.config.ts`、`vite.*.config.ts` 等

启动应用后，您将看到一个运行中的 Electron 应用程序窗口，其中包含了 React 应用。

## 故障排除

### 模板识别问题

如果遇到模板无法识别的问题，请确保：

1. 已正确全局安装模板：
   ```bash
   npm install -g ./vite-ts-react-template
   ```

2. 安装后可以通过以下命令验证模板是否已正确安装：
   ```bash
   npm list -g | grep electron-forge-template
   ```

### 项目创建问题

如果在创建项目时遇到问题：

1. 确保您的 Electron Forge CLI 版本与模板兼容：
   ```bash
   npx electron-forge --version
   ```

2. 尝试使用完整的模板名称：
   ```bash
   npx electron-forge init --template=@electron-forge/template-vite-ts-react my-app-name
   ```

3. 确保按照正确的流程操作：
   ```bash
   # 1. 克隆仓库
   git clone https://github.com/cat9L/vite-ts-react.git vite-ts-react-template
   
   # 2. 全局安装
   npm install -g ./vite-ts-react-template
   
   # 3. 使用模板
   npx electron-forge init --template=@electron-forge/template-vite-ts-react my-app-name
   ```

### 应用启动问题

如果应用无法正常启动：

1. 确保所有依赖已正确安装：
   ```bash
   npm install
   ```

2. 检查控制台错误信息，解决相关依赖或配置问题。

## 许可证

MIT