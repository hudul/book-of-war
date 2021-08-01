export enum IboundarySymbol{
  '{}' = 1,
  '[]',
  '()',
  '（）',
  '<>',
  '《》',
  '【】',
  '/',
  '&'
}
enum IdoubleSingle {
  'single' = 1,
  'double' = 2
} 

interface ISymbolsBaseItem{
  name:IboundarySymbol,
  type:IdoubleSingle,
  left:string,
  right:string
}
interface IBoundarySymbolsItem{
  name:IboundarySymbol | string,
  rules:{
    type:IdoubleSingle,
    like:string,
    ruleL:string,
    symbolL:string,
    ruleR:string,
    symbolR:string,
    regL:string,
    regR:string
  }
}



export interface IcontentReplace {
  defaultSymbolsBase:Array<{name:IboundarySymbol,type:IdoubleSingle,left:string,right:string}>
  defaultBoundarySymbols:Array<IBoundarySymbolsItem>
  defaultSymbolsBaseGen():void
  init():void
  defaultBoundarySymbolsGen():void
  boundarySymbolMacth():void
  boundarySymbolMacth():void
  boundarySymbolGen():void
  excludeMatchRoulesGen():void
  setContent(str:string):void
  genKeys():void
  getKeys():Array<string> | null
  genResult(prams:{[key:string]:string}):string
  setKeyValue(key:string,val:string):void
  setBoundarySymbolRepeat(repeat:number):void
  setBoundarySymbol(boundarySymbol:IboundarySymbol):void
  genExample():void
  getExample():string
}

const initData = {
  content:'我叫{{name}}，性别{{gender}}，今天{{age}}岁，来自{{address}}，目前工作是{{work}}',
  boundarySymbolRepeat:2,
  boundarySymbol:IboundarySymbol['{}'],
  excludeMatchRoules:[],
  replaceData: null
}

export class ContentReplace implements IcontentReplace {
  protected content:string
  protected result:string
  protected boundarySymbol:IboundarySymbol | string
  protected baseMatchRoule:string = '.'
  protected excludeMatchRoules:Array<string>
  protected excludeMatchRoulesStr:string = ''
  protected boundarySymbolRepeat:number = 2
  protected replaceData:{[key:string]:string} | null
  defaultBoundarySymbols:Array<IBoundarySymbolsItem> = []
  protected curBoundarySymbol:IBoundarySymbolsItem = this.defaultBoundarySymbols[0]
  protected keys: Array<string> | null = null
  protected example:string = ''
  protected isChangeContent:boolean = false
  defaultSymbolsBase:Array<ISymbolsBaseItem> = [
    // {
    //   name:IboundarySymbol['{}'],
    //   type: IdoubleSingle['double'],
    //   left:'{',
    //   right:'}'
    // },
    // {
    //   name:IboundarySymbol['[]'],
    //   type: IdoubleSingle['double'],
    //   left:'[',
    //   right:']'
    // },
    // {
    //   name:IboundarySymbol['()'],
    //   type: IdoubleSingle['double'],
    //   left:'(',
    //   right:')'
    // },
    // {
    //   name:IboundarySymbol['（）'],
    //   type: IdoubleSingle['double'],
    //   left:'（',
    //   right:'）'
    // },
    // {
    //   name:IboundarySymbol['<>'],
    //   type: IdoubleSingle['double'],
    //   left:'<',
    //   right:'>'
    // },
    // {
    //   name:IboundarySymbol['《》'],
    //   type: IdoubleSingle['double'],
    //   left:'《',
    //   right:'》'
    // },
    // {
    //   name:IboundarySymbol['【】'],
    //   type: IdoubleSingle['double'],
    //   left:'【',
    //   right:'】'
    // },
    // {
    //   name:IboundarySymbol['/'],
    //   type: IdoubleSingle['single'],
    //   left:'/',
    //   right:'/'
    // },
    // {
    //   name:IboundarySymbol['&'],
    //   type: IdoubleSingle['single'],
    //   left:'&',
    //   right:'&'
    // },
  ]
  private regFun = (type:string):RegExp =>{
    //console.log(this.curBoundarySymbol)
    return new RegExp(this.curBoundarySymbol.rules.regL+type+this.curBoundarySymbol.rules.regR,'g')
  }
  constructor(
    prams:{
      content:Exclude<string,''>,
      boundarySymbolRepeat?:number,
      boundarySymbol?:IboundarySymbol | string,
      excludeMatchRoules?:Array<string>,
      replaceData?:{[key:string]:string} | null
    }
  ){
    const {
      content,
      boundarySymbolRepeat=2,
      boundarySymbol=IboundarySymbol["{}"],
      excludeMatchRoules=[],
      replaceData= null
    } = prams
    this.result = this.content = content
    this.boundarySymbolRepeat = boundarySymbolRepeat
    this.boundarySymbol = boundarySymbol
    this.excludeMatchRoules = excludeMatchRoules
    this.replaceData = replaceData
    this.init()
  }

