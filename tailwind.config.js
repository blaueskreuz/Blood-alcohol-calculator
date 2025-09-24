/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        black: '#0B0B0B',
        grey: {
          900: '#BFBFBF',
          800: '#3d4852',
          700: '#606f7b',
          600: '#8795a1',
          500: '#AAAAAA',
          400: '#C6C6C6',
          300: '#DEDEDE',
          200: '#F4F4F4',
          100: '#FAFAFA'
        },
        white: '#ffffff',
        red: {
          darkest: '#3b0d0c',
          darker: '#621b18',
          dark: '#cc1f1a',
          DEFAULT: '#DD2F2F',
          light: '#F45353',
          lighter: '#f9acaa',
          lightest: '#fcebea'
        },
        orange: {
          darkest: '#462a16',
          darker: '#613b1f',
          dark: '#de751f',
          DEFAULT: '#FFBB21',
          light: '#faad63',
          lighter: '#fcd9b6',
          lightest: '#fff5eb'
        },
        yellow: {
          darkest: '#453411',
          darker: '#684f1d',
          dark: '#f2d024',
          DEFAULT: '#ffed4a',
          light: '#fff382',
          lighter: '#fff9c2',
          lightest: '#fcfbeb'
        },
        green: {
          darkest: '#0f2f21',
          darker: '#1a4731',
          dark: '#1f9d55',
          DEFAULT: '#38c172',
          light: '#51d88a',
          lighter: '#a2f5bf',
          lightest: '#e3fcec'
        },
        teal: {
          darkest: '#0d3331',
          darker: '#20504f',
          dark: '#38a89d',
          DEFAULT: '#4dc0b5',
          light: '#64d5ca',
          lighter: '#a0f0ed',
          lightest: '#e8fffe'
        },
        blue: {
          darkest: '#12283a',
          darker: '#1c3d5a',
          dark: '#2779bd',
          DEFAULT: '#2D67B2',
          light: '#5CB4FF',
          lighter: '#90CAF9',
          lightest: '#E3EBF5'
        },
        indigo: {
          darkest: '#191e38',
          darker: '#2f365f',
          dark: '#5661b3',
          DEFAULT: '#6574cd',
          light: '#7886d7',
          lighter: '#b2b7ff',
          lightest: '#e6e8ff'
        },
        purple: {
          darkest: '#21183c',
          darker: '#382b5f',
          dark: '#794acf',
          DEFAULT: '#9561e2',
          light: '#a779e9',
          lighter: '#d6bbfc',
          lightest: '#f3ebff'
        },
        pink: {
          darkest: '#451225',
          darker: '#6f213f',
          dark: '#eb5286',
          DEFAULT: '#f66d9b',
          light: '#fa7ea8',
          lighter: '#ffbbca',
          lightest: '#ffebef'
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          'BlinkMacSystemFont',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
        serif: [
          'Constantia',
          'Lucida Bright',
          'Lucidabright',
          'Lucida Serif',
          'Lucida',
          'DejaVu Serif',
          'Bitstream Vera Serif',
          'Liberation Serif',
          'Georgia',
          'serif'
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
        body: ['Raleway', 'sans-serif', 'system-ui']
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3.125rem',
        '5xl': '3.375rem'
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
      },
      lineHeight: {
        none: 1,
        tight: 1.25,
        normal: 1.5,
        loose: 2
      },
      letterSpacing: {
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '7': '7px'
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.3125rem',
        md: '.8125rem',
        lg: '1.25rem',
        full: '9999px'
      },
      width: {
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem'
      },
      height: {
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem'
      },
      maxWidth: {
        xxs: '17rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem'
      },
      boxShadow: {
        DEFAULT: '0px 3px 15px rgba(0, 0, 0, 0.07)',
        md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
        lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(52,144,220,0.5)',
        none: 'none'
      }
    }
  },
  plugins: []
}