import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import animatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			'sixteen-hundred': {'max': '1600px'},
  			'custom-lg': {'min': '1000px'},
  			'custom-lg-max': {'max': '999px'},
  			'custom-md': {'min': '850px'},
  			'custom-sm': {'min': '650px'},
  			'custom-xl': {'min': '1250px'},
  			'super-sm': {'max': '549px'}, // 👈 Add this line
  			'nav-max': {'max': '900px'},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
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
  		},  animation: {
			spotlight: "spotlight 2s ease .75s 1 forwards",
			"spin-slow": "spin 30s linear infinite",
			"spin-rev": "spin 18s linear infinite reverse",
			"pulse-dot": "pulse-dot 1.7s cubic-bezier(0.2,0.7,0.2,1) infinite",
			"rise": "rise 0.5s cubic-bezier(0.2,0.7,0.2,1)",
		  },
		  keyframes: {
			spotlight: {
			  "0%": {
				opacity: 0,
				transform: "translate(-72%, -62%) scale(0.5)",
			  },
			  "100%": {
				opacity: 1,
				transform: "translate(-50%,-40%) scale(1)",
			  },
			},
			"pulse-dot": {
			  "0%,100%": { transform: "scale(1)", opacity: "1" },
			  "50%": { transform: "scale(1.4)", opacity: "0.6" },
			},
			"rise": {
			  from: { opacity: "0", transform: "translateY(16px)" },
			  to: { opacity: "1", transform: "none" },
			},
		  },
  	}
  },
  plugins: [animatePlugin, addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }