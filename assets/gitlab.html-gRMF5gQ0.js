import{_ as i,c as s,o as a,e}from"./app-DdOAIDEh.js";const t={},l=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><ul><li>是一个代码仓库，一般使用CE版本，企业用EE版本</li><li>也可以用于项目的快速集成与部署</li></ul><h2 id="下载与更新" tabindex="-1"><a class="header-anchor" href="#下载与更新"><span><a href="https://packages.gitlab.com/gitlab/gitlab-ce" target="_blank" rel="noopener noreferrer">下载与更新</a></span></a></h2><ul><li>配置仓库</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>假如不配置仓库，可自行下载之后再安装</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 下载安装包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --no-check-certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-15.11.10-ce.0.el7.x86_64.rpm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># yum安装升级到13.12.15</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab-ce-15.11.10-ce.0.el7.x86_64.rpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>目前最新版本应该是 <code>17.2</code></li><li>更新升级不能直接跨大版本号，先将当前版本的小版本号到最高，才可升级到下一个大版本</li><li>按照<a href="https://blog.51cto.com/u_16213647/10793990" target="_blank" rel="noopener noreferrer">版本升级路线</a>一个版本一个版本依次install即可（install时会自动备份）</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab-ce-15.11.10-ce.0.el7</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>具体的包名可以在链接网站中进行查询， 其中<code>el/7</code>( el/7指的是GitLab的版本和安装包适用于Red Hat Enterprise Linux (RHEL) 7.x和CentOS 7.x)</li><li>为了更安全，可以手动先备份</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 停止服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gitlab-rake</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab:backup:create</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #备份 /var/opt/gitlab/backups/ 目录下会生成备份文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab-rake</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab:backup:restore</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> BACKUP=133344444_2024_08_05_12.11</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 假如要还原，备份版本号是备份文件名称中的那一串数字</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="配置主机端口" tabindex="-1"><a class="header-anchor" href="#配置主机端口"><span>配置主机端口</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/gitlab/gitlab.rb</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 修改external_url</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> reconfigure</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gitlab-ctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> restart</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 初始密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/gitlab/initial_root_password</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitlab-ci" tabindex="-1"><a class="header-anchor" href="#gitlab-ci"><span>GitLab-ci</span></a></h2><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#.gitlab-ci.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配合<code>gitlab-runner</code>, 用shell的方式</p>`,17),n=[l];function h(r,d){return a(),s("div",null,n)}const p=i(t,[["render",h],["__file","gitlab.html.vue"]]),c=JSON.parse('{"path":"/soft-engineering/tools/gitlab.html","title":"GitLab","lang":"zh-CN","frontmatter":{"title":"GitLab","footer":"","description":"介绍 是一个代码仓库，一般使用CE版本，企业用EE版本 也可以用于项目的快速集成与部署 下载与更新 配置仓库 假如不配置仓库，可自行下载之后再安装 目前最新版本应该是 17.2 更新升级不能直接跨大版本号，先将当前版本的小版本号到最高，才可升级到下一个大版本 按照版本升级路线一个版本一个版本依次install即可（install时会自动备份） 具体的包...","head":[["meta",{"property":"og:url","content":"https://lipengjgs.github.io/soft-engineering/tools/gitlab.html"}],["meta",{"property":"og:site_name","content":"SE Docs"}],["meta",{"property":"og:title","content":"GitLab"}],["meta",{"property":"og:description","content":"介绍 是一个代码仓库，一般使用CE版本，企业用EE版本 也可以用于项目的快速集成与部署 下载与更新 配置仓库 假如不配置仓库，可自行下载之后再安装 目前最新版本应该是 17.2 更新升级不能直接跨大版本号，先将当前版本的小版本号到最高，才可升级到下一个大版本 按照版本升级路线一个版本一个版本依次install即可（install时会自动备份） 具体的包..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T14:37:41.000Z"}],["meta",{"property":"article:author","content":"lipengjgs"}],["meta",{"property":"article:modified_time","content":"2024-08-05T14:37:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GitLab\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-05T14:37:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lipengjgs\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"下载与更新","slug":"下载与更新","link":"#下载与更新","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"配置主机端口","slug":"配置主机端口","link":"#配置主机端口","children":[]}]},{"level":2,"title":"GitLab-ci","slug":"gitlab-ci","link":"#gitlab-ci","children":[]}],"git":{"createdTime":1722868661000,"updatedTime":1722868661000,"contributors":[{"name":"jgs","email":"12345@qq.com","commits":1}]},"readingTime":{"minutes":1.15,"words":346},"filePathRelative":"soft-engineering/tools/gitlab.md","localizedDate":"2024年8月5日","autoDesc":true,"excerpt":"<h2>介绍</h2>\\n<ul>\\n<li>是一个代码仓库，一般使用CE版本，企业用EE版本</li>\\n<li>也可以用于项目的快速集成与部署</li>\\n</ul>\\n<h2><a class=\\"header-anchor\\" href=\\"#下载与更新\\"><span></span></a><a href=\\"https://packages.gitlab.com/gitlab/gitlab-ce\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">下载与更新</a></h2>\\n<ul>\\n<li>配置仓库</li>\\n</ul>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">curl</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> -s</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\"> |</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> sudo</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> bash</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,c as data};