  //对象new完后，如何让这个init函数自动执行
  init = () => {
    this.excludeMatchRoulesGen()
    this.defaultSymbolsBaseGen()
    this.defaultBoundarySymbolsGen()
    this.curBoundarySymbol = this.defaultBoundarySymbols[0]
    this.boundarySymbolMacth()
    this.genExample()
    this.genKeys()
  }
  setContent = (str:string) =>{
    this.content = this.result = str
    this.isChangeContent = true
    this.genKeys()
  }
  setBoundarySymbolRepeat = (repeat:number) => {
    this.boundarySymbolRepeat = repeat
    this.defaultBoundarySymbolsGen()
    this.boundarySymbolMacth()
    this.genExample()
    this.genKeys()
  }
  setBoundarySymbol = (boundarySymbol:IboundarySymbol) => {
    this.boundarySymbol = boundarySymbol
    this.boundarySymbolMacth()
    this.genExample()
    this.genKeys()
  }
  defaultSymbolsBaseGen = () => {
    let IboundarySymbolLen = 0
    let indexs:Array<number> = []
    let strs = []
    let result = []
    for (const key in IboundarySymbol) {
      if(isNaN((key as any))){
        let res = key.split('')
        strs.push({
          cur:key,
          left:res[0],
          right:res.length === 2 ? res[1] : res[0]
        })
        
      }else{
        IboundarySymbolLen ++
        indexs.push(Number(key))
      }
    }
    result = strs.map((item,index):ISymbolsBaseItem=>{
      let obj = {
        ...item,
        name:IboundarySymbol[(item.cur as any)] as unknown as IboundarySymbol,
        type:item.left === item.right ? IdoubleSingle['single'] : IdoubleSingle['double']
      }
      let {cur,...objTemp} = obj
      return objTemp
    })
    this.defaultSymbolsBase = result
  }
  defaultBoundarySymbolsGen = () => {
    this.defaultBoundarySymbols = []
    this.defaultSymbolsBase.forEach(item=>{
      this.defaultBoundarySymbols.push({
        name: item.name,
        rules:{
          type:item.type,
          like: `${this.baseMatchRoule}[^\\${item.left}\\${item.right}${this.excludeMatchRoulesStr}]\*`,
          ruleL: `(?<=\\${item.left}{${this.boundarySymbolRepeat}})`,
          ruleR: `(?=\\${item.right}{${this.boundarySymbolRepeat}})`,
          symbolL: this.genRepeatSymbolStr(item.left),
          symbolR: this.genRepeatSymbolStr(item.right),
          regL: `\\${item.left}{${this.boundarySymbolRepeat}}`,
          regR: `\\${item.right}{${this.boundarySymbolRepeat}}`
        }
      })
    })
  }
  boundarySymbolMacth = () => {
    let falg = false
    this.defaultBoundarySymbols.forEach(item=>{
      //console.log(item.name,this.boundarySymbol)
      if(item.name === this.boundarySymbol){
        this.curBoundarySymbol = item
        falg = true
        return
      }
      if(falg) return
    })
    if(falg) return
    this.boundarySymbolGen()
  }
  boundarySymbolGen = () => {
    let symbolStr = ''
    if(typeof this.boundarySymbol === 'string'){
      symbolStr = this.boundarySymbol
    }else{
      symbolStr = this.boundarySymbol = this.boundarySymbol.toString()
    }
    this.curBoundarySymbol = {
      name:this.boundarySymbol,
      rules:{
        type:IdoubleSingle['single'],
        like: `${this.baseMatchRoule}[^\\${this.boundarySymbol}${this.excludeMatchRoulesStr}]\*`,
        ruleL: `(?<=\\${this.boundarySymbol}{${this.boundarySymbolRepeat}})`,
        ruleR: `(?=\\${this.boundarySymbol}{${this.boundarySymbolRepeat}})`,
        symbolL: this.genRepeatSymbolStr(this.boundarySymbol),
        symbolR: this.genRepeatSymbolStr(this.boundarySymbol),
        regL: `\\${this.boundarySymbol}{${this.boundarySymbolRepeat}}`,
        regR: `\\${this.boundarySymbol}{${this.boundarySymbolRepeat}}`
      }
    }
  }
  excludeMatchRoulesGen = () =>{
    if(this.excludeMatchRoules.length){
      this.excludeMatchRoules.forEach(i=>{
        this.excludeMatchRoulesStr += '\\'+i
      })
    }
  }
  genKeys = () => {
    //console.log(this.curBoundarySymbol.rules.ruleL + this.curBoundarySymbol.rules.like + this.curBoundarySymbol.rules.ruleR)
    let myKeys = this.content.match(new RegExp(this.curBoundarySymbol.rules.ruleL + this.curBoundarySymbol.rules.like + this.curBoundarySymbol.rules.ruleR,'g'))
    if(this.curBoundarySymbol.rules.type === IdoubleSingle['single']){
      let tempKeys = myKeys?.filter((item,index)=>index % 2 === 0)
      this.keys = tempKeys ? tempKeys : null
    }else{
      this.keys = myKeys
    }
  }
  getKeys = ():Array<string> | null => {
    return this.keys
  }
  genResult = (prams:{[key:string]:string} | null):string => {
    this.replaceData = prams
    if(this.keys && prams){
      Array.from(new Set(this.keys)).forEach(key=>{
        if(this.replaceData?.hasOwnProperty(key) && this.replaceData[key]){
          //console.log(this.regFun(key),this.replaceData?.[key])
          this.result =  this.result.replace(this.regFun(key),this.replaceData?.[key])
        }
      })
    }
    //console.log('prams:',prams,'\n','result:',this.result)
    return this.result
  }
  setKeyValue = (key:string,val:string):void =>{
    Array.from(new Set(this.keys)).forEach(key => {
      if(key === key){
        this.result =  this.result.replace(this.regFun(key),val)
      }
    })
  }
  genRepeatSymbolStr = (symbol:string):string => {
    let arr = [symbol]
    for(let i=1 ; i< this.boundarySymbolRepeat; i++){
      arr.push(symbol)
    }
    return arr.join('')
  }
  genExample = ():void => {
    const strL = this.curBoundarySymbol.rules.symbolL
    const strR = this.curBoundarySymbol.rules.symbolR
    let str = `示例：我叫${strL}name${strR}，性别${strL}gender${strR}，今天${strL}age${strR}岁，来自${strL}address${strR}，目前工作是${strL}work${strR}`
    this.example = str
    if(!this.isChangeContent){
      this.content = this.result = str
    }
  }
  getExample = ():string => {
    return this.example
  }
}


export const urlKeyReplaceFun = (url:string,prams:{[key:string]:any}):string => {
  const ruleLike = '.[^\/\{\}\&\?]*'
  let difftUrl:string = url
  const keys = url.match(new RegExp('(?<=\{\{)' + ruleLike + '(?=\}\})','g'))
  const regFun = (type:string):RegExp =>{
    return new RegExp('{{'+type+'}}','g')
  }
  if(keys){
    Array.from(new Set(keys)).forEach(key=>{
      if(prams.hasOwnProperty(key) ){
        difftUrl =  difftUrl.replace(regFun(key),prams[key])
      }
    })
    //console.log('keys:',keys,'\n','url:',url,'\n','difftUrl:',difftUrl)
  }
  return difftUrl
}