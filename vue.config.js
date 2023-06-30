const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const webpack = require("webpack")
module.exports = {
	// 配置插件参数
	configureWebpack: {
		plugins: [
			// 配置 jQuery 插件的参数
			new webpack.ProvidePlugin({
                // 引入jquery
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
                // 引入popper.js
				Popper: ['popper.js', 'default']
			})
		]
	}
}
module.exports = {
    devServer: {
		host:'localhost',
		port:8081,
        proxy: {
            '/api': {
                target: 'https://i.maoyan.com', 
                changeOrigin: true,                                
                pathRewrite: {                  
                    '^/api': '/api'
                }
            }
        }
    }
};

