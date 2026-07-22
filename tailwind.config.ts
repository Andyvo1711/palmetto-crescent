import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        marsh: {
          DEFAULT: '#3D5C4D',
          deep: '#243A30',
          light: '#5C7F6C',
        },
        sweetgrass: {
          DEFAULT: '#C89B3C',
          light: '#E0BE70',
          dark: '#9C7529',
        },
        sunset: {
          DEFAULT: '#C15B4A',
          light: '#DD8676',
          dark: '#973F31',
        },
        sand: {
          DEFAULT: '#F5EFE3',
          dark: '#EAE0CC',
        },
        tidewater: '#A9C4C0',
        ink: '#2A2A24',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
        body: ['var(--font-plex-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
      backgroundImage: {
        'crescent-divider':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20'%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
