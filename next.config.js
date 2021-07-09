const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  target: 'serverless'
}



module.exports = withOptimizedImages([
  [withOptimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    mozjpeg: {
      quality: 80,
    },
    optimizeImagesInDev: true,
    optimizeImages: true,
    gifsicle: {
      interlaced: true,
      // optimizationLevel: 3,
    },
    svgo: {
      plugins: [
        { removeComments: false }
      ]
    },
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  }],
]);

