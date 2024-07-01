import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://docs-hexo.shokax.top",
	integrations: [
		starlight({
			head: [
				{
					tag: "script",
					content: `
					(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
					t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
					y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "n0etdmlwab");
					`
				}
			],
			defaultLocale: 'root',
			locales: {
				'root': {
					label: '简体中文',
					lang: 'zh-CN'
				},
				'en': {
					label: 'English',
					lang: 'en'
				}
			},
			title: 'ShokaX Docs',
			social: {
				github: 'https://github.com/theme-shoka-x/shokaX-docs-v2',
			},
			sidebar: [
					{
						label: '从这里开始',
						autogenerate: { directory: 'getting-started' },
					},
					{
						label: '特色功能',
						autogenerate: { directory: 'features' },
					}
				
				],
		}),
	],
});
