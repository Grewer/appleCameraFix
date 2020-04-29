# cameraRepair

### Description
  
This js is specifically used to modify iPhone photo taken with the photo flip;  

**compatible**

platform | status  
------|---------- 
pc | ![compatible](https://img.shields.io/badge/IE-%3E10-brightgreen.svg)



**problem case**  
Open [example](https://grewer.github.io/appleCameraFix/example/) from iphone
Or scan the code 
<img src="https://grewer.github.io/appleCameraFix/qrcode.png" width="150" height="150">
Use photo,you can find the problem;  

**Usage**  
npm:  
```bash
npm install @grewer/camerarepair
```

In main.js or index.js:
```js
import cameraRepair from 'applecamerafix'
```
or:  
download and  

```html
<script src="cameraRepair.browser.js"></script>
```

You can use it;


**grammar**  
```js
cameraRepair(img).then(function (file) {
           
})
```  
 
param | explanation  
------|----------  
img | Must be a picture file, available fileList access 
config.resultFile | Optional parameters, converted to the file (blob) form, the default is false

[Inspiration source](https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side)  

-----

### 项目说明 

这个js 是专门用来修改 iPhone 拍照所来带的照片翻转;


**兼容**

platform | status  
------|---------- 
pc | ![兼容](https://img.shields.io/badge/IE-%3E10-brightgreen.svg)


**查看问题事例**  
 
通过iphone 打开[example](https://grewer.github.io/appleCameraFix/example/),
或者扫码
<img src="https://grewer.github.io/appleCameraFix/qrcode.png" width="150" height="150">
使用拍照,可发现问题所在;  

**用法**  
npm:  
```bash
npm install @grewer/camerarepair
```

在 main.js 或者 index.js 中:
```js
import cameraRepair from 'applecamerafix'
```
或者:  
直接下载,在文件中引用 

```html
<script src="cameraRepair.browser.js"></script>
```


即可使用;


**语法**  
```js
cameraRepair(img).then(function (file) {
           
})
```


参数 | 解释  
------|----------  
img | 必须是图片文件, 可用 fileList 获取  
config.resultFile | 可选参数,是否转换成文件(blob)形式,默认为 false 

[灵感来源](https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side)  


**[github](https://github.com/Grewer/appleCameraFix)**

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Grewer
