import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max/umi',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' 高级表单',
      path: '/form',
      component: './Form',
    },
    {
      name: ' 高级列表',
      path: '/list',
      component: './List',
    },
    {
      name: 'test',
      path: '/test',
      component: './Test',
    },
    {
      name: 'test2',
      path: '/test2',
      component: './Test2',
    },
    {
      name: 'test3',
      path: '/test3',
      component: './test3',
    },
    {
      name: 'editable',
      path: '/editable',
      component: './editable',
    },
  ],
  npmClient: 'cnpm',
});
