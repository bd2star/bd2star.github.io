module.exports = {
    // 左上角标题
    title: 'bd2star 的文档库',
    // 描述
    description: 'To be or not to be,that\'s a question.',
    // 头部部署，右上角小图标
    head: [
        // ico 配置
        ['link', {
            rel: 'icon',
            href: '/img/logo.ico'
        }]
    ],
    // 主题部署
    themeConfig: {
        /**
         * 右侧导航条
         * text - 显示字段
         * link - 链接：注意前后带 / 符号
         */
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '需求',
                link: '/demand/'
            },
            {
                text: '原型图',
                link: '/prototypeFigure/'
            },
            {
                text: 'API',
                link: '/api/'
            },
            /**
             * 多级菜单
             * 开头 text 为一级标题
             * 数组内 text 为二级标题
             * link 为链接，注意带 /
             */
            {
                text: '博文',
                items: [
                    {
                        text: 'Git相关知识点',
                        link: 'https://blog.csdn.net/zbx931197485/article/details/84838255'
                    },
                    {
                        text: 'Vue处理五星评分',
                        link: 'https://blog.csdn.net/zbx931197485/article/details/83146546'
                    }
                ]
            },
            {
                text: '关于',
                link: '/about/'
            },
            // 链接到网站
            {
                text: 'Github',
                link: 'https://www.github.com/bd2star'
            },
        ],
        sidebar: {
            // 侧边栏在 /api/ 目录上
            '/api/': [
                ['', 'README'],
                ['井盖-通用接口', '井盖-通用接口'],
                ['井盖-安装端', '井盖-安装端'],
                ['井盖-维修端', '井盖-维修端'],
                ['井盖-巡检端', '井盖-巡检端'],
                ['井盖-管理端', '井盖-管理端']
                // ['全域PC端', '全域PC端'],
                // ['全域微信端', '全域微信端']
            ],
            // 侧边栏在 /index/ 目录上
            '/index/': [
                ['', 'README'],
                ['indexTwo', '导航第二页']
            ],
            // 侧边栏在 /about/ 目录上
            '/about/': [
                ['', 'README'],
                ['GithubPages', 'GithubPages'],
                ['VuePress', 'VuePress']
            ]
        }
    }
}
