import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';

const config = {
  locales: [
    'ru',
  ],
  head: {
    favicon: favicon,
  },
  menu: {
    logo: MenuLogo,
  },
  auth: {
    logo: MenuLogo,
  },
  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: '#DEF4FF',
        primary200: '#BAEBF1',
        primary500: '#8AB8C4',
        primary600: '#348376',
        primary700: '#116660',
        buttonPrimary500: '#44BBA8',
        buttonPrimary600: '#348376',
      },
    },
    dark: {
      // ...
    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
