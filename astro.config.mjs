import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://hexo.docs.shokax.top",
	integrations: [
		starlight({
			defaultLocale: 'zh-cn',
			locales: {
				'zh-cn': {
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
				github: 'https://github.com/withastro/starlight',
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
