import {
	fileURLToPath,
	URL
} from 'node:url'

import {
	defineConfig
} from 'vite'
import {
	univerPlugin
} from "@univerjs/vite-plugin";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	},
	plugins: [
		univerPlugin({
			css: true
		}),
		vue(),
	],
	server: {
		// 修改端口
		port: 5173,
		host: '0.0.0.0' //配置IP访问
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})