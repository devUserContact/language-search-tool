/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.txt/,
			loader: 'raw-loader',
		})

		return config
	},
}

