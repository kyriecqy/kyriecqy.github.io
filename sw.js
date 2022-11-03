/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/04/22/Vue2/2.png","21dde176e9aeeb5713e7b45beb7916cf"],["/2022/04/22/Vue2/3.png","05f55f0feae365dca8bdeb0202b4e43c"],["/2022/04/22/Vue2/4.png","195893639432a9d308ba4f4a11989426"],["/2022/04/22/Vue2/5.png","f916bcc47b74066d1a43280f6a94ceea"],["/2022/04/22/Vue2/6.png","42009b2fb129a61f3ce64c303060c6ff"],["/2022/04/22/Vue2/7.png","1e0c3289988df5538be993d22343687a"],["/2022/04/22/Vue2/8.png","aba2df64d912f52bf271fce80b622b9e"],["/2022/04/22/Vue2/actions.png","2543251b867557174cebb12cb67c2fa2"],["/2022/04/22/Vue2/index.html","6ef8cb2358db232418fb032b301ba6c8"],["/2022/04/22/Vue2/mapState1.png","e59f883dbe027e0bd4e2171d36b617ad"],["/2022/04/22/Vue2/second.jpg","f8a2dd344e1c86735199d1e771613cea"],["/2022/04/22/Vue2/vuex.png","288a0dc913bab3fe765baf18fb4bac27"],["/2022/04/22/Vue2/生命周期1.png","47638dbdb6707c72fe83e7c55ffa27f2"],["/2022/04/22/Vue2/生命周期2.png","0cce51e3f0eb35174c8c9acf8cd410ad"],["/2022/04/22/Vue2/生命周期3.png","8e7f6000252ce3fcdb38da9d29cab8ff"],["/2022/04/22/Vue2/路由守卫1.png","1b4c17ce6545a02e02aa7e29e79e35ee"],["/2022/04/22/Vue2/路由守卫2.png","3fe8e22ae1ebbe6191b2a77a4f0ee3eb"],["/2022/04/26/Vue3/customRef.png","640f4c18fed4273e65dd1a6a3a3a3594"],["/2022/04/26/Vue3/index.html","25698f5aaa0d7d669afbd98466569b31"],["/2022/04/26/Vue3/provide.png","be055e0f9a83166daabf6ee82556fd9b"],["/2022/04/26/Vue3/reactive.png","ef0a831866dc7f3733dd6c52e8b20628"],["/2022/04/26/Vue3/ref.png","55b7292c0a9f7fc93e268b47cbed13dc"],["/2022/04/26/Vue3/ref2.png","f83b6e9bc8b4e09dbd7bef1ef5eee250"],["/2022/04/26/Vue3/setup.png","9e08cfd898900fd3756dc003d93852a8"],["/2022/04/26/Vue3/setup2.png","97d2e7c9e6a03ebbd4b27b14bfb1c71d"],["/2022/04/26/Vue3/setup3.png","a323d60d64072742686e1a6c8bcd7d73"],["/2022/04/26/Vue3/teleport.gif","0a3575f20fbd09cb48b508ce4d5b5d9c"],["/2022/04/26/Vue3/teleport.png","4102f0456aac31b4228099f506da3777"],["/2022/04/26/Vue3/toRaw.png","376071cf50d6efac7f1bf91ae476f3fc"],["/2022/04/26/Vue3/toRef.png","432705078fa8ce6cf35dcd707bf1b740"],["/2022/04/26/Vue3/toRef2.png","809536ddddb2898aa4c15e4a7283f3a2"],["/2022/04/26/Vue3/toRef3.png","f6d26b761d27cde434de73c523478b19"],["/2022/04/26/Vue3/toRef4.png","dd758fadf024dc239510a8e026059bd2"],["/2022/04/26/Vue3/toRefs.png","274d337e464a58d7e8c68ad10fa53365"],["/2022/04/26/Vue3/watch.png","76506ed688770fb43c655ce50804a824"],["/2022/04/26/Vue3/watch2.png","e68834ade7745c0f6dbf3fc7e8d983f6"],["/2022/04/26/Vue3/watch3.png","5a6075af6b8f237e73cafa2f2594bb92"],["/2022/04/26/Vue3/watch4.png","3f009cc230dba38f9cb4642a0bd4b254"],["/2022/04/29/NodeJs/cookie.png","7ca236e04cdee36f86d5a95f3aadf3cc"],["/2022/04/29/NodeJs/get.png","71214c9acce6151a67da44fbfdf98b33"],["/2022/04/29/NodeJs/index.html","1da514a897de1c0795695d3ebb5c3487"],["/2022/04/29/NodeJs/json.png","1b2e23059dfe494fb439f9ab0dded653"],["/2022/04/29/NodeJs/jwt.png","3a4db244754ac021dfa80f8c8440a12b"],["/2022/04/29/NodeJs/params.png","80e22503d1054fc4b7fece6476a252dc"],["/2022/04/29/NodeJs/post.png","3eac70c02b06f6e0163f4fb9a3e71f87"],["/2022/04/29/NodeJs/query.png","044c6ce085680d114d94eaee8f89c85f"],["/2022/04/29/NodeJs/session.png","4a98fabc3bfa1a6ad1b341df14f062ca"],["/2022/04/29/NodeJs/static.png","701ba4aae0ec7a745a9bf51509c6817d"],["/2022/04/29/NodeJs/urlencoded.png","74cc949974d6e01ab708d7173f0b189c"],["/2022/04/29/NodeJs/web.png","7a7ae227c0b21a1dd3c9e4aefe37f831"],["/2022/04/29/NodeJs/中间件.png","2ca9340cafa2d78d678d05324d32417b"],["/2022/04/29/NodeJs/接口1.png","c788ef7b4fde19b9180d785afdeee8fd"],["/2022/04/29/NodeJs/接口2.png","6a41d8e8853a61020a0cbad1356ae553"],["/2022/04/29/NodeJs/自定义.png","19dcd0dae4f5bb64fc4902a5e54398da"],["/2022/04/29/NodeJs/自定义2.png","11f68dcc54296bd8d711b0e820af41d2"],["/2022/04/29/NodeJs/跨域.png","9dc980f159799efe27cb9469ba339c2e"],["/2022/04/29/NodeJs/跨域2.png","73f47e3942976e2655b9026a6adc2f96"],["/2022/05/07/球馆管理系统/add.png","eea06ea5d1934fc21619f4b02b4d71f6"],["/2022/05/07/球馆管理系统/home.png","8d9df4c48d5c7cc26b0a5344270b0b07"],["/2022/05/07/球馆管理系统/index.html","9fbbcdaee1120f9fee65122a720c8af4"],["/2022/05/07/球馆管理系统/login.png","fe85931c6cece0be773fc5d72b973786"],["/2022/05/07/球馆管理系统/money.png","a2ca62d520065d94f8fbfae43a555aab"],["/2022/05/07/球馆管理系统/register.png","15f3db70bc733e4647cc8375b40b34df"],["/2022/05/07/球馆管理系统/user.png","450f44d2085e9e5adb20933ca6381198"],["/2022/05/08/Vue源码之mustache模板引擎/final.png","56d389a27a0aa572aa15aed5d0e4a624"],["/2022/05/08/Vue源码之mustache模板引擎/index.html","b79c0271ce6233e8c775c96022edc9e8"],["/2022/05/08/Vue源码之mustache模板引擎/join.png","401aeae92a563b44cb5c06b53845145d"],["/2022/05/08/Vue源码之mustache模板引擎/lookup.png","29d1a4542b02f46650b550b000349ce0"],["/2022/05/08/Vue源码之mustache模板引擎/mustache.png","050dde7ed429c694865a0b39da7c984c"],["/2022/05/08/Vue源码之mustache模板引擎/mustache2.png","c893874bf78213ef9b19dc6a5ba23de2"],["/2022/05/08/Vue源码之mustache模板引擎/mustache3.png","3552bacdb7071cb0cb4c2427ddf2d7e8"],["/2022/05/08/Vue源码之mustache模板引擎/mustache4.png","cf5a37b867b1e71bb16a70273605b919"],["/2022/05/08/Vue源码之mustache模板引擎/mustache5.png","6b3318050614dd596616ec12ccc66172"],["/2022/05/08/Vue源码之mustache模板引擎/mustache6.png","0d5b4375ca3266d4901accec57c4c104"],["/2022/05/08/Vue源码之mustache模板引擎/parseArray.png","92d23491b5919302f64dc5b514fcaa5e"],["/2022/05/08/Vue源码之mustache模板引擎/renderTemplate1.png","734dcbe70b612954a015155e267eb6f2"],["/2022/05/08/Vue源码之mustache模板引擎/scanner.png","981afd5ea547f40538f7308e0fe6f1a0"],["/2022/05/08/Vue源码之mustache模板引擎/templateToTokens1.png","85d9ab31348dfa9576786bf72331064d"],["/2022/05/08/Vue源码之mustache模板引擎/templateToTokens2.png","f5f8e8a2d92d2df3398e40aacf2eb186"],["/2022/05/08/Vue源码之mustache模板引擎/嵌套1.png","aba93e48f01c98a3b2b34ded2ef3fa50"],["/2022/05/08/Vue源码之mustache模板引擎/嵌套2.png","cdd3c72857462eb1260f7d19cbd2b2da"],["/2022/05/08/Vue源码之mustache模板引擎/嵌套3.png","7583ee7bdc758684e9e8ecc0b32fd4cb"],["/2022/05/08/Vue源码之mustache模板引擎/嵌套4.png","068f12cfdcf5ff7021b2e9d653e568ec"],["/2022/05/08/Vue源码之mustache模板引擎/点语法.png","2cb5e978db50ed53f87180b8f9c55a05"],["/2022/05/08/Vue源码之mustache模板引擎/点语法3.png","508b466795d158922506e22e5a949488"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff.gif","a6ad2970d92f9345cf78b8316a2c1929"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff.png","5bee0a73f87c86271354a7e162dee171"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff2.gif","348fce8e3b5f1594b70ce2e9e31e6622"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff2.png","2bb7208d7e5302589791956950cd7ad3"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff3.gif","bf7dffae5e3e2732d49616959081a488"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff3.png","4bb76ca6043e892c0d3825a727b0d665"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff4.gif","8262f86aaad471e6907a9eef171aadfd"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff4.png","cdcd33c221fe0c207582715fd99c148d"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff5.gif","4cdfbbdbe02e9754d78646dd9aa99f09"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff5.png","219380e642ed3d6701dcb57db06256a2"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff6.gif","26a9eee06f42b1c7452cf8bbdee2d275"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff7.gif","7706093c05cb52f4a776d65dd5b7e7c9"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/diff8.gif","d893191d58f95027251adc3cfe938192"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/h.png","3b97d7c4a28f7ff9805b41ad182fd8e6"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/index.html","94113127caee27eaaf210961973563f1"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/删除.gif","fe83ecbbc8fe3b7dbc3dd2475e26f7a9"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/情况3.gif","f50d3c3d2e9add2cb284fc40f9760d32"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/情况4.gif","3ac0e6c1353596d999360c7b47f21fbd"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/新增.gif","5459c99a560cf434dd2877e14109326e"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/虚拟dom.png","1b781096074efed11e35d3541f6f9974"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/虚拟dom2.png","099976aab4099031cddef0b2dfa5f424"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/虚拟dom3.png","4c253f7d7b2eaadcf8e820d83bfe80ae"],["/2022/05/11/Vue源码之虚拟DOM和diff算法/虚拟dom4.png","116d1f40f035b0bb58dee4ae5d10f1b6"],["/2022/05/15/Vue源码之数据响应式原理/array.png","c432eb1884396a9ed9f3edd8c67ad985"],["/2022/05/15/Vue源码之数据响应式原理/array2.png","d32e921ac648655c560ef1343b0d75f3"],["/2022/05/15/Vue源码之数据响应式原理/index.html","6126c88a96ba798d8f7f148bed0aa36d"],["/2022/05/15/Vue源码之数据响应式原理/obj.png","da42496b3ed906135e40f267b3ddd98b"],["/2022/05/15/Vue源码之数据响应式原理/obj2.png","0afdfa49b3b38845275e53171fe36593"],["/2022/05/15/Vue源码之数据响应式原理/obj3.png","c7f6d5a00f88947d5d480d412dc4d410"],["/2022/05/15/Vue源码之数据响应式原理/obj4.png","f6d41458193fe70b60475cf874ce70f5"],["/2022/05/15/Vue源码之数据响应式原理/obj5.png","c6ea33a75c59c18c3c95a83092446915"],["/2022/05/15/Vue源码之数据响应式原理/obj6.png","53736d1cb2a5d1dce8f1c59e3a835950"],["/2022/05/15/Vue源码之数据响应式原理/observe.png","571bd77ecd8d6b253a3819ac5f5e1293"],["/2022/05/15/Vue源码之数据响应式原理/observe2.png","033ad16e0a62bd823a80418668bb3911"],["/2022/05/15/Vue源码之数据响应式原理/依赖收集.png","9262f780f3d4185891b0b53f1d805f38"],["/2022/05/15/Vue源码之数据响应式原理/数组.png","3823edc6e3574506f6fcc4b0076ce8a2"],["/2022/05/29/Vue源码之AST抽象语法树/ast1.png","a2db6552e8e8d1219538bb3c241ecdaa"],["/2022/05/29/Vue源码之AST抽象语法树/ast2.png","4f125f11778ca9ff812bab84660265da"],["/2022/05/29/Vue源码之AST抽象语法树/ast3.png","c78fe8c21a4a7b1d61d40391564fdead"],["/2022/05/29/Vue源码之AST抽象语法树/ast4.png","6b11b8f7d1deb38195d37341ec3a0c5c"],["/2022/05/29/Vue源码之AST抽象语法树/ast5.png","663ccc4d7674d62454b84342cc53f8ed"],["/2022/05/29/Vue源码之AST抽象语法树/ast6.png","195cd53825b372acb2df6a6822d06404"],["/2022/05/29/Vue源码之AST抽象语法树/ast7.png","bbe7b4b9f403ae0bb532a2e87156cef6"],["/2022/05/29/Vue源码之AST抽象语法树/ast8.png","09614f602aeb2e242122905d0d8890c1"],["/2022/05/29/Vue源码之AST抽象语法树/ast9.png","03d3d75589b77cf088b7325e998a0c7f"],["/2022/05/29/Vue源码之AST抽象语法树/attrs.png","8e3a2ac2ba02d778bb98d49b0689a992"],["/2022/05/29/Vue源码之AST抽象语法树/index.html","a692e9db7902627cbdd56565da113298"],["/2022/05/29/Vue源码之AST抽象语法树/parse.png","214553b898d44fe3792ce13231cab014"],["/2022/05/29/Vue源码之AST抽象语法树/parse2.png","a542c56b8a960c8f043ad0d3bb53e86a"],["/2022/05/29/Vue源码之AST抽象语法树/原理1.png","06c3dba61a7238c44a3ea694830c07fc"],["/2022/05/29/Vue源码之AST抽象语法树/原理2.png","ad6b0c8b267f06f7be727fd20c8edf6c"],["/2022/05/29/Vue源码之AST抽象语法树/原理3.png","cf907c5dbe4b656ee68f094b514233d3"],["/2022/05/29/Vue源码之AST抽象语法树/原理4.png","91ccb31ada93e31b20adb07ab3578562"],["/2022/05/29/Vue源码之AST抽象语法树/原理5.png","604d15cb56e1297b62f29d45a70a816d"],["/2022/05/30/Vue源码之指令与生命周期/attr.png","59053578165706a0b1acb35dd08c7b9d"],["/2022/05/30/Vue源码之指令与生命周期/attrs.png","4878c929c613d92afc61a21e01bed3df"],["/2022/05/30/Vue源码之指令与生命周期/compileText.png","b387779fe816ea742a36bed0d01569b4"],["/2022/05/30/Vue源码之指令与生命周期/dir.png","2e778776adcc7ed8ba7adbfac908560e"],["/2022/05/30/Vue源码之指令与生命周期/fragment.png","5c84ba75f600c95ac02c1676a026089b"],["/2022/05/30/Vue源码之指令与生命周期/index.html","8f969c32d1a19c4ec1e4ee6236f8e0c8"],["/2022/05/30/Vue源码之指令与生命周期/input1.png","08a250c2d468a4a0588da1ef43021fe0"],["/2022/05/30/Vue源码之指令与生命周期/watch.gif","85565c63628ef6e90a17d1c4d7330ef9"],["/2022/05/30/Vue源码之指令与生命周期/watch.png","534b9b95fc08e89721ea1a9d9ad73ee5"],["/2022/05/30/Vue源码之指令与生命周期/ym.png","c38026103fbd7feec762542d06f23ece"],["/2022/05/31/Webpack基础/babel.png","29503f7c04f775e1b4855d8f4d46a419"],["/2022/05/31/Webpack基础/babel2.png","0cdadd38f07f4b23afca4f654c8dbf7d"],["/2022/05/31/Webpack基础/css.png","cb0cf4ea2161b38cf351827f0e435a1c"],["/2022/05/31/Webpack基础/css2.png","b63e7b299ff476d0e103327030e08c54"],["/2022/05/31/Webpack基础/css3.png","6f44f3125927eb7b1ca4063396b0651c"],["/2022/05/31/Webpack基础/css4.png","c1597b82a112c23f04863572696e160b"],["/2022/05/31/Webpack基础/css5.png","1c55d6933c534346b0f66f980c93532f"],["/2022/05/31/Webpack基础/dist.png","c987755f081d5c5f1573ab4e73fde430"],["/2022/05/31/Webpack基础/dist2.png","60504134fa80bded63b55b133304a49b"],["/2022/05/31/Webpack基础/dist3.png","df2d2faed550d189aac07008edb42561"],["/2022/05/31/Webpack基础/html.png","9b40499675449dfd8e092b9068dc212b"],["/2022/05/31/Webpack基础/html2.png","1b0fc7ffad2a333f805e53aa053684d5"],["/2022/05/31/Webpack基础/index.html","7f289fafc1feac70fd03a52d39178c2a"],["/2022/05/31/Webpack基础/index.png","07522b490d78c01afb4d2382d191e5a6"],["/2022/05/31/Webpack基础/ml.png","bb0c029b8b5c509190d705dde1c654f6"],["/2022/05/31/Webpack基础/开发模式.png","8e03ec1c4392d1d59098470c8dc1712f"],["/2022/05/31/Webpack基础/生产模式.png","3258f136f7d7485be7292c072b845136"],["/2022/05/31/Webpack基础/目录.png","0d0d3ac1956f10f0e1581ad103409bc0"],["/2022/06/02/Webpack高级/dist.png","6cefcdddee40f0744b34caeff2c6c997"],["/2022/06/02/Webpack高级/entry.png","3410f120a369ebb58580a9611f6e4806"],["/2022/06/02/Webpack高级/hmr.png","b6611b562d8ef370b7a827dfaebb8522"],["/2022/06/02/Webpack高级/index.html","70840683b2811751a0bb4f9c6d151b02"],["/2022/06/02/Webpack高级/开发模式.png","8e03ec1c4392d1d59098470c8dc1712f"],["/2022/06/02/Webpack高级/报错.png","7c07bc3c05cd3001ef098f3eaa737c93"],["/2022/06/02/Webpack高级/报错2.png","6b380f7f1b29644abf0be5caf5b702cc"],["/2022/06/04/Webpack配置Vue-cli/index.html","b79bf321b6a771ec08512edbb16af3ba"],["/2022/06/04/Webpack配置Vue-cli/kzt.png","47674f1686731eaf736b212f6c68f79b"],["/2022/06/04/Webpack配置Vue-cli/vue.png","9d1204fed49a871c894631799381a904"],["/2022/06/04/Webpack配置Vue-cli/目录.png","160b503196692ee3ff255e7be9824cd4"],["/2022/06/05/TypeScript/index.html","02e96371d8cbc4371827e2e00bbb99f4"],["/2022/06/05/TypeScript/tl.png","348861daf120835237ab5645a31fc4a2"],["/2022/06/05/TypeScript/tl2.png","f230aebc20a50ce62298f3090a7f70e2"],["/2022/06/05/TypeScript/ts.png","7b4c0b12972362fe9db459c7c16f8afe"],["/2022/06/05/TypeScript/ts2.png","5755c6bcdd5274320ac9f72c13447c82"],["/2022/06/05/TypeScript/ts3.png","f6078e51ba3ef20f002b51793b075b20"],["/2022/06/11/现代JavaScript/index.html","f961564cb90a591b98fea83ca7a64af7"],["/2022/06/11/现代JavaScript/ljhs.png","03f85a9ce11498bd17f4a772b4f1c839"],["/2022/06/11/现代JavaScript/ljhs2.png","0f8d5e7f5f83e8e99088de6bd7fae5f1"],["/2022/06/11/现代JavaScript/ljhs3.png","4851381048759c1845571f1cb6eedfac"],["/2022/06/11/现代JavaScript/ljhs4.png","0f81e1473f42f43249dce5c9e4d8a3c2"],["/2022/06/11/现代JavaScript/obj.png","63601ba1c1ca7e5eadb48d809f100ae0"],["/2022/06/11/现代JavaScript/obj2.png","84193e85c8d5f1e7d29da669b409d93b"],["/2022/06/11/现代JavaScript/obj3.png","3eeea55a5b20d6d5c85500a53a77b97f"],["/2022/06/22/数据结构/bst.png","3381b2816b2583e694179c98b68b72fb"],["/2022/06/22/数据结构/bst2.png","bf60e9c9ef2c2ff9f90f1ce2c01dbf61"],["/2022/06/22/数据结构/bst3.png","1c8c4c5e3b4bd31add0b902a40ac6027"],["/2022/06/22/数据结构/bst4.png","6231d8e72beb17c6a227fc69f58120ec"],["/2022/06/22/数据结构/bubble1.png","f2ea16932e970113fadc61ef58fea6fc"],["/2022/06/22/数据结构/hash.png","dadd44486a62b2bbfc6df7de89eef0d6"],["/2022/06/22/数据结构/hash2.png","7c051f4e020d8a10ad20d3b242ab1893"],["/2022/06/22/数据结构/hash3.png","a57b09e83375844a427dcd5e319a7486"],["/2022/06/22/数据结构/hhs.png","179cbc157dafc7860ec7385c55841c58"],["/2022/06/22/数据结构/hhs2.png","016efb42033c717853dc06e4c2acb226"],["/2022/06/22/数据结构/hhs3.png","646cd74e726dd9c8ea2eb3f4bfd798c0"],["/2022/06/22/数据结构/hhs4.png","2ae2c228fb5dc5962cc0f3acaaeefaa7"],["/2022/06/22/数据结构/hhs5.png","4e7fab2825580de2486f065ada5088b7"],["/2022/06/22/数据结构/hhs6.png","8532eefc5d2079998b816a19405ccd76"],["/2022/06/22/数据结构/hhs7.png","bf83e55a98731611a2e45e713e4d8f46"],["/2022/06/22/数据结构/index.html","e2444699b633ac68f91237ee9fbb73c7"],["/2022/06/22/数据结构/selection.png","c0237dab7611a0c96f631d7abb756f78"],["/2022/06/22/数据结构/tu.png","78f6f34dd8daf704f9d7596694e2562d"],["/2022/06/22/数据结构/tu2.png","e6effc3c1e7a00329c15769720ddaf85"],["/2022/07/07/Grid布局/1.png","69caf5be0580651124a80023805a4c3d"],["/2022/07/07/Grid布局/10.png","20a57ea3c6a7b6c378bf2b3af4d809f3"],["/2022/07/07/Grid布局/11.png","31172d2973b612fa2875348b6487c51b"],["/2022/07/07/Grid布局/2.png","f30d768094ca3742a4cb65a681552cae"],["/2022/07/07/Grid布局/3.png","a73b0bd62db64d0d16f20bab1614e45d"],["/2022/07/07/Grid布局/4.png","0536dad643e479801a4688ee77de5860"],["/2022/07/07/Grid布局/5.png","722d8235e3f40e3197dee23fdc5110c8"],["/2022/07/07/Grid布局/6.png","f9a77980345c1cb54799d2fd07cbe325"],["/2022/07/07/Grid布局/7.png","18bfa97649cfc885af4203c2a3364d21"],["/2022/07/07/Grid布局/8.png","bb3b4ba7fe0ed593d1d6c9a694154773"],["/2022/07/07/Grid布局/9.png","2b73aa127109508ff2460a7ce03099f0"],["/2022/07/07/Grid布局/index.html","e5ccc8e82edb72169c11fa52d0c2c385"],["/2022/08/01/Vue3源码之响应式原理/1.png","cab4b1450bb73bc46b5d08ae0d9bd8bc"],["/2022/08/01/Vue3源码之响应式原理/index.html","e140422acc04abc3a2c7351709195ed8"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/2.png","af129ac2cdfe5353071939ffc81f0b95"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/3.png","e5d223e562c31cf2d3aae38e3329ed53"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/4.png","636ba5f1cffc8a387cd8a1b0bcdc63e8"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/5.png","c7425dbf7cbe3dbd3be6e472705292f4"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/6.png","c3f2a67c04e37c9ae9be809bd4f70637"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/7.png","231eda5f5994861fae1d24cb92f33c57"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/8.png","9a95571ad2facc0ee215e4acb2d8d12f"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/9.png","7e6f278f288569d67db0e3ef38d09573"],["/2022/08/12/Vue3源码之虚拟DOM和diff算法/index.html","453b60f95c680de54f02e9f6520f6be0"],["/2022/08/16/Vue3源码之组件/index.html","a5fedeedbb306a514b250ac0ac02f8be"],["/2022/08/19/Vue3源码之模板编译原理/1.png","b11432142f45f8bb9a5a82f4dd619f08"],["/2022/08/19/Vue3源码之模板编译原理/2.png","406a2b41f7b975d2f126df60a1a90973"],["/2022/08/19/Vue3源码之模板编译原理/3.png","e1a8a6e7dcd78a7475e501a10f300e4e"],["/2022/08/19/Vue3源码之模板编译原理/4.png","fc69d96f14336dc4b4535c02aa9b3873"],["/2022/08/19/Vue3源码之模板编译原理/5.png","64332fd002b29e4686744f5703126e48"],["/2022/08/19/Vue3源码之模板编译原理/6.png","cdda275e91684eaee2243b019ea5142c"],["/2022/08/19/Vue3源码之模板编译原理/index.html","7ff9751f55e6ba02e5dc65eea42b26d0"],["/2022/09/10/Vite/1.png","7cbe1e15add5d54a899e17de2121de1d"],["/2022/09/10/Vite/10.png","f9cb91f79e03815b6a0d5c13c218e299"],["/2022/09/10/Vite/11.png","3759e66890698bf8e7ae6439112cccdb"],["/2022/09/10/Vite/12.png","be0c3442a33214c9840ae85db050a6c7"],["/2022/09/10/Vite/13.png","8beb5696c80ed220d40ab4c0f5c595c9"],["/2022/09/10/Vite/14.png","49175258a747e4aa775d228d68f6dca4"],["/2022/09/10/Vite/15.png","d312a2e49e1b91fb3eeb8608c87c7465"],["/2022/09/10/Vite/16.png","a8d69b5227d28901385d2cb4282328d0"],["/2022/09/10/Vite/17.png","d674fd9220797986e8fe58677417d25e"],["/2022/09/10/Vite/18.png","2eabb9fdda9028d3b28cee644c13b1e3"],["/2022/09/10/Vite/19.png","abded546525362a94999c4b4856d26af"],["/2022/09/10/Vite/2.png","9cc3492ad380e3aeecb6da26762c637b"],["/2022/09/10/Vite/20.png","abdd992dde4f77e1b7879b16ac0c42f4"],["/2022/09/10/Vite/21.png","b680ac45305f74de96a90914b59bf781"],["/2022/09/10/Vite/3.png","404fa5223819e38373201823e74b050b"],["/2022/09/10/Vite/4.png","9b726dbf197de21d21ab6a6623706d19"],["/2022/09/10/Vite/5.png","2a138f5f418125f3b2a7659973584d62"],["/2022/09/10/Vite/6.png","14a5ae9d2900b2dc9c34bd6cd5b865bc"],["/2022/09/10/Vite/7.png","16a5d266fc599287402151ef2cee7261"],["/2022/09/10/Vite/8.png","605de796efdd66b97e07491749569c7e"],["/2022/09/10/Vite/9.png","0a81e3478a4355d210cfe7fe7a982f8a"],["/2022/09/10/Vite/index.html","fe76b149b204f2b523bd0100ba6ceaf9"],["/2022/09/19/设计模式/1.png","80ae62ee021a7ebb281d114e49fa080d"],["/2022/09/19/设计模式/index.html","a88c2562791772233a41c3e96254316b"],["/2022/09/24/V8引擎/1.png","6c877624f321e405d18d177efa01c498"],["/2022/09/24/V8引擎/2.png","62f9a27f532049a99815f08d56c57089"],["/2022/09/24/V8引擎/3.png","66239a61d2cc78e5154d0afad6578281"],["/2022/09/24/V8引擎/index.html","1b48c4f48950c78a44a8dc01043f9285"],["/2022/09/26/Algorithm/1.png","3f9d4b3ece6093a0ecd002e926e13137"],["/2022/09/26/Algorithm/2.png","b0f784303c2a14077ef607dad38d396e"],["/2022/09/26/Algorithm/3.png","29a97f9a2d09ba57ac9b02a47c04998d"],["/2022/09/26/Algorithm/4.png","ea921ee88a515dd5c38946d57c7f6dde"],["/2022/09/26/Algorithm/5.png","8b7433e90eea108f6e4bec2961931f87"],["/2022/09/26/Algorithm/6.png","41f838b6a8886aa840d62261b7aa0114"],["/2022/09/26/Algorithm/7.png","31d44dd17ee6c6b7a4bd03f5d6e2f4eb"],["/2022/09/26/Algorithm/index.html","331b71758bc979f98e557ae2656866c8"],["/2022/10/09/Nodejs进阶/1.png","4ba0d88681658fc438d16245f7330cf7"],["/2022/10/09/Nodejs进阶/2.png","946d97d706242765fec0cc82c7c84702"],["/2022/10/09/Nodejs进阶/3.png","f8ca5250ae2abdaab7e735eccf82c5ee"],["/2022/10/09/Nodejs进阶/4.png","91e9be001d95dd0cc1a78139afdbe0cb"],["/2022/10/09/Nodejs进阶/5.png","fb8473a3d6423e2bd01b2acccf75d0c8"],["/2022/10/09/Nodejs进阶/6.png","19f4be4334a3965a0ae0920018848a2b"],["/2022/10/09/Nodejs进阶/7.png","67994d0307166d69cdd5b797e0b3a66c"],["/2022/10/09/Nodejs进阶/8.png","0842fee2d855075ad3d709e04285337a"],["/2022/10/09/Nodejs进阶/9.png","4b99b68f9b334e134e02aefa85ebcfc2"],["/2022/10/09/Nodejs进阶/index.html","80487f058063b287ea21959e30cd597b"],["/2022/10/25/Rust/1.png","158937a8f8c7b0a1a8d2c84d6847f647"],["/2022/10/25/Rust/index.html","3c21decc57c1f8169cc2a9bb22617300"],["/2022/11/01/手写Promise/1.png","cc46f9d40a084e0fa7185268978c14d8"],["/2022/11/01/手写Promise/10.png","9088a3c9344b61a99495c191bdd3ff3f"],["/2022/11/01/手写Promise/11.png","eaed27c8de9a685e4fe5ab4c612ed48f"],["/2022/11/01/手写Promise/12.png","ec503836988a6520e4732c75c5d11ea3"],["/2022/11/01/手写Promise/2.png","c9de0983342939f6801065c2411e84cc"],["/2022/11/01/手写Promise/3.png","640bcf5912005115e51be39b36c27b98"],["/2022/11/01/手写Promise/4.png","a12e9cf7388c53adae99e6be0692951e"],["/2022/11/01/手写Promise/5.png","693f69d7962491960fafddd29eb9fba7"],["/2022/11/01/手写Promise/6.png","94a23f4518e0e179476fd34e5c18d944"],["/2022/11/01/手写Promise/7.png","e8bcae40fce748b81adedd8ee475f272"],["/2022/11/01/手写Promise/8.png","fb6203cda99fc991a3e2bab4ab36c7c0"],["/2022/11/01/手写Promise/9.png","bd96777c44c40713ea3b71dadab91f28"],["/2022/11/01/手写Promise/index.html","f8fd7bdeebb1bca7a2e9178fc1368773"],["/archives/2022/04/index.html","2a661dce4c0343e1f42c398ab5ef934a"],["/archives/2022/05/index.html","455e3a0b5fd458c7a77f85477bd1fe6a"],["/archives/2022/06/index.html","7e0a67e8d8e4635545c6e7352d21d4b2"],["/archives/2022/07/index.html","20bab48f3ec3760334dd023ce36822da"],["/archives/2022/08/index.html","cf83758108d41d51cde42e34fb54569b"],["/archives/2022/09/index.html","4aa4c30c10ad77a885fba17286fd8cb9"],["/archives/2022/10/index.html","ea3271d838fb9d9e9ad2275bdc8c5ba1"],["/archives/2022/11/index.html","e776d06292d18c46eef86348e67ba5ec"],["/archives/2022/index.html","191b8137322eda4ee71d705609d91f2c"],["/archives/2022/page/2/index.html","d9bee80634799785d98003830d251cdc"],["/archives/2022/page/3/index.html","70111e1d6a7b8dba7c4113d05d82df35"],["/archives/index.html","76e70b5a0f524658a892ca47df4b0534"],["/archives/page/2/index.html","227b8eba5a7648b090e9292fe0f890c2"],["/archives/page/3/index.html","46f53f56aa776d7fc7f10d8f7d4a3eae"],["/categories/CSS/index.html","f0e203e673aa825cd88c5ef64d73685e"],["/categories/JS/index.html","f58afe09d1087e9afbbe825f7d85d0cb"],["/categories/Node-js/index.html","19d2602dde5be4568aa0b670cb5c775d"],["/categories/Rust/index.html","5f87426cdf570c6ce69705c764693b2b"],["/categories/TypeScript/index.html","83603b1a3b61bf83528ec836e0e20ac4"],["/categories/V8引擎/index.html","4e7218fb014ebb263f223cb63a8731af"],["/categories/Vue/index.html","63e0e5101963b47593a0407ce659812a"],["/categories/Vue源码/index.html","bc389149da29be632a7759ca177dc359"],["/categories/index.html","76bc8cefa297a2037de4bef433d67701"],["/categories/数据结构与算法/index.html","0fa10f78d407f40db6e62d78e7a7cbbc"],["/categories/构建工具/index.html","134339906ae3ad3908af95d909846f0c"],["/categories/设计模式/index.html","324bd8625ac20f3e90c39f3757d3544c"],["/categories/项目/index.html","7d32d6d7f6c9d3c5d5b0da0bd74fa3c0"],["/css/index.css","dabb9fe5228719b9adaaf54c76fa3a5a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/bg2.jpg","1090550050c3ece6183500902971bdea"],["/images/bg3.jpg","eaffe2a75c91607203aed777bfd3e865"],["/images/bg4.jpg","9778da44b170c2f9896def2c813ed06a"],["/images/bg5.jpg","918e81a15538061616cb2d08fe1ca98e"],["/images/bg6.jpg","d7e73e909781f05eb5ceb3deb75ca075"],["/images/bg7.jpg","9f084162049a510293606a73c7b10285"],["/images/bg8.jpg","d445f4bf09d5fbc4ccaac3b387a48d9b"],["/images/irving.jpg","cda934e799a8866e538bedb13414f39c"],["/images/logo.jpg","c14ec6677d3c3201bd53640bd47d529d"],["/img/404.jpg","6708d92b33a76bc8759e3832d89cc5bc"],["/img/favicon.png","36d29e8f6745454abb81c5a5e9ea176a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/irving.jpg","bf0df9b10307cdcb632d4c24030f1f29"],["/index.html","12bee4d21546c078e35372b735953a3a"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","d36a279469bce7854189f9481d3d0860"],["/js/search/local-search.js","4f79884e04a163f9348c3961cf84d50e"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/page/2/index.html","f9c23d0cb285d92254acfc32bcf3fdae"],["/page/3/index.html","16f8927e2c139aab57d95777d42310d1"],["/sw-register.js","e02dee418692aa23903dddd4ffcffbb9"],["/tags/CSS/index.html","eb22886feaaaaa05de2fb5b55782aa0b"],["/tags/JS/index.html","82d2a2d21c6fa37e9c046a099c1333ee"],["/tags/Node-js/index.html","0acb2daf1dbacdfa114f1c4fac6a4b69"],["/tags/Rust/index.html","7aa8e89afcb8df432f0f4b3c753bd66a"],["/tags/TypeScript/index.html","a52cef00867149380448613f4ba329ba"],["/tags/V8引擎/index.html","34caf6c0e26d5788cc2b2df45fc65e33"],["/tags/Vue-框架/index.html","0662e9664519b626d4d85568ca475171"],["/tags/Vue源码/index.html","775ff6456fdce2155d75343e13837a9e"],["/tags/index.html","97efe3549ba59fb70e91fbbf8fdb28ef"],["/tags/后台管理系统/index.html","a451e504d8b86d1ae582cfb651a9f8b4"],["/tags/数据结构与算法/index.html","671e8b641f39482b2a1675fa8f51ea3b"],["/tags/构建工具/index.html","dfe20780e17c046590d6f010639dd6d1"],["/tags/设计模式/index.html","80bbd5eb9a4dac7328dc223f3ce11323"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
