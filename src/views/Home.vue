<template>
  <div class="home">
    <input type="text" v-model="myURL" />
    <div class="btnGroup">
    <button @click="url = handelClickFun(myURL,prams)">点击事件函数</button>
    <button @click="url = handelClickClass(myURL,prams)">点击事件类</button>
    </div>
    <div class="int">
      <span>{{myURL}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { urlKeyReplaceFun, ContentReplace } from '@/utils/'

enum Isex{
  'boy',
  'gire'
}
interface Idata{
  userInfo:{
    name:string,
    age:number,
    sex:Isex
  },
  isshow:boolean,
  urlChange:{
    prams:{[key:string]:any}
    myURL:string, 
    handelClickFun(url:string,prams:{[key:string]:any}):void, 
    handelClickClass(url:string,prams:{[key:string]:any}):void
  }
}

export default defineComponent({
  name: 'Home',
  setup(prop){
    const userInfo = reactive<Idata['userInfo']>({
      name:'liuhaibing',
      age:11,
      sex:Isex.boy
    })

    let isshow = ref<Idata['isshow']>(true)
    const urlChange = reactive<Idata['urlChange']>({
      prams:{
        token: 'liuhaibing',
        code: 13282148886,
        age: 12
      },
      myURL: 'https://app.mokahr.com/login_by/cas/{{code}}/primecaregroup?returnUrl=http%3A%2F%2Fhelper-api.test.primecare.top%3A8090%2Fminiprogram%2Fmoka%2Fticket&role=interviewer&ticket={{token}}/{{code}}&code={{code}}&age={{age}}',
      handelClickFun: (url,prams) => {
        urlChange.myURL = urlKeyReplaceFun(url,prams)
      },
      handelClickClass: (url,prams) => {
        const urlClass = new ContentReplace({
          content:url,
          replaceData:prams,
          boundarySymbolRepeat:2
        })
        if(urlClass.getKeys()){
          urlChange.myURL = urlClass.getResult()
        }
      }
    })
    

    return {
      ...toRefs(userInfo),
      ...toRefs(urlChange),
      isshow
    }
  },
  components: {

  },
});
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btnGroup{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button{
    border:1px solid rgba($color: #3a3de0, $alpha: 0.5);
    width: 200px;
    height: 50px;
    border-radius: 3px;
    color: #3a3de0;
    background-color: #fff;
    cursor: pointer;
    margin: 20px;
  }
  input{
    width: 90%;
    height: 50px;
    border-radius: 3px;
    border: 1px solid #eee;
    background-color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    color: #999;
  }
  .int{
    pointer-events: none;
    span{
      // transform: rotate(-45deg);
      //transform: translateY(-50px);
      //color: rgba($color: #999, $alpha: .1);
      //font-weight: bold;
      // transform-origin: center;
      font-size: 11px;
      transform: scale(.1);
      // filter: invert(1) hue-rotate(180deg);
      // mix-blend-mode:difference
    }
  }
</style>