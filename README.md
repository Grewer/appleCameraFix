## cameraRepair

### Description
  
This js is specifically used to modify iPhone photo taken with the photo flip;  

**compatible**
pc:  
![compatible](https://img.shields.io/badge/IE-%3E10-brightgreen.svg)



**problem case**  
Open [example](https://grewer.github.io/appleCameraFix/example/) from iphone 
Upload pictures, you can find the problem;  


#### Function usage  

**grammar**  
```js
CameraRepair(file, isFile, callback)
```  
 
param | explanation  
------|----------  
file | Must be a picture file, available fileList access 
isFile | Optional parameters, converted to the file (blob) form, the default is false
callback | Optional parameters, callback callback (img) to receive file information to be called

**Inspiration source**  
[target](https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side)  

-----

### 项目说明 

这个js 是专门用来修改 iPhone 拍照所来带的照片翻转;


**兼容**
pc:  
![兼容](https://img.shields.io/badge/IE-%3E10-brightgreen.svg)


**查看问题事例**  
 
通过iphone 打开[example](https://grewer.github.io/appleCameraFix/example/),
上传图片,可发现问题所在;  


#### 用法  

**语法**  
```js
CameraRepair(file, isFile, callback)
```


参数 | 解释  
------|----------  
file | 必须是图片文件, 可用 fileList 获取  
isFile | 可选参数,是否转换成文件(blob)形式,默认为 false 
callback | 可选参数,回调函数 callback(img) 接收文件信息进行调用  

**灵感来源**:   
[target](https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side)  

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Grewer