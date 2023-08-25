const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  // 指定使用的插件
  plugins: [
    // 自动添加浏览器前缀
    autoprefixer,
    // 使用新语法
    postcssPresetEnv({
      stage: 0,
    }),
    // 单位转换：px->rem
    pxtorem,
  ],
}
