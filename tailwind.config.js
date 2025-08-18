/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
      extend: {
        colors: {
          accent: '#14b8a6',
          ink: '#fffdfa',
          muted: '#d6eeea',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
          heading: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        },
        fontSize: {
          body: ['1rem', { lineHeight: 'var(--lh-body)', letterSpacing: 'var(--ls-body)' }],
          heading: ['2rem', { lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-heading)' }],
          caption: ['0.875rem', { lineHeight: 'var(--lh-caption)', letterSpacing: 'var(--ls-caption)' }],
        },
      },
    },
    plugins: [],
  }
  