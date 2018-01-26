(function () {

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    function getOrientation(file, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
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
        var isFile = false,
            call = function () {
            };
        if (checkIsFunc(arguments[1])) {
            call = arguments[1];
        } else if (typeof arguments[1] === 'boolean') {
            isFile = !!arguments[1];
            if (checkIsFunc(arguments[2])) {
                call = arguments[2];
            }
        }
        getOrientation(img, function (orientation) {
            if (orientation === -2) {
                return console.error('The first parameter must be a picture');
            }
            var Reader = new FileReader();
            Reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function () {
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
                    } else {
                        expectWidth = naturalWidth;
                        expectHeight = naturalHeight;
                    }
                    canvas.width = expectWidth;
                    canvas.height = expectHeight;
                    switch (orientation) {
                        case 3:
                            ctx.rotate(180 * Math.PI / 180);
                            ctx.drawImage(image, -expectWidth, -expectHeight, expectWidth, expectHeight);
                            break;
                        case 6:
                            canvas.width = expectHeight;
                            canvas.height = expectWidth;
                            ctx.rotate(90 * Math.PI / 180);//把画布顺时针旋转90度
                            ctx.drawImage(image, 0, -expectHeight, expectWidth, expectHeight);
                            break;
                        case 8:
                            canvas.width = expectHeight;
                            canvas.height = expectWidth;
                            ctx.rotate(270 * Math.PI / 180);//把画布顺时针旋转270度
                            ctx.drawImage(image, -expectWidth, 0, expectWidth, expectHeight);
                            break;
                        default:
                            ctx.drawImage(image, 0, 0, expectWidth, expectHeight);
                    }
                    var base64 = canvas.toDataURL("image/jpeg", 0.8);
                    call(isFile ? dataURLToBlob(base64) : base64);
                }


            };
            Reader.readAsDataURL(img);

        })

    }

    function checkIsFunc(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]'
    }

    function dataURLToBlob(dataurl) {
        var bstr = atob(dataurl.split(',')[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: 'image/jpeg'});
    }

    window.CameraRepair = cameraRepair;
})();