<template>
  <div class="home">
    <h2>内容替换</h2>
    <div class="contentBox">
      <textarea class="content" v-model="content" @input="onContentChange" :placeholder="example"></textarea>
      <div class="arrowBox">
        <el-button icon="el-icon-arrow-right" round size="mini" disabled></el-button>生成key
      </div>
      <div class="keysBox">
        <ul v-if="replaceData?.length">
          <li v-for="(item,index) in replaceData" :key="index" class="keyItem">
            <span>{{item.key}}</span>
            <el-input type="text" size="medium" v-model="item.value" placeholder="请输入内容"></el-input>
          </li>
        </ul>
        <div v-else class="noConent">
          请先在内容区域输入需要替换的文本内容，识别成功后，将自动生成key关键词
        </div>
      </div>
    </div>
    
    <div class="tools">
      <dl>
        <dt>边界符号：</dt>
        <dd>
          <el-select v-model="curBoundarySymbol" placeholder="请选择" @change="onChangeSymbol">
            <el-option
              v-for="item in boundarySymbols"
              :key="item.name"
              :label="item.rules.symbolL + 'key' +item.rules.symbolR"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </dd>
      </dl>

      <dl>
        <dt>边界符重复次数：</dt>
        <dd>
          <el-select v-model="boundarySymbolRepeat" placeholder="请选择" @change="onChangeSymbolRepeat">
            <el-option
              v-for="item in 5"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </dd>
      </dl>
      <el-button type="primary" @click="handelReplace" :disabled="!keys?.length">替换</el-button>
    </div>

    <div class="example" v-show="0">
      <p>{{example}}</p>
    </div>

    <el-dialog
      title="提示"
      v-model="centerDialogVisible"
      width="30%"
      destroy-on-close
      center>
      <span>{{result}}</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="copyToClipboard">拷贝到剪切板</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onUpdated } from 'vue';
import { ContentReplace, IboundarySymbol, IcontentReplace } from '@/utils/'
import { ElMessage } from 'element-plus'
import useClipboard from 'vue-clipboard3'


interface Idata{
  content:string,
  result:string,
  keys:Array<string> | null,
  replaceData: Array<{key:string,value:string}>,
  example: string,
  curBoundarySymbol: IboundarySymbol,
  boundarySymbols:IcontentReplace['defaultBoundarySymbols'],
  boundarySymbolRepeat: number,
  centerDialogVisible:boolean
}
interface IboundarySymbolObj{
  label:string,
  value:IboundarySymbol
}
interface InewContentReplaceConfig{
  content: Idata['content'],
  curBoundarySymbol: Idata['curBoundarySymbol'],
  boundarySymbolRepeat: Idata['boundarySymbolRepeat'],
}

