import { defineFilepressConfig } from 'getfilepress';

const npm = 'https://www.npmjs.com/package/aibreze';

export default defineFilepressConfig({
	title: 'aiBreze',
	description:
		'Markdown rules that spray the performative register off prose. A spray, not a breeze.',
	tagline: 'A spray, not a breeze.',
	lede: 'Rules for generated prose that has gone stale in the room.',
	url: 'https://aibreze.com',
	author: 'Catalyst Forge LLC',
	logo: '/favicon.svg',
	ogImage: '/favicon.svg',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Install', href: '/install' },
		{ label: 'Writing', href: '/writing' },
		{ label: 'About', href: '/about' },
		{ label: 'npm', href: npm }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'npm', href: npm },
		{ label: 'Install', href: '/install' }
	],
	topics: []
});
