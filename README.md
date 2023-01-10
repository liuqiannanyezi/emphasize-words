d# emphasize

# Installation
```js
$ npm install emphasize-words
```

# Usage

Web components 有两种引入方式（vue 中）：

1.在 vue 的主渲染文件 index.html 使用 script 标签将刚刚创建的 Web components 的 js 文件引入：
```js
<script src="./emphasize-words" defer></script>
```
2.在 vue 的入口文件 main.js 或某个独立 vue 组件中使用 ES module 的形式引入：
```js
import './emphasize-words';
```
3.在vue中使用
```html
<template>
    <div>
        <emphasize-words :text="text" :keyWords="keyWords" markColor="red"></emphasize-words>
    </div>
</template>
```
```js
<script>
export default {
    data() {
        return {
            text: '文案本意是指放书的桌子，后来指在桌子上写字的人。现在指的是公司或企业中从事文字工作的职位，就是以文字来表现已经制定的创意策略。文案是一个与广告创意先后相继呈现的表现过程、发展过程与深化过程， 多存在于广告公司，企业宣传与新闻策划工作等。',
            keyWords: ['文案', '新闻策划', '广告'],
        }
    },
}
</script>
```
