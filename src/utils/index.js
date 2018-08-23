/**
 * Created by gyx on 18/03/16.
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
    var d = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    return d.getFullYear() + '年'+ parseInt(d.getMonth() + 1) + '月' + d.getDate() + '日 ' + d.getHours() + '时' + d.getMinutes() + '分'

}
export function formatTimes(time, option) {
    var d = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    return d.getFullYear() + '年'+ parseInt(d.getMonth() + 1) + '月' + d.getDate() + '日 ' + d.getHours() + '时' + d.getMinutes() + '分'+d.getSeconds() + "秒";

}

export function getNowFormatDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year +  month +  strDate;
        return currentdate;
}

export function myQuery(selector) { //这个函数就是对外提供的接口。
  //调用这个函数的原型对象上的_init方法，并返回
  return myQuery.prototype._init(selector);
}
myQuery.prototype = {
  /*初始化方法，获取当前query对象的方法*/
  _init: function(selector) {
    if (typeof selector == "string") {
      //把查找到的元素存入到这个原型对象上。
      this.ele = window.document.querySelector(selector);
      //返回值其实就是原型对象。
      return this;
    }
  },
  /*单击事件：
   * 为了规避click的300ms的延迟，自定义一个单击事件
   * 触发时间：
   *   当抬起手指的时候触发
   *   需要判断手指落下和手指抬起的事件间隔，如果小于500ms表示单击时间。
   *
   *   如果是大于等于500ms，算是长按时间
   * */
  tap: function(handler) {
    this.ele.addEventListener("touchstart", touchFn);
    this.ele.addEventListener("touchend", touchFn);

    var startTime,
      endTime;

    function touchFn(e) {
      e.preventDefault()
      switch (e.type) {
        case "touchstart":
          startTime = new Date().getTime();
          break;
        case "touchend":
          endTime = new Date().getTime();
          if (endTime - startTime < 500) {
            handler.call(this, e);
          }
          break;
      }
    }
  },
  /**
   * 长按
   * @param handler
   */
  longTag: function(handler) {
    this.ele.addEventListener("touchstart", touchFn);
    this.ele.addEventListener("touchmove", touchFn);
    this.ele.addEventListener("touchend", touchFn);
    var timerId;

    function touchFn(e) {
      switch (e.type) {
        case "touchstart": //500ms之后执行
          timerId = setTimeout(function() {
            handler.call(this, e);
          }, 500)
          break;
        case "touchmove":
          //如果中间有移动也清除定时器
          clearTimeout(timerId)
          break;
        case "touchend":
          //如果在500ms之内抬起了手指，则需要定时器
          clearTimeout(timerId);
          break;
      }
    }
  },
  /**
   * 左侧滑动。
      记录手指按下的左边，在离开的时候计算 deltaX是否满足左滑的条件
   *
   */
  slideLeft: function(handler) {
    this.ele.addEventListener("touchstart", touchFn);
    this.ele.addEventListener("touchend", touchFn);
    var startX, startY, endX, endY;

    function touchFn(e) {
      e.preventDefault();
      var firstTouch = e.changedTouches[0];
      switch (e.type) {
        case "touchstart":
          startX = firstTouch.pageX;
          startY = firstTouch.pageY;
          break;
        case "touchend":
          endX = firstTouch.pageX;
          endY = firstTouch.pageY;
          //x方向移动大于y方向的移动，并且x方向的移动大于25个像素，表示在向左侧滑动
          if (Math.abs(endX - startX) >= Math.abs(endY - startY) && startX - endX >= 25) {
            handler.call(this, e);
          }
          break;
      }
    }
  },
  /**
   * 右侧滑动。
   *
   */
  rightLeft: function(e) {
    //TODO:
  }
}
