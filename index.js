const path = require('path');
const fs = require('fs');

/**
 * @type {import('@electron-forge/shared-types').ForgeTemplate}
 */
module.exports = {
  // 指定支持的Electron Forge版本
  requiredForgeVersion: '^7.0.0',
  
  // 项目依赖
  dependencies: [
    'electron-squirrel-startup',
    'react@^19.1.0',
    'react-dom@^19.1.0'
  ],
  
  // 开发依赖
  devDependencies: [
    '@electron-forge/cli@^7.8.2',
    '@electron-forge/maker-deb@^7.8.2',
    '@electron-forge/maker-rpm@^7.8.2',
    '@electron-forge/maker-squirrel@^7.8.2',
    '@electron-forge/maker-zip@^7.8.2',
    '@electron-forge/plugin-auto-unpack-natives@^7.8.2',
    '@electron-forge/plugin-fuses@^7.8.2',
    '@electron-forge/plugin-vite@^7.8.2',
    '@electron/fuses@^1.8.0',
    '@types/electron-squirrel-startup@^1.0.2',
    '@types/react@^19.1.8',
    '@types/react-dom@^19.1.6',
    '@typescript-eslint/eslint-plugin@^5.62.0',
    '@typescript-eslint/parser@^5.62.0',
    '@vitejs/plugin-react@^4.6.0',
    'electron@37.2.4',
    'eslint@^8.57.1',
    'eslint-plugin-import@^2.32.0',
    'eslint-plugin-react-hooks@^5.2.0',
    'eslint-plugin-react-refresh@^0.4.20',
    'typescript@~4.5.4',
    'vite@^5.4.19'
  ],
  
  // 初始化模板
  async initializeTemplate(directory, { name, productName = name, description = '', author = '', email = '' }) {
    const templateDir = path.resolve(__dirname, 'tmpl');
    const files = fs.readdirSync(templateDir, { recursive: true });
    
    // 复制所有模板文件到目标目录
    for (const file of files) {
      const srcPath = path.join(templateDir, file);
      const destPath = path.join(directory, file);
      
      // 确保目标目录存在
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // 如果是目录，跳过（因为我们会在复制文件时创建必要的目录）
      if (fs.statSync(srcPath).isDirectory()) continue;
      
      // 读取文件内容
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // 替换模板变量
      if (path.basename(file) === 'package.json') {
        content = content
          .replace(/{{name}}/g, name)
          .replace(/{{productName}}/g, productName)
          .replace(/{{description}}/g, description)
          .replace(/{{author}}/g, author)
          .replace(/{{email}}/g, email);
      }
      
      // 写入文件
      fs.writeFileSync(destPath, content);
    }
    
    console.log('Vite + TypeScript + React template has been initialized successfully!');
  }
};