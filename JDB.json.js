var JDB = {
    CI: 1001,       // 分类ID，永远比当前多 1
    DI: 1000,       // itemID，永远比当前多 1
    data: {
        1000: {                 // 分类ID
            order: 0,           // 排序
            fixed: false,       // 固定打开
            name: '分类-1',     // 名称
            item: {                     // item
                /*
                    1000: {                 // 项目ID
                        o: 0,               // 排序
                        oc: 0,              // 启动次数(弃用)
                        ar: ture,           // 始终以管理员权限运行
                        n: '',              // 名称
                        u: '',              // 位置/链接
                        p: '',              // 启动参数
                        d: '',              // 运行目录
                        pc: 0 ,             // 进程优先级，实时:3; 高:2; 高于正常:1; 正常:0; 低于正常:4; 低:5;
                        t: '',              // 备注
                        ico: '',            // 图标 仅限url，1.1.5+不限
                        key: '',            // 快捷键
                    }
                */
            }

        }
    }
}
