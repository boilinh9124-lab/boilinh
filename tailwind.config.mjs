/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'pastel-pink': '#F8D7DA',
				'pastel-rose': '#F7C6C7',
				'pastel-blush': '#FFE4E6',
				'pastel-cream': '#FFF5F6',
				'pastel-hot': '#FF6B8A',
				'pastel-deep': '#E84575',
				'pastel-text': '#5C3D4A',
				'pastel-muted': '#9B7A87',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				'2xl': '20px',
				'3xl': '30px',
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(248, 215, 218, 0.4)',
				'soft-lg': '0 8px 30px rgba(248, 215, 218, 0.6)',
				'card': '0 2px 12px rgba(247, 198, 199, 0.3)',
				'card-hover': '0 8px 25px rgba(247, 198, 199, 0.5)',
				'float': '0 6px 24px rgba(232, 69, 117, 0.3)',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.5s ease-out forwards',
				'bounce-soft': 'bounceSoft 2s infinite',
				'float': 'float 3s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				bounceSoft: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' },
				},
			},
		},
	},
	plugins: [],
}
