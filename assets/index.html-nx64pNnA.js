import{_ as r,r as o,o as i,c,b as e,d as n,e as a,a as t}from"./app-t6yrXeyc.js";const l={},d=e("h1",{id:"脚手架安装-项目初始化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#脚手架安装-项目初始化","aria-hidden":"true"},"#"),n(" 脚手架安装 & 项目初始化")],-1),p=e("h3",{id:"方式一",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#方式一","aria-hidden":"true"},"#"),n(" 方式一")],-1),u={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$ npm i <span class="token operator">-</span>g @nestjs<span class="token operator">/</span>cli
 
$ nest <span class="token operator">-</span>v <span class="token comment">// 9.5.0</span>
 
$ nest <span class="token keyword">new</span> <span class="token class-name">hello</span><span class="token operator">-</span>nest <span class="token comment">// project name</span>
 
<span class="token comment">// &quot;@nestjs/common&quot;: &quot;^9.0.0&quot;,</span>
<span class="token comment">// &quot;@nestjs/core&quot;: &quot;^9.0.0&quot;,</span>
<span class="token comment">// &quot;@nestjs/platform-express&quot;: &quot;^9.0.0&quot;,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={href:"https://github.com/yingjieweb/hello-nest",target:"_blank",rel:"noopener noreferrer"},h=t(`<h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h3><p>官方也有推荐其他的初始化项目的方式 → 使用 Git 安装采用 TypeScript 开发的 starter 项目：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器并导航到 http://localhost:3000/ 地址。</p><p>若要安装基于 JavaScript 的 starter project，请在执行上面的命令时使用 javascript-starter.git 。</p>`,5);function _(b,g){const s=o("ExternalLinkIcon");return i(),c("div",null,[d,p,e("p",null,[n("在此之前，你需要安装 "),e("a",u,[n("Node.js"),a(s)]),n("，然后执行如下命令：")]),m,e("p",null,[n("这是初始化后的项目仓库： "),e("a",v,[n("hello-nest"),a(s)])]),h])}const x=r(l,[["render",_],["__file","index.html.vue"]]);export{x as default};
