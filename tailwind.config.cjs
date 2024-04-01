const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Adjusted font sizes for writing Chinese
        'xs': '.625rem',   // Extra small
        'sm': '.75rem',    // Small
        'base': '.875rem', // Base
        'lg': '1rem',      // Large
        'xl': '1.125rem',  // Extra large
        '2xl': '1.25rem',  // 2 times extra large
        '3xl': '1.5rem',   // 3 times extra large
        '4xl': '1.875rem', // 4 times extra large
        '5xl': '2.25rem',  // 5 times extra large
        '6xl': '3rem',     // 6 times extra large
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
