import { defineFilepressConfig } from 'getfilepress';

const npm = 'https://www.npmjs.com/package/aibreze';

export default defineFilepressConfig({
	title: 'aiBreze',
	description:
		'Installable writing rule set for AI agents. Strips the performative, faux-profound register from prose.',
	tagline: 'A spray, not a breeze.',
	lede: 'Installable writing rules for agents. Judges the sentence, not the byline.',
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
