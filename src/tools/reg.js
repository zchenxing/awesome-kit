export const _reg = {
    
    /**
     * 验证不能包含字母
     * @param {string} value 
     */
    isNoWord: function(value) { 
        return /^[^A-Za-z]*$/g.test(value)
    },

    /**
     * 验证中文和数字
     * @param { string } value
     */
    isCHNAndEN: function(value) {
        return /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);
    },

    /**
     * 验证邮政编码(中国)
     * @param {string} value 
     */
    isPostcode: function(value) {
        return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);
    },

    /**
     * 验证16进制颜色
     * @param {string} value 
     */
    isColor16: function(value) {
        return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);
    },


    /**
     * 验证统一社会信用代码
     * @param {string} value 
     */
    isCreditCode: function(value) {
        return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);
    },

    /**
     * 验证email(邮箱)
     * @param {*} value 
     */
    isEmail: function(value) {
        return /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);
    },

    /**
     * 验证身份证号(1代,15位数字)
     * @param {*} value 
     */
    isIDCardOld: function(value) {
        return /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);
    },

    /**
     * 验证身份证号(2代,18位数字)
     * @param {*} value 
     */
    isIDCardNew: function(value) {
        return /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);
    },

    /**
     * 验证身份证
     * @param {string} value 
     */
    isIDCard: function(value) {
        return /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);
    },

    /**
     * 验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
     * @param {string} value 
     */
    isWebAccount: function(value) {
        return /^[a-zA-Z]\w{4,15}$/g.test(value);
    },

    /**
     * 验证中文/汉字
     * @param {string} value 
     */
    isChineseCharacter: function(value) {
        return /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);
    },

    /**
     * 验证小数
     * @param {string} value 
     */
    isDecimal: function(value) {
        return /^\d+\.\d+$/g.test(value);
    },

    /**
     * 验证数字
     * @param {string} value 
     */
    isNumber: function(value) {
        return /^\d{1,}$/g.test(value);
    },

    /**
     * 验证数字和字母组成
     * @param {string} value 
     */
    isNumAndStr: function(value) {
        return /^[A-Za-z0-9]+$/g.test(value);
    },

    /**
     * 验证英文字母
     * @param {*} value 
     */
    isEnglish: function(value) {
        return /^[a-zA-Z]+$/g.test(value);
    },

    /**
     * 验证大写英文字母
     * @param {*} value 
     */
    isUppercase: function(value) {
        return /^[A-Z]+$/g.test(value);
    },

    /**
     * 验证小写英文字母
     * @param {string} value 
     */
    isLowercase: function(value) {
        return /^[a-z]+$/g.test(value);
    },
    
    /**
     * 只能是中文、数字、字母
     */
    isChar: function(value) {
        return /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(value)
    }
}
