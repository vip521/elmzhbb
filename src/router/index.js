import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import City from '@/components/city'
import History from '@/components/history'
import Answer from '@/components/answer'
import Login2 from '@/components/login2'
import Czmm from '@/components/czmm'
import Waimai from '@/components/zyb/waimai'
import Dianpu from '@/components/zyb/dianpu'
import Dpsp from '@/components/zyb/dpsp'
import Dppj from '@/components/zyb/dppj'
import Dpxq from '@/components/zyb/dpxq'
import Canpin from '@/components/zyb/canpin'
import Spaq from '@/components/zyb/spaq'
import Zhifu from '@/components/zyb/zhifu'
import Xzdz from '@/components/zyb/xzdz'
import Tjdz from '@/components/zyb/tjdz'
import Ssdz from '@/components/zyb/ssdz'
import Ddbz from '@/components/zyb/ddbz'
import Fptt from '@/components/zyb/fptt'
import Ddlb from '@/components/zyb/ddlb'
// 贵宾的
import  Sweet from '@/components/pgb/sweet'
import  Sosuo from '@/components/pgb/sosuo'
import  Dingdan from '@/components/pgb/dingdan'
// 亚非
import My from '@/components/yyf/my'
import Myxiangqing from '@/components/yyf/myxiangqing'
import Mybalance from '@/components/yyf/mybalance'
import Yueshuoming from '@/components/yyf/yueshuoming'
import Zhanghuxinxi from '@/components/yyf/zhanghuxinxi'
import Xiugaiyonghuming from '@/components/yyf/xiugaiyonghuming'
import Bianjidizhi from '@/components/yyf/bianjidizhi'
import Xinzengdizhi from '@/components/yyf/xinzengdizhi'
import Wodejifen from '@/components/yyf/wodejifen'
import Jifenshuoming from '@/components/yyf/jifenshuoming'
import Myyouhui from '@/components/yyf/myyouhui'
import Hongbao from '@/components/yyf/hongbao'
import Daijinquan from '@/components/yyf/daijinquan'
import Daijinquansm from '@/components/yyf/daijinquansm'
import Xiazai from '@/components/yyf/xiazai'
import Tuijianyoujiang from '@/components/yyf/tuijianyoujiang'
import Duihuanhongbao from '@/components/yyf/duihuanhongbao'
import Huiyuanzhongxin from '@/components/yyf/huiyuanzhongxin'
import Jifenshangcheng from '@/components/yyf/jifenshangcheng'
import Huiyuanshuoming from '@/components/yyf/Huiyuanshuoming'
import Zaixianzhifu from '@/components/yyf/zaixianzhifu'
import duihuanhuiyuan from '@/components/yyf/duihuanhuiyuan'

import Goumaijilu from '@/components/yyf/goumaijilu'
import Fuwuzhongxin from '@/components/yyf/fuwuzhongxin'

import Sousuodizhi from '@/components/yyf/sousuodizhi'
import Servicede from '@/components/yyf/servicede'

Vue.use(Router)

