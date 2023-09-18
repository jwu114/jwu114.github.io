import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    editLink: false,
    logo: '/logo.png',
    lastUpdated: false,
    footer: `Copyright © 2023<br /> by Jiarui Wu`,
    nprogress: false,
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/jwu114',
      linkedin: 'https://www.linkedin.com/in/jiarui-jerry-wu/',
    },
    nav: [{ title: 'Projects', link: '/projects' },
          { title: 'Contact', children: [{title: 'jwu114@u.rochester.edu'},{title: 'w670699337@gmail.com'}]}],
  },
  locales: [{ id: 'en-US', name: 'English'}],
  mode: 'site',
  devServer: {
    port: 1998
  },
  base: '/jwu114.github.io/',
  publicPath: '/jwu114.github.io/',
  exportStatic: {},
});
