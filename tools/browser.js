export const _browser = {

    // 当前URL
    currentURL: window.location.href,
    

    /**
     * 获取url参数（第一种）
     * @param {string} name 
     */
    getUrlParam: function(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = null;
        if (origin == null) {
            r = window.location.search.substr(1).match(reg);
        } else {
            r = origin.substr(1).match(reg);
        }
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    },

    /**
     * 获取url参数（第二种）
     * @param {*} value 
     */
    getUrlParams: function(name) {
        let url = location.href;
        let temp1 = url.split('?');
        let pram = temp1[1];
        let keyValue = pram.split('&');
        let obj = {};
        for (let i = 0; i < keyValue.length; i++) {
            let item = keyValue[i].split('=');
            let key = item[0];
            let value = item[1];
            obj[key] = value;
        }
        return obj[name];
    },


    /**
     * 修改url中的参数
     * @param {string} paramName 参数名
     * @param {string} replaceWith 参数
     */
    replaceParamVal: function(paramName, replaceWith) {
        var oUrl = location.href.toString();
        var re=eval('/('+ paramName+'=)([^&]*)/gi');
        location.href = oUrl.replace(re,paramName+'='+replaceWith);
        return location.href;
    },

    /**
     * 删除url中指定的参数
     * @param {*} name 
     */
    funcUrlDel: function(name) {
        var loca =location;
        var baseUrl = loca.origin + loca.pathname + "?";
        var query = loca.search.substr(1);
        if (query.indexOf(name)>-1) {
            var obj = {};
            var arr = query.split("&");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].split("=");
                obj[arr[i][0]] = arr[i][1];
            }
            delete obj[name];
            var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
            return url
        }
    },


    /**
     * 开启全屏
     * @param {*} element 
     */
    launchFullscreen: function(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen()
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen()
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullScreen()
        }
    },


    /**
     * 关闭全屏
     */
    exitFullscreen: function() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    },

    /**
     * 检查页面底部是否可见
     */
    bottomVisible: function() {
        return document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight || document.documentElement.clientHeight);
    }
}