import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/smellcheck';
const npm = 'https://www.npmjs.com/package/smellcheck';

export default defineFilepressConfig({
	title: 'Smell Check',
	description:
		'Have you smell-checked that? Editorial rules for prose that says something instead of sounding like it.',
	tagline: 'Have you smell-checked that?',
	url: 'https://smellcheck.dev',
	author: 'Catalyst Forge LLC',
	logo: '/logo.svg',
	ogImage: '/logo.svg',
	homePage: 'home',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Docs', href: '/docs/' },
		{ label: 'Install', href: '/install' },
		{ label: 'Skill', href: '/skill' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'About', href: '/about' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'Docs', href: '/docs/' },
		{ label: 'npm', href: npm },
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNp1kU1rAyEQhv_KMmeTpVePDRRa0l42t1LKrE6Mjaui4xYb8t-Lu6GQQ29-PO_H6AVmkA8CPE4EEtA-JvohEMA1tgNnx4SpgoDMyCU3RrGdG-KsIp8b9fp8WAl1BnkBh94UNO3mUCMNKtnIonvBGdc1CEjFs10y34Km7VdeDKqz3oCE3TCAgFPIfNu7UPTRYWq5EdUZDX1O6NFQAgnRxwmuAjTFDPL9Ah4kfCf0xlFqijuLTlN0oU7kGa5ihQ3x0TqKiXK-CXRQpTHINvhuDVs1HwLyrP6C7sq1OrfeHXrdkTbUqTDFsozStGOxTrd3-n-QRDFkyyHVZsccs-x7Y_lUxq0KU79DRlczb55CMrTZ73c92nH5uusvQqie3Q' },
		{ label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqdU8Fu2zAM_RVDZydZdsxOQ7EBQbNTeyuGQpFom4gsCSTlIAvy76O8dtmhB2Mny09Pj-Lj09VMZrdtTbQjmJ2xeCT4BaY1HiYIKQMp-mDFhgtL8z1RXzcnIMYUdevTerveflaIxUrhKuEEp0oK6CByVf2xf9b_E0avP64QJ1rxCUNQNBfKaWZ98yiJ0IaGSgBuukRNLseAPNhjgCaT8r40nMle2sYWpesn-nfSKlvm5pzo1IV0_nP-636lILKAb86EgrGvNSlNEG10WvZqOBWqKzOIZN5tNj3KUI5rl8bNe-erufPV4fCwuVv0Vvcji26twchCRc1IkV8JrBvmYgNo2zsTU6wSEaReWAEcc0DwinWo3asUjArrQV_VJKVQZTog0HurkS8_W3Ms0Qfwr5YEOzVe_X-5mmxFa5mnx_3hsB793fok9bK39i9lNnrjEsES3mz5IsFgceQlTGC2l0XMoJPW6S2hpiKz38tkS1zGdDihW2STsx7Gj7k6M-hJu65ZEAgwgtDlngcPrBm1c2jqiHXyQxoh2_7fgL5FsCZUzxDoA6pP5_IfGdaIRmelBkqXcPsNuYxlHQ' }
	],
	topics: [],
	paths: [{ url: '/docs', dir: 'docs/dist' }]
});