export default new Router({
  routes: [
    // 亚非
    {
      path: '/zhanghuxinxi',
      name: 'zhanghuxinxi',
      component: Zhanghuxinxi,
    },
    {
      path:'/my',
      name:'my',
      component:My,
      redirect:'/my/myxiangqing',
      children:[
        {
          path:'myxiangqing',
          name:'myxiangqing',
          component:Myxiangqing
        },
        {
          path: 'ddlb',
          name: 'ddlb',
          component: Ddlb
        },
        {
          path: '/sosuo',
          name: 'sosuo',
          component: Sosuo
        },
        {
          path:'waimai',
          name: 'waimai',
          component: Waimai
        }
      ]
    },
    {
      path: '/mybalance',
      name: 'mybalance',
      component: Mybalance,
    },
    {
      path: '/yueshuoming',
      name: 'yueshuoming',
      component: Yueshuoming,
    },
    {
      path: '/xiugaiyonghuming',
      name: 'xiugaiyonghuming',
      component: Xiugaiyonghuming,
    },
    {
      path: '/bianjidizhi',
      name: 'bianjidizhi',
      component: Bianjidizhi,
    },
    {
      path: '/xinzengdizhi',
    name: 'xinzengdizhi',
      component: Xinzengdizhi,
    },
    {
      path: '/wodejifen',
    name: 'wodejifen',
      component: Wodejifen,
    }
    ,
    {
      path: '/jifenshuoming',
    name: 'jifenshuoming',
      component: Jifenshuoming,
    },{
      path:'/myyouhui',
      name:'myyouhui',
      component: Myyouhui,
      redirect:'/myyouhui/hongbao',
      children:[
        {
          path: 'hongbao',
          name: 'hongbao',
          component: Hongbao,
        }
        ,{
          path: '/daijinquan',
          name: 'daijinquan',
            component: Daijinquan,
        }
      ]
    },
    {
      path: '/daijinquansm',
      name: 'daijinquansm',
        component: Daijinquansm,
    },
    {
      path: '/xiazai',
      name: 'xiazai',
        component: Xiazai,
    },
    {
      path: '/duihuanhongbao',
      name: 'duihuanhongbao',
        component: Duihuanhongbao,
    },
    {
      path: '/tuijianyoujiang',
      name: 'tuijianyoujiang',
        component: Tuijianyoujiang,
    },
    {
      path: '/jifenshangcheng',
      name: 'jifenshangcheng',
        component: Jifenshangcheng,
    },
    {
      path: '/huiyuanzhongxin',
      name: 'huiyuanzhongxin',
        component: Huiyuanzhongxin,
    },
    {
      path: '/huiyuanshuoming',
      name: 'huiyuanshuoming',
        component: Huiyuanshuoming,
    },
    {
      path: '/zaixianzhifu',
      name: 'zaixianzhifu',
        component: Zaixianzhifu,
    },
    {
      path: '/duihuanhuiyuan',
      name: 'duihuanhuiyuan',
        component: duihuanhuiyuan,
    },
    {
      path: '/goumaijilu',
      name: 'goumaijilu',
        component: Goumaijilu,
    },
    {
      path: '/fuwuzhongxin',
      name: 'fuwuzhongxin',
        component: Fuwuzhongxin,
    },
    {
      path: '/servicede',
      name: 'servicede',
        component: Servicede,
    },
    {
      path: '/sousuodizhi',
      name: 'sousuodizhi',
        component: Sousuodizhi,
    },
    // 贵宾
    {
      path: '/sweet',
      name: 'sweet',
      component: Sweet
    },
    {
        path: '/dingdan',
        name: 'dingdan',
        component: Dingdan
    },
    // 我的
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/waimai',
      name: 'waimai',
      component: Waimai
    },
    {
      path: '/ddlb',
      name: 'ddlb',
      component: Ddlb
    },
    {
      path: '/ddbz',
      name: 'ddbz',
      component: Ddbz
    },
    {
      path: '/fptt',
      name: 'fptt',
      component: Fptt
    },
    {
      path: '/tjdz',
      name: 'tjdz',
      component: Tjdz
    },
    {
      path: '/ssdz',
      name: 'ssdz',
      component: Ssdz
    },
    {
      path: '/xzdz',
      name: 'xzdz',
      component: Xzdz
    },
    {
      path: '/zhifu',
      name: 'zhifu',
      component: Zhifu
    },
    {
      path: '/spaq',
      name: 'spaq',
      component: Spaq
    },
    {
      path: '/canpin',
      name: 'canpin',
      component: Canpin
    },
    {
      path: '/dianpu',
      name: 'dianpu',
      component: Dianpu,
      redirect:"/dpsp",
      children:[
        {
          path:"/dpsp",
          name:"dpsp",
          component:Dpsp
        },
        {
          path:"/dppj",
          name:"dppj",
          component:Dppj
        }
      ]
    },
    {
      path: '/dpxq',
      name: 'dpxq',
      component: Dpxq
    },
    {
      path: '/login2',
      name: 'login2',
      component: Login2
    },
    {
      path: '/czmm',
      name: 'czmm',
      component: Czmm
    },
    {
      path: '/city',
      name: 'city',
      component: City,
      redirect:"/history",
      children:[
        {
          path:'/history',
          name:'history',
          component:History
        },
        {
          path:'/answer',
          name:'answer',
          component:Answer
        }
      ]
    }
  ]
})
