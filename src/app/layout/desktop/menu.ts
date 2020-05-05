import { Menu } from './menu.interface';

export const menuList: Array<Menu> = [
    {
        name: 'welcome',
        routerLink: '/index/welcome',
        children: null,
        nzIcon: 'info-circle',
    },
    {
        name: '项目日志',
        routerLink: '/index/project-log',
        children: null,
        nzIcon: 'snippets',
    },
    {
        name: 'angular入门',
        routerLink: null,
        children: [
            {
                name: '模板语法',
                routerLink: '/index/angular-primer/template-syntax',
                children: null
            },
            {
                name: '组件交互',
                routerLink: '/index/angular-primer/component-interaction',
                children: null
            },
            {
                name: '管道',
                routerLink: '/index/angular-primer/pipe',
                children: null
            },
            {
                name: '表单',
                routerLink: '/index/angular-primer/form',
                children: null
            },
            {
                name: 'dom操作',
                routerLink: '/index/angular-primer/dom-operation',
                children: null
            },
            {
                name: '动态组件',
                routerLink: '/index/angular-primer/dynamic-component',
                children: null
            },
            {
                name: '属性型指令',
                routerLink: '/index/angular-primer/attribute-directives',
                children: null
            },
            {
                name: '结构型指令',
                routerLink: '/index/angular-primer/structural-directives',
                children: null
            },
        ],
        nzIcon: 'schedule',
    },
    {
        name: '通用页面',
        routerLink: null,
        children: [
            {
                name: '登录',
                routerLink: '/login',
                children: null
            },
            {
                name: '注册',
                routerLink: '/register',
                children: null
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
                    },
                    {
                        name: '详细错误页',
                        routerLink: '/index/error/error-feedback',
                        children: null
                    }
                ]
            },
        ],
        nzIcon: 'file',
    },
    {
        name: '二次封装组件',
        routerLink: null,
        children: [
            {
                name: '结构型指令',
                routerLink: '/index/angular-primer/structural-directives',
                children: null
            }
        ],
        nzIcon: 'apartment',
    },
    {
        name: '图表',
        routerLink: '/index/common-components/g2plot',
        nzIcon: 'area-chart',
        children: [
            {
                name: 'Line-折线图',
                routerLink: '/index/common-components/g2plot',
                children: null
            },
            {
                name: 'Area-面积图',
                routerLink: '/index/common-components/g2plot',
                children: null
            },
            {
                name: 'Column-柱状图',
                routerLink: '/index/common-components/g2plot',
                children: null
            },
            {
                name: 'Bar-基础条形图',
                routerLink: '/index/common-components/g2plot',
                children: null
            },
            {
                name: 'Pie-饼图',
                routerLink: '/index/common-components/g2plot',
                children: null
            },
            {
                name: 'Gauge-仪表盘',
                routerLink: '/index/common-components/g2plot',
                children: null
            }
        ],
    },
    {
        name: '图片预览',
        routerLink: '/index/common-components/ngx-gallery',
        children: null,
        nzIcon: 'picture',
    },
    {
        name: '状态管理器',
        routerLink: '/index/common-components/ngrx',
        children: null,
        nzIcon: 'database',
    },
];
