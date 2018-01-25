(function() {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');//test


    function getOrientation(file, callback) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var view = new DataView(e.target.result);
            if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
            var length = view.byteLength,
                offset = 2;
            while (offset < length) {
                var marker = view.getUint16(offset, false);
                offset += 2;
                if (marker == 0xFFE1) {
                    if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
                    var little = view.getUint16(offset += 6, false) == 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    var tags = view.getUint16(offset, little);
                    offset += 2;
                    for (var i = 0; i < tags; i++)
                        if (view.getUint16(offset + (i * 12), little) == 0x0112)
                            return callback(view.getUint16(offset + (i * 12) + 8, little));
                } else if ((marker & 0xFF00) != 0xFF00) break;
                else offset += view.getUint16(offset, false);
            }
            return callback(-1);
        };
        reader.readAsArrayBuffer(file);
    }

    function cameraRepair(img) {
    	//判断一下是否为 iPhone; if (navigator.userAgent.match(/iphone/i)) {}
        getOrientation(img, function(orientation) {
            console.log(orientation)
            if (orientation === -1) {
            	//未有exif 值
            	//返回正常值
            } else if (orientation === -2) {
            	//不是 JPG 格式
            	//返回正常值
            } else {
            	//可换
                var Reader = new FileReader();
                Reader.onload = function(e) {
                    var image = new Image();
                    image.src = e.target.result;
                    image.onload = function() {
                        var naturalWidth = image.width,
                        naturalHeight = image.height,
                        expectWidth,
                        expectHeight;
                        if (naturalWidth > naturalHeight && naturalWidth > 800) {
                                expectWidth = 400;
                                expectHeight = expectWidth * naturalHeight / naturalWidth;
                            } else if (naturalHeight > naturalWidth && naturalHeight > 1200) {
                                expectHeight = 600;
                                expectWidth = expectHeight * naturalWidth / naturalHeight;
                            }
                        canvas.width = expectWidth;
                        canvas.height = expectHeight;

                        ctx.drawImage(image, 0, 0, expectWidth, expectHeight);
                        //orientation  1 不用变化  6 顺时针90度 3 180度  8 逆时针90度

                        // ctx.translate(expectWidth / 2, expectHeight / 2);//设置画布上的(0,0)位置，也就是旋转的中心点


                        // 6
                        // canvas.width = expectHeight;
                        // canvas.height = expectWidth;
                        // ctx.rotate(90 * Math.PI / 180);//把画布旋转90度
                        // ctx.drawImage(image, 0, -expectHeight,expectWidth, expectHeight);
                        //TODO

                    }


                };
                Reader.readAsDataURL(img);
            }
        })


    }



    // cameraRepair.getFile = function() {

    // };

    // cameraRepair.getDataUrl = function() {

    // };
    window.CameraRepair = cameraRepair;
})();