export default defineComponent({
  name: 'Home',
  setup(){
    const { toClipboard } = useClipboard()
    let contentRep : IcontentReplace | null = null

    const data = reactive<Idata>({
      content:'',
      result:'',
      keys: null,
      replaceData: [],
      example:'',
      curBoundarySymbol: IboundarySymbol['{}'],
      boundarySymbolRepeat: 2,
      centerDialogVisible: false,
      boundarySymbols: []
    })

    const newContentReplaceConfig = reactive<InewContentReplaceConfig>({
      content:data.content,
      curBoundarySymbol: data.curBoundarySymbol,
      boundarySymbolRepeat: data.boundarySymbolRepeat,
    })

    const onContentChange = (e: any) =>{
      contentRep || newContentReplace()
      if(contentRep){
        contentRep.setContent(data.content)
        genKeysInfo()
      }
    }

    const onChangeSymbol = (e:any) => {
      contentRep || newContentReplace()
      if(contentRep){
        contentRep.setBoundarySymbol(data.curBoundarySymbol)
        let oldExample = data.example
        data.example = contentRep.getExample()
        if(data.content === oldExample){
          data.content = data.example
        }
        genKeysInfo()
      }
    }

    const onChangeSymbolRepeat = (e:any) => {
      contentRep || newContentReplace()
      if(contentRep){
        contentRep.setBoundarySymbolRepeat(data.boundarySymbolRepeat)
        data.boundarySymbols = contentRep.defaultBoundarySymbols
        let oldExample = data.example
        data.example = contentRep.getExample()
        if(data.content === oldExample){
          data.content = data.example
        }
        genKeysInfo()
      }
    }

    const handelReplace = () =>{
      contentRep || newContentReplace()
      if(contentRep){
        let obj:{[key:string]:string} = {}
        data.replaceData.forEach(item=>{
          obj[item.key] = item.value
        })
        data.result = contentRep.genResult(obj)
        data.centerDialogVisible = true;
      }
    }

    const copyToClipboard = async() => {
      try {
        await toClipboard(data.result)
        ElMessage.success({
          message: '复制成功',
          type: 'success'
        });
        data.centerDialogVisible = false
      } catch (e) {
        ElMessage.error({
          message: e,
          type: 'error'
        });
      }
    }

    const genKeysInfo = () => {
      if(contentRep){
        data.keys = contentRep.getKeys()
      }
      data.replaceData = []
      if(data.keys){
        data.keys.forEach(element => {
          data.replaceData.push({
            key:element,
            value:''
          })
        })
      }
    }

    const newContentReplace = () => {
      contentRep = new ContentReplace({...newContentReplaceConfig})
      data.example = contentRep.getExample()
    }

    onMounted(() => {
      newContentReplace()
      if(contentRep){
        data.boundarySymbols = contentRep.defaultBoundarySymbols
        data.content = data.example = contentRep.getExample()
        genKeysInfo()
        contentRep.defaultSymbolsBaseGen()
      }
    })

    return {
      ...toRefs(data),
      onContentChange,
      handelReplace,
      copyToClipboard,
      onChangeSymbol,
      onChangeSymbolRepeat
    }
  }
});
</script>

<style lang="scss" scoped>
  .home{
    padding: 50px 100px;
    box-sizing: border-box;
    .contentBox{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 300px;
      .content{
        width: calc(70% - 100px);
        height: 100%;
        border-radius: 3px;
        border: 5px solid #eee;
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;
        font-size: 14px;
        color: #666;
        resize: none;
        
      }
      textarea::placeholder{
        color: #ccc;
      }
      .arrowBox{
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #999;
        font-size: 12px;
        button{
          margin-bottom: 5px;
          color: #ccc;
          cursor: initial;
        }
      }
      .keysBox{
        width: 30%;
        height: 100%;
        border-radius: 3px;
        border: 1px dashed #eee;
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;
        font-size: 14px;
        color: #666;
        .noConent{
          color: #aaa;
          font-size: 12px;
          padding: 30px;
          box-sizing: border-box;
        }
        ul{
          padding: 0;
          margin: 0;
          overflow-y: auto;
          height: 100%;
          .keyItem{
            margin-bottom: 10px;
            span{
              margin-bottom: 3px;
            }
          }
          li{
            display: flex;
            flex-direction: column;
          }
          
        }
      }
    }
    
    .tools{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      dl{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 30px;
        height: 40px;
        line-height: 40px;
      }
      dt{
        color: #666;
        font-size: 14px;
      }
      button{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30%;
        height: 40px;
      }
    }

    .example{      
      p{
        color: #999;
        font-size: 12px;
        line-height: 24px;
        margin: 0;
      }
    }
  }
  @media screen and (max-width:1200px) {
    .home{
      .tools{
        padding-bottom: 100px;
        justify-content: space-between;
        dl{
          margin-right: 0;
        }
        button{
          top: auto;
          bottom: 10px;
          left: 0;
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width:1024px) {
    .home{
      .contentBox{
        flex-direction: column;
        height: auto;
        .content{
          width: 100%;
          height: 200px;
        }
        .arrowBox{
          width: 100%;
        }
        .keysBox{
          width: 100%;
          .noConent{

          }
          ul{
            li{

            }
          }
        }
      }
      .tools{
        dl{

        }
        
      }
    }
  }
  @media screen and (max-width:812px) {
    .home{
      padding: 20px;
      .tools{
        
      }
    }
  }
  @media screen and (max-width:768px) {
    .home{
      .tools{
        flex-direction: column;
        dl{
          width: 100%;
          justify-content: space-between;
          dd{
            margin-left: 0;
          }
        }
        
      }
    }
  }
</style>