const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				md: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			},
			screens: {
				xs: '100%',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1230px',
				'2xl': '1340px',
				'3xl': '1340px'
			}
		},
		extend: {
			colors: {
				footer: '#111204',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					light: '#FF8533',
					DEFAULT: 'hsl(var(--primary))',
					dark: '#CC5000',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					light: '#004D73',
					DEFAULT: 'hsl(var(--secondary))',
					dark: '#00202F',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					light: '#d4f3ef',
					DEFAULT: 'hsl(var(--accent))',
					dark: '#0f766e',
					foreground: 'hsl(var(--accent-foreground))'
				},
				neutral: {
					light: '#f3f4f6',
					DEFAULT: '#9ca3af',
					dark: '#4b5563'
				},
				dark: {
					main: '#1F1D2B',
					card: '#252836',
					light: '#353949',
					hover: '#2f3343'
				},
				'main-bg': '#fff',
				'main-dark': '#1F1D2B',
				'card-dark': '#252836',
				'dark-light': '#353949',
				'hover-color-dark': '#2f3343',
				blue: '#1fb6ff',
				purple: '#3f3cbb',
				pink: '#ff49db',
				orange: '#ff7849',
				green: '#13ce66',
				yellow: '#ffc82c',
				'gray-dark': '#273444',
				gray: '#8492a6',
				'gray-light': '#d3dce6',
				h3: '#252623',
				formInputBg: '#f5f5f5',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'Poppins',
					'Outfit',
					'Avenir',
					'Nunito Sans',
					'Roboto',
					...fontFamily.sans
				],
				questrial: 'Questrial',
				manrope: [
					'Manrope',
					'sans-serif'
				],
				pockota: [
					'Pockota',
					'sans-serif'
				],
				aboro: [
					'var(--font-aboro)',
					'sans-serif'
				],
				'mona-sans': [
					'Mona Sans',
					'sans-serif'
				],
				macondo: [
					'Macondo"',
					'sans-serif'
				],
				lexend: [
					'Lexend',
					'sans-serif'
				],
				'astro-futuristic': [
					'Astro-Futuristic',
					'sans-serif'
				]
			},
			gridTemplateColumns: {
				'16-auto': '250px auto'
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'-10': '-10'
			},
			padding: {
				safe: 'env(safe-area-inset)'
			},
			aspectRatio: {
				'16/9': [
					16,
					9
				],
				'4/3': [
					4,
					3
				],
				'1/1': [
					1,
					1
				]
			},
			lineHeight: {
				tighter: '1.1',
				relaxed: '1.8'
			},
			letterSpacing: {
				wider: '.05em',
				tightest: '-.05em'
			},
			fontSize: {
				xs: 'var(--font-size-xs)',
				sm: 'var(--font-size-sm)',
				base: 'var(--font-size-base)',
				lg: 'var(--font-size-lg)',
				xl: 'var(--font-size-xl)',
				'2xl': 'var(--font-size-2xl)',
				'3xl': 'var(--font-size-3xl)',
				'4xl': 'var(--font-size-4xl)',
				custom: '16px'
			},
			backgroundImage: {
				'footer-gradient': 'linear-gradient(to right, #0e1c26, #2a454b, #294861)'
			},
			textAlign: {
				left: 'left',
				center: 'center',
				right: 'right'
			},
			borderRadius: {
				sm: 'calc(var(--radius) - 4px)',
				DEFAULT: '0.25rem',
				md: 'calc(var(--radius) - 2px)',
				lg: 'var(--radius)',
				xl: '0.75rem',
				'2xl': '1rem',
				'3xl': '1.5rem',
				full: '9999px'
			},
			animation: {
				spinSlow: 'spin 4s linear infinite',
				shimmer: 'shimmer 2s linear infinite',
				// marquee: 'marquee var(--duration) infinite linear',
				// 'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				blurText: 'blurText 1s ease-in-out infinite',
			},
			keyframes: {
				shimmer: {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				},
				// marquee: {
				// 	from: {
				// 		transform: 'translateX(0)'
				// 	},
				// 	to: {
				// 		transform: 'translateX(calc(-100% - var(--gap)))'
				// 	}
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				// 'marquee-vertical': {
				// 	from: {
				// 		transform: 'translateY(0)'
				// 	},
				// 	to: {
				// 		transform: 'translateY(calc(-100% - var(--gap)))'
				// 	}
				// },
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				blurText: {
					'0%': { filter: 'blur(0px)' },
					'100%': { filter: 'blur(4px)' },
				},
			}
		}
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		// require("acentricity-ui"),
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".text-muted": {
					opacity: 0.8,
				},
				".transition-a": {
					transition: "all 0.3s ease-in-out",
				},
				".card-shadow": {
					boxShadow: " 0 0 0.8rem 0.25rem rgba(0, 0, 0, 0.1)",
				},
				".shadow-light": {
					boxShadow: "0.1rem 0.1rem 0.3rem .1rem rgba(0, 0, 0, 0.05)",
				},
				".shadow-light-fourSides": {
					boxShadow: "0 0 0.3rem 0.1rem rgba(0, 0, 0, 0.05)",
				},
				".border-light": {
					border: "1px solid rgba(46, 46, 46, 0.1)",
				},
				".input-shadow": {
					boxShadow: "0 0 0 1000px #f5f5f9 inset !important",
				},
				".input-dark-shadow": {
					boxShadow: "0 0 0 1000px #13131A inset !important",
				},
				".inputAutofillColor": {
					"-webkit-text-fill-color": "#ccc",
				},
				".flex-center-center": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				},
				".flex-center-between": {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				},
				".flex-start-between-col": {
					display: "flex",
					alignItems: "start",
					justifyContent: "space-between",
					flexDirection: "column",
				},
				".flex-center-between-row": {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "row",
				},
				".flex-center-between-col": {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexDirection: "column",
				},
				".flex-align-center": {
					display: "flex",
					alignItems: "center",
				},

				".hide-scrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
				".safe-bottom": {
					paddingBottom: "env(safe-area-inset-bottom)",
				},
				".mobile-hover": {
					"@media (hover: none)": {
						"&:hover": {
							backgroundColor: "inherit",
							color: "inherit",
						},
					},
				},
			};
			addUtilities(newUtilities);
		}),
		require("tailwindcss-animate"),
	],
	darkMode: ["class", "class"],
};
