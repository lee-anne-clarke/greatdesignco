/** @type {import('next').NextConfig} */
const nextConfig = {
	// Deploy the app as a static export (no back-end server)
	output: 'export', 

	// Because the app is being deployed as a static export, this property is required in order to use <Image />
	images: { unoptimized: true }, 

	// Necessary for direct links to site pages to work
	trailingSlash: true, 
	
	basePath: '/work/greatdesignco'
}

module.exports = nextConfig
