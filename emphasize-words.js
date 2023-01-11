// emphasize-words.js

(function() {
    let target_template = document.createElement("template");
    target_template.setAttribute("id", "emphasizeWordsTemplate");
    
    //引号内填写的 HTML 代码
    target_template.innerHTML = `
    <style>

    </style>


    <span id="words"></span>
    `; 
    document.body.append(target_template);
    
    class EmphasizeWords extends HTMLElement {
        constructor() {
            super();
        }
        
        init(){
            let shadow = this.attachShadow( { mode: 'open' } );
            let templateElem = document.getElementById('emphasizeWordsTemplate');
            let content = templateElem.content.cloneNode(true);
            // 将父组件传来的文本变成带样式的的 html
            console.log(this, this.getAttribute('text'));
            // 文本
            let text = this.getAttribute('text'); 
            console.log(text);
            // 关键词
            let keyWords = String(this.getAttribute('keyWords')).split(',');
            // 标记颜色
            let color = this.getAttribute('markColor');
            // 将文本中关键词替换
            for (let i = 0; i < keyWords.length; i++) {
            let r = new RegExp(keyWords[i], "ig");
                if(r.test(text)) {
                    text = text?.replace(r, `<font color="${color}">${keyWords[i]}</font>`)
                }
            }
            content.getElementById('words').innerHTML = text
            shadow.appendChild(content);
        }
        
        connectedCallback() {
            console.log('被加载')
            this.init();
        }
        
        disconnectedCallback() {
            console.log('被删除')
        }

        adoptedCallback() {
            console.log('被移动到新的文档')
        }
        
        attributeChangedCallback() {
            console.log('增加、删除、修改自身属性')
        }
        
    }
    window.customElements.define('emphasize-words', EmphasizeWords)
})()