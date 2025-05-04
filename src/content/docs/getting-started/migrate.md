---
title: 迁移到 0.5
---

本文提供给具有较多修改的 ShokaX 0.4 站点用户

## 核心功能修改

在 0.5 版本，我们彻底去除了 Pjax 功能，这意味着：
- `pjax:*`事件将不再有效，请使用在 DOM 中对应的原生事件代替
  - `pjax:success`请使用`DOMContentLoaded`代替
  - 其他事件建议直接删除或合并入`DOMContentLoaded`内
- ShokaX 将不再提供类 SPA 浏览体验
  - 对于部分需要跨页生效的代码，请考虑持久化全局状态
  - 音乐播放器已使用 Vue 3 + Pinia 重构，原生支持 MPA 应用全局状态持久化，无需担心此部分
  - 与之对应的，我们删除了 Pace.js，将加载条显示任务转交给了浏览器自身
  - 在页面切换时会显示加载动画，而不是像原来一样，只是在`.md`内显示加载动画
- 其他建立在 Pjax 基础之上的 Helper API 也被连带移除

于此同时，我们删除了在 0.4.x 就被废弃的部分 API 及功能：
- AssetURL 式 Vendor 系统。请使用 SMB 系统 + 动态 import 解决
- 原型注入式 DOM Helper。请使用 0.4.x 中引入的非注入式 API
- H5 储存 API。请直接使用`globalThis.localStorage`
- QuickLink、Unlazy。上述模块效果微弱，感知不明显
- FancyBox。FancyBox 现有依赖版本长期未更新，后继版本对开源软件高度不友好，因而我们切换到了 HanaImgViewer 来作为图片查看器。
如果你原先依赖了基于 FancyBox 的高级特性，这些特性在 0.5.x 及后续版本中将不再可用。
- 视频播放器。在 0.5.x 中，传统播放器被 Nyx-Player 替代。Nyx-Player 并不包含对于视频播放的支持，我们建议原先使用视频播放器的用户使用`<video>`标签或其他插件代替

## 次要功能修改

我们在 ShokaX 0.5 中对次要功能进行了调整：
- `LPO`（长文章优化）不再可用。根据我们实验，ShokaX 0.5 已经不再需要 LPO 优化长页面性能，而 LPO 本身会导致相当多难以修复的问题，因此我们在 0.5 中正式删除了 LPO。
- `disableThemeComment`被删除。禁用 Waline 和 Twikoo 即可达到相同效果
- `usingRelative`被删除。自 0.5 版本起，不再支持通过新浪加载的图片，所有图片都被视作使用了`usingRelative`方式解析
- `polyfill`被删除。Polyfill 曾导致了严重的安全问题，并且根据 Caniuse 数据，ShokaX 所使用 API 及方法在支持 ESModule 的浏览器上基本无需 Polyfill
- `cloudflarePatch`被移入`modules`配置内
- `coverConfig`移入`homeConfig`内
- 新增`modules.debug`，此选项启用时将自动关闭 esbuild 的 minify 功能
- 首页精选分类不再自动生成。需要在`homeConfig.cateCards`中手动配置 slug 及 cover

## 核心行为修改

- SMB 2.1 中不再将构建后文件输出到`shokaxTemp`目录下

