
<template>
<div class="md-example-child md-example-child-field md-example-child-field-0">
  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="patch3"></div>
  <md-field title="">
    <div>

      <md-field-item name="item0" class="border-b" title="商务合作" arrow="arrow-right" value="" align="right">
        <button slot="right" class="tag-read" data-clipboard-text="bd@acgame.one" @click="copy" style="z-index: 1000;background: none;border: none;position: absolute;left: -10px;top: 0; width: 100%;height: 53px;text-align: right;">bd@acgame.one</button>
        <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
      </md-field-item>
    </div>
    <md-field-item name="item0" class="border-b" title="简历投递" arrow="arrow-right" value="" align="right">
      <button class="tag-read" data-clipboard-text="hr@acgame.one" @click="copy" style="z-index: 1000;background: none;border: none;position: absolute;left: -10px;top: 0; width: 100%;height: 53px;text-align: right;">hr@acgame.one</button>
      <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
    </md-field-item>
    <md-field-item name="item0" class="border-b" title="客服邮箱" arrow="arrow-right" value="" align="right">
      <button class="tag-read" data-clipboard-text="support@acgame.one" @click="copy" style="z-index: 1000;background: none;border: none;position: absolute;left: -10px;top: 0; width: 100%;height: 53px;text-align: right;">support@acgame.one</button>
      <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
    </md-field-item>
    <md-field-item name="item0" class="border-b" title="微信公众号" arrow="arrow-right" value="" align="right">
      <button class="tag-read" data-clipboard-text="ACGame_Zone" @click="copy" style="z-index: 1000;background: none;border: none;position: absolute;left: -10px;top: 0; width: 100%;height: 53px;text-align: right;">ACGame_Zone</button>
      <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
    </md-field-item>
    <md-field-item name="item0" class="" title="客服微信号" arrow="arrow-right" value="" align="right">
      <button class="tag-read" data-clipboard-text="acg-future" @click="copy" style="z-index: 1000;background: none;border: none;position: absolute;left: -10px;top: 0; width: 100%;height: 53px;text-align: right;">acg-future</button>
      <i class="iconfont icon-right" slot="right" style="color:#bdbdbd"></i>
    </md-field-item>

  </md-field>
</div>
</template>
<script>
import {
  topNav
} from '@/views/layout/components'
import {
  Toast
} from 'mand-mobile'

import Clipboard from 'clipboard';


export default {
  name: 'field-demo',
  components: {
    topNav,
  },
  methods: {
    // onClick(name) {
    //   Toast({
    // content: '复制成功',
    //   })
    // }

    copy() {
      var clipboard = new Clipboard('.tag-read')
      clipboard.on('success', e => {
        console.log('复制成功')
        Toast({
          content: '复制成功',
        })
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
    },
    onClick(dom) {

      var clipboard = new this.Clipboard(dom);
      debugger
      clipboard.on('success', function(e) {
        Toast({
          content: '复制成功',
        })
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
      });

      clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
      });
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
<style>

</style>
