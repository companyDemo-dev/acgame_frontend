import {
  Toast
} from 'mand-mobile'

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}


let verify = {
  nullFun: function(t) {
    return (t.use() === 'ch' ? 　"不能为空！" : " can not be empty!");
  },
  formatErrorFun: function(t) {
    return (t.use() === 'ch' ? 　"格式错误！" : " wrong format!");
  },
  fe: function(m, a, b) {
    return (m + "只能为" + (a + "") + " ~ " + (b + '') + "之间的数字！");
  },
  isIp: function(s) {
    var y = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    return y.test(s) ? true : false;
  },
  isMac: function(s) {
    var y = /^[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}$/;
    return y.test(s) ? true : false;
  },
  isNull: function(a) {
    return (a === "" || a === null || a === undefined ? true : false);
  },
  isNumber: function(a) {
    return !this.isNull(a) && !isNaN(a) ? true : false;
  },
  between: function(a, b, c) {
    return (!this.isNull(a) && !this.isNull(b) && !this.isNull(c) && this.isNumber(a) && this.isNumber(b) && this.isNumber(c) && b <= a && c >= a) ? true : false;
  },
  betweenN: function(a, b, c) {
    return (this.isNumberN(a) && this.isNumberN(b) && this.isNumberN(c) && b <= a && c >= a) ? true : false;
  },
  isNumberN: function(a) {
    return !isNaN(a) ? true : false;
  },
  checkEmail: function(str) {
    var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    return !re.test(str) ? true : false;
  },
  isPoneAvailable: function(str) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    return !myreg.test(str) ? true : false;
  },
  strlen10: function (str){
      var len = 0;
      for (var i=0; i<str.length; i++) {
       var c = str.charCodeAt(i);
      //单字节加1
       if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
         len++;
       }
       else {
        len+=2;
       }
      }
      debugger
      return len <= 20  ? false : true;
  }
}

function validaAddadress(str) {
  if (!str || verify.isNull(str.realName)) {
    Toast.failed('姓名不能为空')
    return false;
  }
  if (!str || verify.isNull(str.phone)) {
    Toast.failed('手机号不能为空')
    return false;
  }
  if (!str || verify.isPoneAvailable(str.phone)) {
    Toast.failed('不是11位有效手机号码！')
    return false;
  }
  if (!str || verify.isNull(str.address)) {
    Toast.failed('详细地址不能为空')
    return false;
  }
  return true;
}

function validaUserName(str) {
  if (!str || verify.strlen10(str.nickName)) {
    Toast.failed('昵称不能超过10个字！')
    return false;
  }
  return true;
}
function validawithdraw(str) {
  if (!str || verify.isNull(str)) {
    Toast.failed('金额不能为空!')
    return false;
  }
    if(str < 0.0001){
      Toast.failed('金额不能小于0.0001！')
      return false;
    }

  return true;
}

function validarecharge(str) {
  if (!str || verify.isNull(str)) {
    Toast.failed('金额不能为空!')
    return false;
  }
    if(str < 0.0001){
      Toast.failed('金额不能小于0.0001！')
      return false;
    }

  return true;
}
function validaTOdetail(str) {
  if (!str || verify.isNull(str)) {
    Toast.failed('提交人次必须大于0!')
    return false;
  }
    if(str <= 0){
      Toast.failed('提交人次必须大于0！')
      return false;
    }

  return true;
}

export default {
  validaAddadress,
  validaUserName,
  validarecharge,
  validawithdraw,
  validaTOdetail
}
