export const _tip = {

    /**
     * 金钱格式化，三位加逗号
     * @param {number | string} num 
     */
    formatMoney: function (num) {
        if (typeof num === 'string') {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },


    /**
     * base64转file
     *  @param { base64 } base64
     *  @param { string } filename 转换后的文件名
     */
    base64ToFile: function (base64, filename) {
        let arr = base64.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let suffix = mime.split('/')[1];// 图片后缀
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], `${filename}.${suffix}`, { type: mime })
    },

    /**
     * base64 转 blob
     * @param {base64} base64 
     */
    base64ToBlob: function (base64) {
        let arr = base64.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });

    },

    /**
     * blob转file
     * @param {blob} blob 
     * @param {string} fileName 
     */
    blobToFile: function (blob, fileName) {
        blob.lastModifiedDate = new Date();
        blob.name = fileName;
        return blob;
    },


    /**
     * file转base64
     * @param {*} file 
     */
    fileToBase64: function (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            return e.target.result
        };
    },


    /**
     * 递归生成树形结构
     * @param {*} data 
     * @param {*} pid 
     * @param {*} pidName 
     * @param {*} idName 
     * @param {*} childrenName 
     * @param {*} key 
     */
    getTreeData: function (data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children', key) {
        let arr = [];

        for (let i = 0; i < data.length; i++) {
            if (data[i][pidName] == pid) {
                data[i].key = data[i][idName];
                data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
                arr.push(data[i]);
            }
        }

        return arr;
    },


    /**
     * 遍历树节点
     * @param {*} data 
     * @param {*} childrenName 
     * @param {*} callback 
     */
    foreachTree: function (data, childrenName = 'children', callback) {
        for (let i = 0; i < data.length; i++) {
            callback(data[i]);
            if (data[i][childrenName] && data[i][childrenName].length > 0) {
                foreachTree(data[i][childrenName], childrenName, callback);
            }
        }
    },


    /**
     * 遍历树节点
     * @param {*} data 
     * @param {*} childrenName 
     * @param {*} callback 
     */
    foreachTree: function (data, childrenName = 'children', callback) {
        for (let i = 0; i < data.length; i++) {
            callback(data[i]);
            if (data[i][childrenName] && data[i][childrenName].length > 0) {
                foreachTree(data[i][childrenName], childrenName, callback);
            }
        }
    },


    /**
    * @param { function } func
    * @param { number } wait 延迟执行毫秒数
    * @param { boolean } immediate  true 表立即执行，false 表非立即执行
    */
    debounce: function (func, wait, immediate) {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;

            if (timeout) clearTimeout(timeout);
            if (immediate) {
                let callNow = !timeout;
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait);
                if (callNow) func.apply(context, args)
            }
            else {
                timeout = setTimeout(() => {
                    func.apply(context, args)
                }, wait);
            }
        }
    },



    /**
     * @param { function } func 函数
     * @param { number } wait 延迟执行毫秒数
     * @param { number } type 1 表时间戳版，2 表定时器版
     */
    throttle: function(func, wait ,type) {
        let previous, timeout;
        if(type === 1){
            previous = 0;
        }else if(type === 2){
            timeout = null;
        }
        return function() {
            let context = this;
            let args = arguments;
            if(type === 1){
                let now = Date.now();
    
                if (now - previous > wait) {
                    func.apply(context, args);
                    previous = now;
                }
            }else if(type===2){
                if (!timeout) {
                    timeout = setTimeout(() => {
                        timeout = null;
                        func.apply(context, args)
                    }, wait)
                }
            }
        }
    },
    

    /**
     * 加法函数（精度丢失问题）
     * @param {*} arg1 
     * @param {*} arg2 
     */
    mathOfAdd: function(arg1, arg2) {
        let r1, r2, m;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m
    },


    /**
     * 减法函数（精度丢失问题）
     * @param {*} arg1 
     * @param {*} arg2 
     */
    mathOfSub: function(arg1, arg2) {
        let r1, r2, m, n;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
    },


    /**
     * 除法函数（精度丢失问题）
     * @param {*} num1 
     * @param {*} num2 
     */
    mathOfDivision: function(num1,num2){
        let t1,t2,r1,r2;
        try{
            t1 = num1.toString().split('.')[1].length;
        }catch(e){
            t1 = 0;
        }
        try{
            t2 = num2.toString().split(".")[1].length;
        }catch(e){
            t2 = 0;
        }
        r1 = Number(num1.toString().replace(".",""));
        r2 = Number(num2.toString().replace(".",""));
        return (r1/r2) * Math.pow(10, t2 - t1);
    },
    

    /**
     * 乘法函数（精度丢失问题）
     * @param {*} num1 
     * @param {*} num2 
     */
    mathOfMul: function(num1,num2){
        let m = 0, s1 = num1.toString(), s2 = num2.toString();
        try{
            m+=s1.split(".")[1].length
        } catch(e){}
        try{
            m+=s2.split(".")[1].length
        } catch(e){}
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
    }
    

}


