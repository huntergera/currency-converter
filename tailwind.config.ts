import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-banner": "url('../../public/images/rectangle.jpg')"
      },
      transitionProperty: {
        'fill': 'fill',
      }
    },
    container: {
      center: true,
      padding: '8px',
    },
    colors: {
      'blue-light': '#F6F7FF',
      'blue': '#2C36F2',
      'gray': '#707C87',
      'black': '#1F1E25',
      'pale-slate-blue': '#E0E1EA',
    },
    fontSize: {
      'h1': ['54px', {
        lineHeight: '64px',
        fontWeight: '700',
      }],
      'h2': ['40px', {
        lineHeight: '56px',
        fontWeight: '700',
      }],
      'h3': ['28px', {
        lineHeight: '39px',
        fontWeight: '500',
      }],
      '12': ['12px', {
        lineHeight: '16px',
      }],
      '18': ['18px', {
        lineHeight: '25px',
      }],
      '20': ['20px', {
        lineHeight: '24px',
      }],
    },
   fontFamily: {
    roboto : ["var(--font-roboto)"],
    workSans : ["var(--font-workSans)"],
   }
  },

  plugins: [],
};
export default config;
