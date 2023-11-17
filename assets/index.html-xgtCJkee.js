import{_ as n,o as s,c as a,e as t}from"./app-KOpu1c8Q.js";const p={},e=t(`<h1 id="统一响应体结构" tabindex="-1"><a class="header-anchor" href="#统一响应体结构" aria-hidden="true">#</a> 统一响应体结构</h1><p>Why？构建统一的响应体数据结构的好处是，它方便前端开发人员拦截和处理响应，提高代码可读性，并为错误处理提供统一的结构和信息，从而提升开发效率。</p><h2 id="封装统一响应工具函数" tabindex="-1"><a class="header-anchor" href="#封装统一响应工具函数" aria-hidden="true">#</a> 封装统一响应工具函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/core/utils/resWrapper.util.ts</span>
<span class="token keyword">function</span> <span class="token constant">RES_WRAPPER</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> number
<span class="token punctuation">)</span><span class="token operator">:</span> Common<span class="token punctuation">.</span>CommonRes<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    data<span class="token punctuation">,</span>
    msg<span class="token punctuation">,</span>
    code<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token constant">SUCCESS_RES</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> msg <span class="token operator">=</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">RES_WRAPPER</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token constant">ERROR_RES</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">msg</span><span class="token operator">:</span> string<span class="token punctuation">,</span> code <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">RES_WRAPPER</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/modules/user/user.controller.ts</span>
@<span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&#39;/getUserList&#39;</span><span class="token punctuation">)</span>
<span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Common<span class="token punctuation">.</span>CommonRes<span class="token operator">&lt;</span>UserItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token constant">SUCCESS_RES</span><span class="token punctuation">(</span>userList<span class="token punctuation">,</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/modules/user/user.controller.ts</span>
@<span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&#39;getUserDetail/:id&#39;</span><span class="token punctuation">)</span>
<span class="token function">getUserDetail</span><span class="token punctuation">(</span>
  @<span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> GetUserDetailDto<span class="token punctuation">)</span> id<span class="token operator">:</span> string<span class="token punctuation">,</span>
  @<span class="token function">Res</span><span class="token punctuation">(</span><span class="token punctuation">)</span> res<span class="token operator">:</span> Response<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> targetUser <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">getUserDetail</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token constant">SUCCESS_RES</span><span class="token punctuation">(</span>targetUser<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token constant">ERROR_RES</span><span class="token punctuation">(</span><span class="token string">&#39;User was not found&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装统一响应过滤器" tabindex="-1"><a class="header-anchor" href="#封装统一响应过滤器" aria-hidden="true">#</a> 封装统一响应过滤器</h2><ul><li>封装异常响应过滤器</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Catch<span class="token punctuation">,</span>
  HttpException<span class="token punctuation">,</span>
  ExceptionFilter<span class="token punctuation">,</span>
  ArgumentsHost<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>

@<span class="token function">Catch</span><span class="token punctuation">(</span>HttpException<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HttpExceptionFilter</span> <span class="token keyword">implements</span> <span class="token class-name">ExceptionFilter</span> <span class="token punctuation">{</span>
  <span class="token function">catch</span><span class="token punctuation">(</span>exception<span class="token operator">:</span> HttpException<span class="token punctuation">,</span> <span class="token literal-property property">host</span><span class="token operator">:</span> ArgumentsHost<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> host<span class="token punctuation">.</span><span class="token function">switchToHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取请求上下文</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取请求上下文中的 response对象</span>
    <span class="token keyword">const</span> status <span class="token operator">=</span> exception<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取异常状态码</span>

    <span class="token comment">// 设置错误信息</span>
    <span class="token keyword">const</span> message <span class="token operator">=</span> exception<span class="token punctuation">.</span>message
      <span class="token operator">?</span> exception<span class="token punctuation">.</span>message
      <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>status <span class="token operator">&gt;=</span> <span class="token number">500</span> <span class="token operator">?</span> <span class="token string">&quot;Service Error&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Client Error&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> errorResponse <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> message<span class="token punctuation">,</span>
      <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置返回的状态码，发送错误信息</span>
    response<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>errorResponse<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>正常响应拦截器</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  NestInterceptor<span class="token punctuation">,</span>
  ExecutionContext<span class="token punctuation">,</span>
  CallHandler<span class="token punctuation">,</span>
  Injectable<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rxjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> map <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rxjs/operators&quot;</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TransformInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">NestInterceptor</span> <span class="token punctuation">{</span>
  <span class="token function">intercept</span><span class="token punctuation">(</span>context<span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span> <span class="token literal-property property">next</span><span class="token operator">:</span> CallHandler<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> next<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>
      <span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          data<span class="token punctuation">,</span>
          <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 main.ts 中全局注册</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> TransformInterceptor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./path/to/your/interceptor&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpExceptionFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./path/to/your/filter&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">await</span> NestFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 全局注册的响应过滤器</span>
  app<span class="token punctuation">.</span><span class="token function">useGlobalInterceptors</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransformInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  app<span class="token punctuation">.</span><span class="token function">useGlobalFilters</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HttpExceptionFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以统一的返回错误请求了，只需要抛出异常即可，比如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token string">&quot;User was not found&quot;</span><span class="token punctuation">,</span> <span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
