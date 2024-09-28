import{_ as e,c as t,o as n,e as s}from"./app-DLxUEbjT.js";const a={},r=s(`<h1 id="疑难问题" tabindex="-1"><a class="header-anchor" href="#疑难问题"><span>疑难问题</span></a></h1><h2 id="_1-在div进行css3动画时-translate-scale-容易发生字体变模糊的情况" tabindex="-1"><a class="header-anchor" href="#_1-在div进行css3动画时-translate-scale-容易发生字体变模糊的情况"><span>1. 在div进行css3动画时（translate,scale）容易发生字体变模糊的情况</span></a></h2><details class="hint-container details"><summary>解答</summary><pre><code>原因：
transform变换会在浏览器上单独创建一个绘画层并重新进行渲染，
由于图层渲染的时候也处理了周围的文字，
如果高度为奇数的文字可能会存在半个像素的计算量，
浏览器对这半个像素会进行优化渲染，所以边缘会出现模糊的情况。

情形：
//  奇数像素可能导致浏览器渲染失真
1. 字体size为奇数导致，如font-size: 13px;
处理方案：改为偶数

//  transform移动后可能导致浏览器渲染失真
2. transform导致（使用transform的盒子为奇数）
处理方案：在模糊字体一级级往外找，在使用了transform的位置，把使用transform的盒子宽高改为奇数

3. 告诉浏览器如何渲染：
// 浏览器强调渲染速度和几何精度的易读性。这会启用字距调整和可选的连字。
text-rendering: optimizeLegibility;
</code></pre></details><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2"><span>2.</span></a></h2>`,4),i=[r];function o(c,l){return n(),t("div",null,i)}const m=e(a,[["render",o],["__file","Questions.html.vue"]]),p=JSON.parse('{"path":"/soft-engineering/fe/fe-basic/structure/css/Questions.html","title":"疑难问题","lang":"zh-CN","frontmatter":{"description":"疑难问题 1. 在div进行css3动画时（translate,scale）容易发生字体变模糊的情况 解答 2.","head":[["meta",{"property":"og:url","content":"https://lipengjgs.github.io/soft-engineering/fe/fe-basic/structure/css/Questions.html"}],["meta",{"property":"og:site_name","content":"SE Docs"}],["meta",{"property":"og:title","content":"疑难问题"}],["meta",{"property":"og:description","content":"疑难问题 1. 在div进行css3动画时（translate,scale）容易发生字体变模糊的情况 解答 2."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-22T13:04:31.000Z"}],["meta",{"property":"article:author","content":"lipengjgs"}],["meta",{"property":"article:modified_time","content":"2024-09-22T13:04:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"疑难问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-22T13:04:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lipengjgs\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"1. 在div进行css3动画时（translate,scale）容易发生字体变模糊的情况","slug":"_1-在div进行css3动画时-translate-scale-容易发生字体变模糊的情况","link":"#_1-在div进行css3动画时-translate-scale-容易发生字体变模糊的情况","children":[]},{"level":2,"title":"2.","slug":"_2","link":"#_2","children":[]}],"git":{"createdTime":1719488606000,"updatedTime":1727010271000,"contributors":[{"name":"lipengjgs","email":"12345@qq.com","commits":1}]},"readingTime":{"minutes":0.92,"words":277},"filePathRelative":"soft-engineering/fe/fe-basic/structure/css/Questions.md","localizedDate":"2024年6月27日","autoDesc":true,"excerpt":"\\n<h2>1. 在div进行css3动画时（translate,scale）容易发生字体变模糊的情况</h2>\\n<details class=\\"hint-container details\\"><summary>解答</summary>\\n<pre><code>原因：\\ntransform变换会在浏览器上单独创建一个绘画层并重新进行渲染，\\n由于图层渲染的时候也处理了周围的文字，\\n如果高度为奇数的文字可能会存在半个像素的计算量，\\n浏览器对这半个像素会进行优化渲染，所以边缘会出现模糊的情况。\\n\\n情形：\\n//  奇数像素可能导致浏览器渲染失真\\n1. 字体size为奇数导致，如font-size: 13px;\\n处理方案：改为偶数\\n\\n//  transform移动后可能导致浏览器渲染失真\\n2. transform导致（使用transform的盒子为奇数）\\n处理方案：在模糊字体一级级往外找，在使用了transform的位置，把使用transform的盒子宽高改为奇数\\n\\n3. 告诉浏览器如何渲染：\\n// 浏览器强调渲染速度和几何精度的易读性。这会启用字距调整和可选的连字。\\ntext-rendering: optimizeLegibility;\\n</code></pre>\\n</details>"}');export{m as comp,p as data};
