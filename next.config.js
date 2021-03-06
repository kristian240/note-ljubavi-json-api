const path = require('path');
const withPlugins = require('next-compose-plugins');
const withReactSvg = require('next-react-svg');

const nextConfig = {
	experimental: {
		eslint: true,
	},
};

module.exports = withPlugins([
	[
		withReactSvg,
		{
			include: path.resolve(__dirname, 'src/assets/icons'),
		},
	],
	nextConfig,
]);
