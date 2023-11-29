import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const getBasePath = () => {
  // 根據不同環境設置不同的 base 路徑
  if (process.env.NODE_ENV === 'production') {
    return '/2023F2Emission2/';
  } else if (process.env.NODE_ENV === 'development') {
    return '/';
  }
  // 預設 base 路徑
  return '/';
};

// https://vitejs.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [vue()],
})
