import{_ as i,c as s,o as e,e as t}from"./app-BpaMhMwC.js";const a={},n=t(`<h2 id="安装homebrew" tabindex="-1"><a class="header-anchor" href="#安装homebrew"><span>安装HomeBrew</span></a></h2><ol><li>打开<code>终端</code></li><li><code>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;</code></li><li>按照步骤来，下载<code>command line for xcode</code>的时候可能会卡住，安心等待即可</li><li>安装完毕后<code>brew -v</code></li></ol><h2 id="brew安装nvm" tabindex="-1"><a class="header-anchor" href="#brew安装nvm"><span>Brew安装nvm</span></a></h2><ol><li><code>brew install nvm</code></li><li>进入 <code>vim ~/.zshrc</code></li><li>按照提示配置环境变量</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> NVM_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/.nvm&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # This loads nvm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # This loads nvm bash_completion</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> NVM_NODEJS_ORG_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">://</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">npmmirror</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">com</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">mirrors</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">node</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 配置国内镜像</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> NVM_IOJS_ORG_MIRROR</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">://</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">npmmirror</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">com</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">mirrors</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">iojs</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\` </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 配置国内镜像</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>source ~/.zshrc</code></li></ol><h2 id="brew安装switchhosts" tabindex="-1"><a class="header-anchor" href="#brew安装switchhosts"><span>Brew安装switchhosts</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> switchhosts</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --cask</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="卸载软件" tabindex="-1"><a class="header-anchor" href="#卸载软件"><span>卸载软件</span></a></h2><ol><li>从<code>Finder</code>访达 进入，点击左侧列表<code>application</code>，将其拖入废纸篓中清空即可</li><li>对于大软件，可以从<code>application</code>中对应的应用子文件夹中找到卸载文件进行卸载即可</li></ol>`,10),h=[n];function l(r,o){return e(),s("div",null,h)}const k=i(a,[["render",l],["__file","MacOS.html.vue"]]),c=JSON.parse('{"path":"/cs-basic/os/computeros/MacOS.html","title":"MacOS","lang":"zh-CN","frontmatter":{"title":"MacOS","footer":"","description":"安装HomeBrew 打开终端 /bin/zsh -c \\"$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)\\" 按照步骤来，下载command line for xcode的时候可能会卡住，安心等待即可 安装完毕后brew -v Brew安装nvm brew ...","head":[["meta",{"property":"og:url","content":"https://lipengjgs.github.io/cs-basic/os/computeros/MacOS.html"}],["meta",{"property":"og:site_name","content":"SE Docs"}],["meta",{"property":"og:title","content":"MacOS"}],["meta",{"property":"og:description","content":"安装HomeBrew 打开终端 /bin/zsh -c \\"$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)\\" 按照步骤来，下载command line for xcode的时候可能会卡住，安心等待即可 安装完毕后brew -v Brew安装nvm brew ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-07T13:14:06.000Z"}],["meta",{"property":"article:author","content":"lipengjgs"}],["meta",{"property":"article:modified_time","content":"2024-10-07T13:14:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MacOS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-07T13:14:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lipengjgs\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"安装HomeBrew","slug":"安装homebrew","link":"#安装homebrew","children":[]},{"level":2,"title":"Brew安装nvm","slug":"brew安装nvm","link":"#brew安装nvm","children":[]},{"level":2,"title":"Brew安装switchhosts","slug":"brew安装switchhosts","link":"#brew安装switchhosts","children":[]},{"level":2,"title":"卸载软件","slug":"卸载软件","link":"#卸载软件","children":[]}],"git":{"createdTime":1719488606000,"updatedTime":1728306846000,"contributors":[{"name":"jgs","email":"12345@qq.com","commits":2},{"name":"lipengjgs","email":"lipengjgs@163.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"cs-basic/os/computeros/MacOS.md","localizedDate":"2024年6月27日","autoDesc":true,"excerpt":"<h2>安装HomeBrew</h2>\\n<ol>\\n<li>打开<code>终端</code></li>\\n<li><code>/bin/zsh -c \\"$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)\\"</code></li>\\n<li>按照步骤来，下载<code>command line for xcode</code>的时候可能会卡住，安心等待即可</li>\\n<li>安装完毕后<code>brew -v</code></li>\\n</ol>\\n<h2>Brew安装nvm</h2>\\n<ol>\\n<li><code>brew install nvm</code></li>\\n<li>进入 <code>vim ~/.zshrc</code></li>\\n<li>按照提示配置环境变量</li>\\n</ol>"}');export{k as comp,c as data};