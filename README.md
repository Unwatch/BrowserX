1.安装环境 https://blog.csdn.net/ruyulin/article/details/78885246 https://blog.csdn.net/u014563989/article/details/75045052 
nodejs v10.2.0  在安装包文件下，node-v10.2.0-x86.msi，点击安装，安装完成后可以使用npm包管理工具
electron 最新版即可，使用cmd输入npm install electron --save-dev 进行安装
electron-builder 打包工具最新版即可，使用cmd输入npm i -g electron-builder进行安装

2.进行打包 https://www.jianshu.com/p/41fa30efed84
安装完后cmd当前目录定位到HG6668文件夹下，输入npm run win，dist文件夹下生成exe安装文件,用户32位/64位系统都可以使用，和zip文件，都可以发布(windows上操作)
安装完后cmd当前目录定位到HG6668文件夹下，输入npm run mac，dist文件夹下生成dmg文件，和zip文件，(macos上操作)

3.更换图标
win平台icon格式文件，使用专门的图标制作软件，可以将jpg，png等格式制作成.ico格式，替换文件src\img\logo.ico，应用的图标 256*256像素
mac平台icns格式文件，替换文件src\img\logo.icns

4.更换logo
替换文件src\img\logo.jpg，尺寸要一致

5.更换api
src\img\url.js文件init()方法中将"http://www.hg70886.vip/dataInterface.php?type=client"替换
