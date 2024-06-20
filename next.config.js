const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([[withImages]], {
  reactStrictMode: true,
  images: {
    domains: ['https://neochim-next-app-xna5.vercel.app/'],
  },
});