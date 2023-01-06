import { DEFAULT_LAYOUT } from '../base'

const Data = {
  component: DEFAULT_LAYOUT,
  children: [
    {
      path: '/data',
      name: 'DataManage',
      component: () => import('@/views/data/main/index.vue'),
      meta: {
        title: '数据管理',
        keepAlive: true,
      },
    },
    {
      path: '/data/detail',
      name: 'DataDetail',
      component: () => import('@/views/data/detail/index.vue'),
      meta: {
        title: '数据管理-详情',
        keepAlive: false,
      },
    },
  ],
}

export default Data
