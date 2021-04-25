const path = require("path");

const vueComponents = "./src/components";
const vueViews = "./src/views";
const vueImages = "./public/images";
const vueUtils = "./src/utils";

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@components": path.join(__dirname, vueComponents),
                "@views": path.join(__dirname, vueViews),
                "@images": path.join(__dirname, vueImages),
                "@utils": path.join(__dirname, vueUtils)
            },
            extensions: ['.js', '.vue', '.json', '.png', '.svg']
        },
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: 'html-loader'
                }
            ]
        }
    }
};
