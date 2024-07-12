import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,e as r,d as l,b as n,f as e,o,r as p}from"./app-BrEnG_Gh.js";const h={},d=n("p",null,[n("a",{href:"https://whatwg.org/",target:"_blank",rel:"noopener noreferrer"},"Living Standards")],-1),u=e(`<pre><code>subgraph one
a1--&gt;a2
end
subgraph two
b1--&gt;b2
end
subgraph three
c1--&gt;c2
end
one --&gt; two
three --&gt; two
two --&gt; c2
</code></pre><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/mermaid.html)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### Tex</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$$</span></span>
<span class="line"><span>\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)</span></span>
<span class="line"><span>= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}</span></span>
<span class="line"><span>$$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/tex.html)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### Include files</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@include-push(D:/github-blog/se-docs/src/soft-engineering/fe/fe-basic/html)</span></span>
<span class="line"><span>&lt;!-- ## Markdown Introduction</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If you are a new learner and don’t know how to write Markdown, please read [Markdown Intro](https://vuepress-theme-hope.github.io/v2/cookbook/markdown/) and [Markdown Demo](https://vuepress-theme-hope.github.io/v2/cookbook/markdown/demo.html).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Markdown Config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VuePress introduce configuration for each markdown page using Frontmatter.</span></span>
<span class="line"><span>@include-pop()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/include.html)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### Code Demo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::: normal-demo A normal demo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`html</span></span>
<span class="line"><span>&lt;h1&gt;VuePress Theme Hope&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;p&gt;Is &lt;span id=&quot;very&quot;&gt;very&lt;/span&gt; powerful!&lt;/p&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;#very&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  alert</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Very powerful!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/demo.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize"><span>Stylize</span></a></h4><p>Donate Mr.Hope a cup of coffee. <em>Recommanded</em></p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="playground" tabindex="-1"><a class="header-anchor" href="#playground"><span>Playground</span></a></h4>`,10),m=e(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="vue-playground" tabindex="-1"><a class="header-anchor" href="#vue-playground"><span>Vue Playground</span></a></h4><p>::: vue-playground Vue Playground</p><template><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ref</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> msg</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Hello World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;{{ msg }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">msg</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/vue-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation"><span>Presentation</span></a></h4><p>@slidestart</p><h2 id="slide-1" tabindex="-1"><a class="header-anchor" href="#slide-1"><span>Slide 1</span></a></h2><p>A paragraph with some text and a <a href="https://mrhope.site" target="_blank" rel="noopener noreferrer">link</a></p><hr><h2 id="slide-2" tabindex="-1"><a class="header-anchor" href="#slide-2"><span>Slide 2</span></a></h2><ul><li>Item 1</li><li>Item 2</li></ul><hr><h2 id="slide-3-1" tabindex="-1"><a class="header-anchor" href="#slide-3-1"><span>Slide 3.1</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>--</p><h2 id="slide-3-2" tabindex="-1"><a class="header-anchor" href="#slide-3-2"><span>Slide 3.2</span></a></h2><p>$$ J(\\theta_0,\\theta_1) = \\sum_{i=0} $$</p><p>@slideend</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><p>[md-enhance]: https://vuepress-theme-hope.github.io/v2/md-enhance/ --&gt;</p></template>`,4);function c(k,g){const s=p("Playground");return o(),a("div",null,[d,t(` ## Markdown Introduction

If you are a new learner and don’t know how to write Markdown, please read [Markdown Intro](https://vuepress-theme-hope.github.io/v2/cookbook/markdown/) and [Markdown Demo](https://vuepress-theme-hope.github.io/v2/cookbook/markdown/demo.html).

## Markdown Config

VuePress introduce configuration for each markdown page using Frontmatter.

::: info

Frontmatter is a important concept in VuePress. If you don’t know it, you need to read [Frontmatter Introduction](https://vuepress-theme-hope.github.io/v2/cookbook/vuepress/page.html#front-matter).

:::

## Markdown Extension

The Markdown content in VuePress will be parsed by [markdown-it](https://github.com/markdown-it/markdown-it), which supports [syntax extensions](https://github.com/markdown-it/markdown-it#syntax-extensions) via markdown-it plugins.

### VuePress Enhancement

To enrich document writing, VuePress has extended Markdown syntax.

For these extensions, please read [Markdown extensions in VuePress](https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html).

### Theme Enhancement

By using [\`vuepress-plugin-md-enhance\`][md-enhance], the theme extends more Markdown syntax and provides richer writing functions.

#### Custom Container

::: v-pre

Safely use {{ variable }} in Markdown.

:::

::: info Custom Title

A custom information container with \`code\`, [link](#custom-container).

\`\`\`js
const a = 1;
\`\`\`

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::

:::: details Code

\`\`\`md
::: v-pre

Safely use {{ variable }} in Markdown.

:::

::: info Custom Title

A custom information container

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::
\`\`\`

::::

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html)

#### Tabs

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html)

#### Code Tabs

::: code-tabs#shell

@tab pnpm

\`\`\`bash
pnpm add -D vuepress-theme-hope
\`\`\`

@tab yarn

\`\`\`bash
yarn add -D vuepress-theme-hope
\`\`\`

@tab:active npm

\`\`\`bash
npm i -D vuepress-theme-hope
\`\`\`

:::

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/code-tabs.html)

#### Superscript and Subscript

19^th^ H~2~O

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html)

#### Align

::: center

I am center

:::

::: right

I am right align

:::

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html)

#### Attrs

A **word**{#word} having id.

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html)

#### Footnote

This text has footnote[^first].

[^first]: This is footnote content

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html)

#### Mark

You can mark ==important words== .

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html)

#### Tasklist

- [x] Plan A
- [ ] Plan B

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html)

#### Image Enhancement

Support setting color scheme and size

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/image.html)

#### Chart

::: chart A Scatter Chart

\`\`\`json
{
  "type": "scatter",
  "data": {
    "datasets": [
      {
        "label": "Scatter Dataset",
        "data": [
          { "x": -10, "y": 0 },
          { "x": 0, "y": 10 },
          { "x": 10, "y": 5 },
          { "x": 0.5, "y": 5.5 }
        ],
        "backgroundColor": "rgb(255, 99, 132)"
      }
    ]
  },
  "options": {
    "scales": {
      "x": {
        "type": "linear",
        "position": "bottom"
      }
    }
  }
}
\`\`\`

:::

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html)

#### Echarts

::: echarts A line chart

\`\`\`json
{
  "xAxis": {
    "type": "category",
    "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  "yAxis": {
    "type": "value"
  },
  "series": [
    {
      "data": [150, 230, 224, 218, 135, 147, 260],
      "type": "line"
    }
  ]
}
\`\`\`

:::

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html)

#### Flowchart

\`\`\`flow
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
\`\`\`

- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html)

#### Mermaid

\`\`\`mermaid
flowchart TB
    c1`),r("a2 "),u,l(s,{title:"TS%20demo",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),m])}const w=i(h,[["render",c],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/soft-engineering/fe/fe-basic/html/","title":"HTML","lang":"zh-CN","frontmatter":{"title":"HTML","category":["Fe Basic"],"tag":["html"],"description":"Living Standards a2 ::: View Detail Stylize Donate Mr.Hope a cup of coffee. Recommanded View Detail Playground View Detail Vue Playground ::: vue-playground Vue Playground","head":[["meta",{"property":"og:url","content":"https://lipengjgs.github.io/soft-engineering/fe/fe-basic/html/"}],["meta",{"property":"og:site_name","content":"SE Docs"}],["meta",{"property":"og:title","content":"HTML"}],["meta",{"property":"og:description","content":"Living Standards a2 ::: View Detail Stylize Donate Mr.Hope a cup of coffee. Recommanded View Detail Playground View Detail Vue Playground ::: vue-playground Vue Playground"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:43:26.000Z"}],["meta",{"property":"article:author","content":"lipengjgs"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:43:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T11:43:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lipengjgs\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{"createdTime":1719488606000,"updatedTime":1719488606000,"contributors":[{"name":"jgs","email":"12345@qq.com","commits":1}]},"readingTime":{"minutes":2.63,"words":789},"filePathRelative":"soft-engineering/fe/fe-basic/html/README.md","localizedDate":"2024年6月27日","autoDesc":true,"excerpt":"<p><a href=\\"https://whatwg.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Living Standards</a></p>\\n<!-- ## Markdown Introduction\\n\\nIf you are a new learner and don’t know how to write Markdown, please read [Markdown Intro](https://vuepress-theme-hope.github.io/v2/cookbook/markdown/) and [Markdown Demo](https://vuepress-theme-hope.github.io/v2/cookbook/markdown/demo.html).\\n\\n## Markdown Config\\n\\nVuePress introduce configuration for each markdown page using Frontmatter.\\n\\n::: info\\n\\nFrontmatter is a important concept in VuePress. If you don’t know it, you need to read [Frontmatter Introduction](https://vuepress-theme-hope.github.io/v2/cookbook/vuepress/page.html#front-matter).\\n\\n:::\\n\\n## Markdown Extension\\n\\nThe Markdown content in VuePress will be parsed by [markdown-it](https://github.com/markdown-it/markdown-it), which supports [syntax extensions](https://github.com/markdown-it/markdown-it#syntax-extensions) via markdown-it plugins.\\n\\n### VuePress Enhancement\\n\\nTo enrich document writing, VuePress has extended Markdown syntax.\\n\\nFor these extensions, please read [Markdown extensions in VuePress](https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html).\\n\\n### Theme Enhancement\\n\\nBy using [`vuepress-plugin-md-enhance`][md-enhance], the theme extends more Markdown syntax and provides richer writing functions.\\n\\n#### Custom Container\\n\\n::: v-pre\\n\\nSafely use {{ variable }} in Markdown.\\n\\n:::\\n\\n::: info Custom Title\\n\\nA custom information container with `code`, [link](#custom-container).\\n\\n```js\\nconst a = 1;\\n```\\n\\n:::\\n\\n::: tip Custom Title\\n\\nA custom tip container\\n\\n:::\\n\\n::: warning Custom Title\\n\\nA custom warning container\\n\\n:::\\n\\n::: danger Custom Title\\n\\nA custom danger container\\n\\n:::\\n\\n::: details Custom Title\\n\\nA custom details container\\n\\n:::\\n\\n:::: details Code\\n\\n```md\\n::: v-pre\\n\\nSafely use {{ variable }} in Markdown.\\n\\n:::\\n\\n::: info Custom Title\\n\\nA custom information container\\n\\n:::\\n\\n::: tip Custom Title\\n\\nA custom tip container\\n\\n:::\\n\\n::: warning Custom Title\\n\\nA custom warning container\\n\\n:::\\n\\n::: danger Custom Title\\n\\nA custom danger container\\n\\n:::\\n\\n::: details Custom Title\\n\\nA custom details container\\n\\n:::\\n```\\n\\n::::\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html)\\n\\n#### Tabs\\n\\n::: tabs#fruit\\n\\n@tab apple\\n\\nApple\\n\\n@tab banana\\n\\nBanana\\n\\n@tab orange\\n\\nOrange\\n\\n:::\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html)\\n\\n#### Code Tabs\\n\\n::: code-tabs#shell\\n\\n@tab pnpm\\n\\n```bash\\npnpm add -D vuepress-theme-hope\\n```\\n\\n@tab yarn\\n\\n```bash\\nyarn add -D vuepress-theme-hope\\n```\\n\\n@tab:active npm\\n\\n```bash\\nnpm i -D vuepress-theme-hope\\n```\\n\\n:::\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/code-tabs.html)\\n\\n#### Superscript and Subscript\\n\\n19^th^ H~2~O\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html)\\n\\n#### Align\\n\\n::: center\\n\\nI am center\\n\\n:::\\n\\n::: right\\n\\nI am right align\\n\\n:::\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html)\\n\\n#### Attrs\\n\\nA **word**{#word} having id.\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html)\\n\\n#### Footnote\\n\\nThis text has footnote[^first].\\n\\n[^first]: This is footnote content\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html)\\n\\n#### Mark\\n\\nYou can mark ==important words== .\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html)\\n\\n#### Tasklist\\n\\n- [x] Plan A\\n- [ ] Plan B\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html)\\n\\n#### Image Enhancement\\n\\nSupport setting color scheme and size\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/image.html)\\n\\n#### Chart\\n\\n::: chart A Scatter Chart\\n\\n```json\\n{\\n  \\"type\\": \\"scatter\\",\\n  \\"data\\": {\\n    \\"datasets\\": [\\n      {\\n        \\"label\\": \\"Scatter Dataset\\",\\n        \\"data\\": [\\n          { \\"x\\": -10, \\"y\\": 0 },\\n          { \\"x\\": 0, \\"y\\": 10 },\\n          { \\"x\\": 10, \\"y\\": 5 },\\n          { \\"x\\": 0.5, \\"y\\": 5.5 }\\n        ],\\n        \\"backgroundColor\\": \\"rgb(255, 99, 132)\\"\\n      }\\n    ]\\n  },\\n  \\"options\\": {\\n    \\"scales\\": {\\n      \\"x\\": {\\n        \\"type\\": \\"linear\\",\\n        \\"position\\": \\"bottom\\"\\n      }\\n    }\\n  }\\n}\\n```\\n\\n:::\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html)\\n\\n#### Echarts\\n\\n::: echarts A line chart\\n\\n```json\\n{\\n  \\"xAxis\\": {\\n    \\"type\\": \\"category\\",\\n    \\"data\\": [\\"Mon\\", \\"Tue\\", \\"Wed\\", \\"Thu\\", \\"Fri\\", \\"Sat\\", \\"Sun\\"]\\n  },\\n  \\"yAxis\\": {\\n    \\"type\\": \\"value\\"\\n  },\\n  \\"series\\": [\\n    {\\n      \\"data\\": [150, 230, 224, 218, 135, 147, 260],\\n      \\"type\\": \\"line\\"\\n    }\\n  ]\\n}\\n```\\n\\n:::\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html)\\n\\n#### Flowchart\\n\\n```flow\\ncond=>condition: Process?\\nprocess=>operation: Process\\ne=>end: End\\n\\ncond(yes)->process->e\\ncond(no)->e\\n```\\n\\n- [View Detail](https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html)\\n\\n#### Mermaid\\n\\n```mermaid\\nflowchart TB\\n    c1-->"}');export{w as comp,y as data};
