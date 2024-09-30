import{_ as e,c as t,o,a2 as a}from"./chunks/framework.BTl5xOSe.js";const m=JSON.parse('{"title":"2024 年 05 月更新：弹窗问题，主题曲发布","description":"","frontmatter":{"title":"2024 年 05 月更新：弹窗问题，主题曲发布","contributors":["gtxykn0504","gxres042"],"date":"2024-6-9","updated":"2024-6-9","categories":"功能更新","tags":["音乐","巡查"]},"headers":[],"relativePath":"zh_TW/blog/202405.md","filePath":"zh_TW/blog/202405.md"}'),r={name:"zh_TW/blog/202405.md"},n=a('<h1 id="_2024-年-05-月更新-弹窗问题-主题曲发布" tabindex="-1">2024 年 05 月更新：弹窗问题，主题曲发布 <a class="header-anchor" href="#_2024-年-05-月更新-弹窗问题-主题曲发布" aria-label="Permalink to &quot;2024 年 05 月更新：弹窗问题，主题曲发布&quot;">​</a></h1><h2 id="关于部分主题的弹窗问题" tabindex="-1">关于部分主题的弹窗问题 <a class="header-anchor" href="#关于部分主题的弹窗问题" aria-label="Permalink to &quot;关于部分主题的弹窗问题&quot;">​</a></h2><p>近日，开往维护组在审查时发现，部分站点在一个潜在的用户体验问题：当访客点击位于该主题顶部的“开往”入口后，待倒计时结束，部分浏览器会错误地将此操作判定为弹窗行为，并因此自动进行拦截处理。</p><p>根据我们的调查，我们发现：这些站点中，有一部分使用了 <a href="https://github.com/anzhiyu-c/hexo-theme-anzhiyu" target="_blank" rel="noreferrer">hexo-theme-anzhiyu</a> 和 <a href="https://github.com/chengzhongxue/halo-theme-hao" target="_blank" rel="noreferrer">halo-theme-hao</a> 这两款主题。分析这两个主题的跳转代码，不难发现：它们的执行方式是在倒计时后、通过 <code>window.open(&quot;link&quot;, &quot;_blank&quot;)</code> 新建一个空白页。但是，由于在此之前<code>window.open()</code> 被一些广告商滥用，严重影响了用户的使用，因此，大多数浏览器不允许在用户行为后的一段时间才执行 <code>window.open()</code>。</p><p>为了确保用户能够顺畅地访问目标页面，我们强烈建议相关站点的站长对主题配置进行必要的修改，以避免此类跳转被浏览器误判为弹窗，从而影响用户体验。</p><h2 id="主题曲发布-in-the-flow-of-time" tabindex="-1">主题曲发布 - In the Flow of Time <a class="header-anchor" href="#主题曲发布-in-the-flow-of-time" aria-label="Permalink to &quot;主题曲发布 - In the Flow of Time&quot;">​</a></h2><p>​ “开往 Travellings”于2024年6月1日发布主题曲<a href="https://www.bilibili.com/video/BV1t1421y7VF" target="_blank" rel="noreferrer">《In the Flow of Time》</a>。《In the Flow of Time》以其悠扬动听的旋律，传递出“开往”项目致力于将流量引入那些鲜为人知的独立站点的核心愿景。</p><p>​ 我们希望通过该项目不仅仅是增加这些站点的曝光度，更是希望通过这种方式，推动整个网络的开放性和多元性，让互联网成为真正意义上的信息共享和交流平台。正如曲目标题所寓意的，我们期望网络能够像时间一样自由流淌，连接世界的每一个角落。</p>',8),h=[n];function i(l,c,_,d,s,p){return o(),t("div",null,h)}const u=e(r,[["render",i]]);export{m as __pageData,u as default};
