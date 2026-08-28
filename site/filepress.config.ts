import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/aibreze';
const npm = 'https://www.npmjs.com/package/aibreze';

export default defineFilepressConfig({
	title: 'aiBreze',
	description:
		'Editorial rules for prose that says something instead of sounding like it. Spray the prose, not the author.',
	tagline: 'Earn the word.',
	url: 'https://aibreze.com',
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
		{ label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNqdU7GO2zAM_RVDs500azoVhxYImk7tdigOssTERGRJICkHbpB_L-XeNR1uMDpZfnp6FB-fbmYy-11roh3B7I3FnuAXmNZ4mCCkDKTokxUbZpbmS6Jz3ZyAGFPUrQ-b3Wa3U4jFSuEq4QSnSgroIHJV_Xb4of8XjF5_XCFO1PEFQ1A0F8ppYX32KInQhoZKAG5OiZpc-oA82D5Ak0l5HxvOZOe2sUXp-on-jdRly9xcE11OIV3_nP906BREFvDNlVAwnmtNShNEG52WvRlOherKDCKZ99vtGWUo_calcfvWebd03h2PT9uHRa9137Po3hqMLFTUjBT5hcC6YSk2gLa9NzHFKhFB6oUVwDEHBK_YCbV7lYJRYT3oq5qkFKrMCQj03mrk88_W9CX6AP7FkuBJjVf_n28mW9Fa5vvXw_G4Gf3D-iT1svf2L2UxeusSwRreYvkqwWBx5DVMYLbzKmbQSev01lBTkcXvdbIlrmM6nNCtsslZD-P7XJ0ZnEm7rlkQCDCC0PzIgwfWjNolNHXEOvkhjZDt-d-AvkawJlTPEOgDqk9n_o8Ma0Sjs1IDpUu4_wa1wWUc' }
	],
	topics: [],
	paths: [{ url: '/docs', dir: 'docs/dist' }]
});
