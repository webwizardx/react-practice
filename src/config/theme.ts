import { Theme } from 'theme-ui';

export const theme: Theme = {
	fonts: {
		body: '"League Spartan", sans-serif',
		heading: '"League Spartan", sans-serif',
	},
	fontWeights: ['400', '500', '700'],
	colors: {
		primary: 'hsl(180, 29%, 50%)',
		success: 'hsl(180, 39%, 56%)',
		background: 'hsl(180, 52%, 96%)',
		filter: 'hsl(180, 31%, 95%)',
		text: 'hsl(180, 8%, 52%)',
		darkerText: 'hsl(180, 14%, 20%)',
	},
	borderStyles: {
		success: 'hsl(180, 39%, 56%)',
	},
	cards: {
		primary: {
			padding: 3,
			borderRadius: '10px',
			boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
		},
	},
	badges: {
		primary: {
			padding: '4px 8px',
			textTransform: 'uppercase',
			backgroundColor: 'hsl(180, 39%, 56%)',
			borderRadius: '25px',
		},
		secondary: {
			padding: '4px 8px',
			textTransform: 'uppercase',
			backgroundColor: 'hsl(176, 15%, 20%)',
			borderRadius: '25px',
		},
		filter: {
			padding: '4px 8px',
			backgroundColor: 'hsl(191.3, 32%, 90.2%)',
		},
	},
};

export default theme;
