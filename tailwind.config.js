/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        114: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
      },
    },
    colors: {
      black: '#000000',
      // Centenario Colors
      gold: '#DCBF6F',
      green: {
        50: '#0a483a8a',
        100: '#1E3D35',
        200: '#012D25',
        300: '#0A483A',
      },

      blue: '#0C2238',

      // Regular Colors
      info: '#1fb6ff',
      error: {
        50: '#fff0f0',
        100: '#ffdddd',
        200: '#ffc0c0',
        300: '#ff9494',
        400: '#ff5757',
        500: '#ff2323',
        600: '#ff0000',
        700: '#d70000',
        800: '#b10303',
        900: '#920a0a',
        950: '#500000',
      },
      success: {
        50: '#f0fdf3',
        100: '#dcfce5',
        200: '#bbf7cb',
        300: '#85f0a4',
        400: '#49df75',
        500: '#21c651',
        600: '#15a43f',
        700: '#158436',
        800: '#16652e',
        900: '#145328',
        950: '#052e13',
      },
      warning: '#ffcc00',
      white: {
        50: '#ffffff',
        100: '#efefef',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
      zinc: {
        300: '#D9D9D9',
        800: '#292D32',
      },
      rose: {
        200: '#F5D9D9',
      },
    },
    fontFamily: {
      Akhand: ['Akhand', 'sans-serif'],
    },
    dropShadow: {
      regular: '0 1px 2px rgba(0, 0, 0, 0.4)',
    },
    screens: {
      ...defaultTheme.screens,
      xs: { raw: '(min-width: 320px)' },
      'h-xs': { raw: '(min-height: 320px)' },
      'h-sm': { raw: '(min-height: 600px)' },
      'h-md': { raw: '(min-height: 840px)' },
      'h-lg': { raw: '(min-height: 900px)' },
      'h-xl': { raw: '(min-height: 1280px)' },
    },
  },
  plugins: [],
};
