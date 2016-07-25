# 完成进度
登陆页 － 完成</br>
用户中心 － 开发中

#关于 真机/模拟机 部署

打开./ios/MyLover/AppDelegate.m</br>
找到下列两行代码
```bash
   jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];//模拟机

   jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];//真机

```
根据你的需求注释即可