const path = require("path");

const vueComponents = "./src/components";
const vueImages = "./public/images";
const vueUtils = "./src/utils";

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@components": path.join(__dirname, vueComponents),
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
