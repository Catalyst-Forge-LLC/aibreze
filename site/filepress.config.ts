import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/aibreze';
const npm = 'https://www.npmjs.com/package/aibreze';

export default defineFilepressConfig({
	title: 'aiBreze',
	description:
		'Your prose has a smell. You probably stopped noticing it. Spray the prose, not the author.',
	tagline: 'Earn the word.',
	url: 'https://aibreze.com',
	author: 'Catalyst Forge LLC',
	logo: '/logo.svg',
	ogImage: '/logo.svg',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Install', href: '/install' },
		{ label: 'Writing', href: '/writing' },
		{ label: 'About', href: '/about' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'npm', href: npm },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	topics: []
});
