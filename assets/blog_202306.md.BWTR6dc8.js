import{_ as e,c as t,o as a,V as o}from"./chunks/framework.BSri5ErE.js";const g=JSON.parse('{"title":"2023年6月更新：开往使用后端随机接口","description":"","frontmatter":{"title":"2023年6月更新：开往使用后端随机接口","contributors":["linlinzzo","jiangyangcreate"],"date":"2023-06-25T00:00:00.000Z","updated":"2023-06-25T00:00:00.000Z","categories":"功能更新","tags":["后端"]},"headers":[],"relativePath":"blog/202306.md","filePath":"blog/202306.md","lastUpdated":1708073129000}'),c={name:"blog/202306.md"},d=o('<h1 id="_2023-年-6-月更新-开往使用后端随机接口" tabindex="-1">2023 年 6 月更新：开往使用后端随机接口 <a class="header-anchor" href="#_2023-年-6-月更新-开往使用后端随机接口" aria-label="Permalink to &quot;2023 年 6 月更新：开往使用后端随机接口&quot;">​</a></h1><p>在 2022 年暑假的时候，我们就在讨论一件事情————开往使用前端来实现随机，目前文件越来越大，势必会影响页面加载速度，不妨实现后端随机。我们注意到十年之约的虫洞就是使用后端实现随机，这样可以避免传输全量的博客数据。但在往后的一年当中，我们一直就需求及其可实现性一拖再拖，拖到了最近几天。近期一位爬虫工程师向我们沟通了开发的事宜（其实是我们主动问他的），在 6 月 16 日，我们完成了接口的测试，并进行了部署。现在，您打开开往的随机跳转页面，就会发现原来的<code>travellings.js</code>改成内联脚本了。</p><p>后端随机接口地址：<code>https://api.travellings.cn/random</code> 数据返回形式：<code>JSON</code>（其中，<code>id</code>为网站序号，<code>url</code>为网站地址）</p>',3),r=[d];function s(n,_,i,l,p,h){return a(),t("div",null,r)}const u=e(c,[["render",s]]);export{g as __pageData,u as default};
