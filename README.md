# BOSScript
boss直聘投递、关闭，一条龙服务的油猴脚本

事件原因，bug还很多，但是满足需求足足了


## 使用方法

1. instant.js 里面的代码粘贴进油猴脚本的代码编辑器里面

2. 打开 https://www.zhipin.com/web/geek/job?query=%E5%89%8D%E7%AB%AF&city=101020100&experience=102

3. 打开控制台，粘贴 index.js 里面的代码，会车

4. 去喝茶吧，接下来交给 BOSScript



## notice

因为要瞬间打开30个标签页，浏览器自动做了拦截，所以建议阻止拦截

![image](https://user-images.githubusercontent.com/73089592/195337157-206c9470-7145-47f3-86c2-395141b6b4e1.png)



## 技术栈

纯 JavaScript


## TODO vs done

done：
 1. 自动开启多个标签页进行投递。
 2. 投递结束自动关闭浏览器标签页
todo：
1. 检测 chat 页面自动关闭
2. 发简历功能 
3. 发包
4. 自动化：hack进页面，添加一个按钮，点击按钮后再开始执行脚本
5. 速度和执行效率优化（标签页数量限制，监控，执行pool）轮训时间较长，我在缩短一点会更快
6. 自动执行分页
7. 脱离油猴脚本一键执行
8. ...issue

删除这里
<div style="color: red">声明：此脚本仅做技术研究和交流，不要随意修改此程序，包括但不限于轮训时间。针对使用此脚本造成BOSS抗不住崩了的后果本人概不负责。 <div>
