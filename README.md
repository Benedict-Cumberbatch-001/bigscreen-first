# 数据平台展示大屏

## 1.说明
1. 使用的是Flask框架，使用`return render_template('index.html')`返回所要展示的页面
2. `index.html`即为所展示的大屏。`test.index`、`echarts.index`、`baidu.index`均为测试使用页面，与项目无关。
3. `static`文件夹中存放的分别是：
   - index页面的css格式（css文件夹）；
   - 字体样式（font文件夹）；
   - 素材图片（images文件夹）；
   - 页面动画运行代码（js文件夹），`js.js`为主要运行代码，包括时间显示，表格。文字滚动动画代码在`fontscroll.js`

## 2.使用
运行`app.py`，返回一个本地域名`http://127.0.0.1:5000`点击或者使用浏览器进入即可
