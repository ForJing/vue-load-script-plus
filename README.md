## install
> npm install vue-load-script-plus --save

## Usage
```javascript 1.6
// main.js
import Vue from 'vue'
import VueLoadScript from 'vue-load-script-plus'
Vue.use(VueLoadScript)
```

```vue
// someComponent.vue
<template>
<button @click="removeScriptTag"></button>
</template>
<script>
export default {
  mounted () {
    // load your script tag, if you don't need to set attributes on script tag,you can stop passing the second parameter
    this.$loadScript(
      'http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js',
      {
        'data-appid': 'APPID',
        'data-redirecturi': 'REDIRECTURI',
        'charset': 'utf-8'
      }
    ).then(() => {
      // do your logic
    })
  },
  methods: {
    // remove script tag from head
    removeScriptTag () {
      this.$unloadScript('http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js')
    }
  }
}
</script>
// generated script tag would be
// <script type="text/javascript" async="" src="http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js" data-appid="APPID" data-redirecturi="REDIRECTURI" charset="utf-8"></script>
```
