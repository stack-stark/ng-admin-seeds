import { Menu } from './menu.interface';

export const menuList: Array<Menu> = [
    {
        name: 'welcome',
        routerLink: '/index/welcome',
        children: null,
        nzIcon: 'info-circle',
    },
    {
        name: 'angular入门',
        routerLink: null,
        children: [
            {
                name: 'todoList',
                routerLink: '/index/todo-list',
                children: null
            },
            {
                name: 'ngrx',
                routerLink: '/index/ngrx',
                children: null
            },
        ],
        nzIcon: 'schedule',
    },
    {
        name: '结果页',
        routerLink: null,
        nzIcon: 'file-done',
        open: false,
        children: [
            {
                name: '404',
                routerLink: '/index/error/404',
                children: null
            },
            {
                name: '403',
                routerLink: '/index/error/403',
                children: null
            },
            {
                name: '500',
                routerLink: '/index/error/500',
                children: null
            }, {
                name: '详细错误页',
                routerLink: '/index/error/error-feedback',
                children: null
            }
        ]
    },
    {
        name: '相册组件',
        routerLink: '/index/ngx-gallery',
        children: null,
        nzIcon: 'picture',
    },
    {
        name: '图表',
        routerLink: '/index/g2plot',
        children: null,
        nzIcon: 'area-chart',
    },
];
