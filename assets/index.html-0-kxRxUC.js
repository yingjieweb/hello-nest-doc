import{_ as n,o as s,c as a,e as p}from"./app-KOpu1c8Q.js";const t="/hello-nest-doc/images/fileIntro.png",e={},o=p(`<h1 id="目录结构-文件介绍" tabindex="-1"><a class="header-anchor" href="#目录结构-文件介绍" aria-hidden="true">#</a> 目录结构 &amp; 文件介绍</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>src
├── app<span class="token punctuation">.</span>controller<span class="token punctuation">.</span>spec<span class="token punctuation">.</span>ts <span class="token comment">// 针对控制器的单元测试</span>
├── app<span class="token punctuation">.</span>controller<span class="token punctuation">.</span>ts <span class="token comment">// 带有单个路由的基本控制器</span>
├── app<span class="token punctuation">.</span>module<span class="token punctuation">.</span>ts <span class="token comment">// 应用程序的根模块（root module）</span>
├── app<span class="token punctuation">.</span>service<span class="token punctuation">.</span>ts <span class="token comment">// 具有单一方法的基本服务（service）</span>
├── app<span class="token punctuation">.</span>service<span class="token punctuation">.</span>spec<span class="token punctuation">.</span>ts <span class="token comment">// 针对服务的单元测试</span>
├── main<span class="token punctuation">.</span>ts <span class="token comment">// 应用程序的入口文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>入口文件（main.js）：应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NestFactory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.module&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// curl http://localhost:3000</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>模块（Modules）：Nest.js 应用程序由多个模块组成，每个模块都是一个逻辑上的独立单元。模块可以包含路由、控制器、服务和其他相关的组件。模块之间可以进行嵌套和引用，形成层次化的结构。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/app.module.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.controller&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.service&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Module</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入</span>
  <span class="token literal-property property">controllers</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppController<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 控制器</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppService<span class="token punctuation">]</span><span class="token punctuation">,</span>      <span class="token comment">// 服务提供者，处理具体的业务逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>控制器（Controllers）：控制器处理来自客户端的请求，并将请求分发给相应的服务进行处理。控制器负责定义路由和请求处理程序，它们使用装饰器来标记路由和请求方法。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/app.controller.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.service&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppController</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> readonly appService<span class="token operator">:</span> AppService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appService<span class="token punctuation">.</span><span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚩 在 Nest.js 中，使用控制器（Controller）和服务（Service）的组合是一种推荐的架构模式。控制器负责处理客户端的请求和响应，而服务则负责处理具体的业务逻辑。这种模式的好处是将请求处理和业务逻辑分离，使代码更具可读性、可维护性和可测试性。</p><p><img src="`+t+'" alt=""></p>',10),c=[o];function l(i,u){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","index.html.vue"]]);export{k as default};
