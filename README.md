# 马场项目总览

项目使用的主技术栈是 vue + typeScript, 上手项目者需要先学习一下 Vue 的的知识点， typeScript 作为未来热门的一门语言，也需要对其相当了解。

# 插件说明

## commitlint

常见的分类有下面几种：

- build: 影响构建系统或外部依赖关系的更改（示例范围：gulp、broccoli、NPM）。
- chore: 其他不修改 src 或 test 文件。
- ci: 更改持续集成文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）。
- docs: 只是更改文档。
- feat: 类型为 feat 的提交表示在代码库中新增了一个功能（这和语义化版本中的 MINOR 相对应）。
- fix: 类型为 fix 的 提交表示在代码库中修复了一个 bug （这和语义化版本中的 PATCH 相对应）。
- improvement: 用于对当前实现进行改进而没有添加新功能或修复错误的提交。
- perf: 改进性能的代码更改。
- refactor: 代码重构，既不修复错误也不添加功能。
- revert: commit 回退。
- style: 不影响代码含义的变化（空白、格式化、缺少分号等）。
- test: 测试相关的开发。
