import{_ as s,c as a,d as i,e as n,o as e}from"./app-IMAMGG3y.js";const l={},t=n(`<h2 id="command命令" tabindex="-1"><a class="header-anchor" href="#command命令"><span>Command命令</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 查看系统信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">systeminfo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 查看文件目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dir</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">dir</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> HelloWorld.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [路径]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> d:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">copy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">xcopy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /I</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /E</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /Y</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [原路径] [目标路径]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批处理文件" tabindex="-1"><a class="header-anchor" href="#批处理文件"><span>批处理文件</span></a></h2><div class="language-bat line-numbers-mode" data-highlighter="shiki" data-ext="bat" data-title="bat" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">echo</span><span style="--shiki-light:#D73A49;--shiki-dark:#61AFEF;"> off</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">:: 变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">%time%</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> %a%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">E:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">::cd E:/a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">::start cmd /k &quot;echo 1 &amp;&amp; echo2&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> E:/b</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">start</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /k </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;echo 3 &amp;&amp; echo 4&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> E:/c</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">start</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /k </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;echo 5 &amp;&amp; echo 6&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="给文件夹设置权限" tabindex="-1"><a class="header-anchor" href="#给文件夹设置权限"><span>给文件夹设置权限</span></a></h2><p>右键 -&gt; 属性 -&gt; 安全 -&gt; 高级 -&gt; 取消继承 -&gt; 调整对应权限 即可</p><h2 id="删除文件失败问题" tabindex="-1"><a class="header-anchor" href="#删除文件失败问题"><span>删除文件失败问题</span></a></h2><blockquote><p>删除一个文件时，弹出错误信息，说文件已在资源管理器中打开，或者文件被某一进程占用！</p></blockquote><p>方法：</p><ul><li>万能的重启，重启电脑后，看是否能够删除</li><li>打开任务管理器，看是否有相关进程，然后结束掉</li><li>找不到进程时，可以通过 任务管理器 &gt; 性能 &gt; 打开资源监视器 &gt; CPU &gt; 关联的句柄里面进行搜索删不掉的文件的文件名，然后结束掉进程</li><li>假如是explorer占用，而无法结束，结束explorer黑屏时，则需要打开注册表编辑器<code>regedit.exe</code></li><li>搜索相关文件的名称，然后在注册表中将相关信息删除掉，最后重启电脑，再将文件即可删除</li></ul>`,10);function h(p,d){return e(),a("div",null,[i(" ## 内核 "),t,i(` set path

set classpath

javac -cp libxx.jar

java -cp libxx.jar

appletViewer HelloWorldApplet.html `)])}const k=s(l,[["render",h],["__file","Windows.html.vue"]]),c=JSON.parse('{"path":"/cs-basic/os/computeros/Windows.html","title":"Windows","lang":"zh-CN","frontmatter":{"title":"Windows","footer":"","description":"Command命令 批处理文件 给文件夹设置权限 右键 -> 属性 -> 安全 -> 高级 -> 取消继承 -> 调整对应权限 即可 删除文件失败问题 删除一个文件时，弹出错误信息，说文件已在资源管理器中打开，或者文件被某一进程占用！ 方法： 万能的重启，重启电脑后，看是否能够删除 打开任务管理器，看是否有相关进程，然后结束掉 找不到进程时，可以通过 ...","head":[["meta",{"property":"og:url","content":"https://lipengjgs.github.io/cs-basic/os/computeros/Windows.html"}],["meta",{"property":"og:site_name","content":"SE Docs"}],["meta",{"property":"og:title","content":"Windows"}],["meta",{"property":"og:description","content":"Command命令 批处理文件 给文件夹设置权限 右键 -> 属性 -> 安全 -> 高级 -> 取消继承 -> 调整对应权限 即可 删除文件失败问题 删除一个文件时，弹出错误信息，说文件已在资源管理器中打开，或者文件被某一进程占用！ 方法： 万能的重启，重启电脑后，看是否能够删除 打开任务管理器，看是否有相关进程，然后结束掉 找不到进程时，可以通过 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-05T15:37:51.000Z"}],["meta",{"property":"article:author","content":"lipengjgs"}],["meta",{"property":"article:modified_time","content":"2024-08-05T15:37:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-05T15:37:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lipengjgs\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"Command命令","slug":"command命令","link":"#command命令","children":[]},{"level":2,"title":"批处理文件","slug":"批处理文件","link":"#批处理文件","children":[]},{"level":2,"title":"给文件夹设置权限","slug":"给文件夹设置权限","link":"#给文件夹设置权限","children":[]},{"level":2,"title":"删除文件失败问题","slug":"删除文件失败问题","link":"#删除文件失败问题","children":[]}],"git":{"createdTime":1719488606000,"updatedTime":1722872271000,"contributors":[{"name":"jgs","email":"12345@qq.com","commits":3}]},"readingTime":{"minutes":1.1,"words":331},"filePathRelative":"cs-basic/os/computeros/Windows.md","localizedDate":"2024年6月27日","autoDesc":true,"excerpt":"<!-- ## 内核 -->\\n<h2>Command命令</h2>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\"># 查看系统信息</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">systeminfo</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\"># 查看文件目录</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">dir</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">dir</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> HelloWorld.</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\">*</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">cd</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> [路径]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">cd</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> d:</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">copy</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">xcopy</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> /I</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> /E</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> /Y</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> [原路径] [目标路径]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{k as comp,c as data};