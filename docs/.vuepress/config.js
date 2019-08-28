module.exports = {
    title: 'HuHu Café',
    description: 'java、docker、kafka、汪啊虎虎，以及其他',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }]
    ],
    base: '/jedochn/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        repo: 'https://github.com/zhaojunpeng/jedochn.git',
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav: [
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
            { text: '技术博文', link: '/Tech/' },
            { text: '随笔', link: '/Thought/' },
            // 多项，下拉形式
            {
                text: '关于我',
                items: [
                    // link：指向链接也可以是外网链接
                    { text: 'Weibo', link: 'https://weibo.com/p/1005055378811373' }
                ]
            }
        ],
        sidebar: {
            // 打开FAQ主页链接时生成下面这个菜单
            '/Tech/': [
                //多级菜单形式
                {
                    // 菜单名
                    title: 'Java',
                    // 子菜单
                    children: [
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件             
                        ['/Tech/Java/Basic', '#Basic'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ['/Tech/Java/Senior', '#Senior'], // '/FAQ/DigestionHeap/Digested.md'文件
                    ]
                },
                {
                    title: 'Docker',
                    children: [
                        //['/Docker/', 'Docker']
                    ]
                },
                {
                    title: 'Kafka',
                    children: [
                        //['/Tech/Kafka/', '#Kafka']
                    ]
                }
            ],
            // 打开Thought主页链接时生成下面这个菜单
            '/Thought/': [
                ['/Thought/', '随笔首页']
            ]
        }
    }
}