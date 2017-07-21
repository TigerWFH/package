# NPM包

## 包结构

    package
        |
        |
        |--->src(源代码)
        |   |
        |   |
        |   |--->common(通用工具，资源)
        |   |
        |   |--->(源文件)
        |
        |--->lib(导出的包)
        |
        |
        |--->test(单元测试)
        |
        |
        |--->doc(相关文档)
        |
        |
        |--->bin(可执行文件)
        |
        |
        |--->package.json(包描述文件)
        |
        |
        |--->readMe.md(项目相关描述)

# webpack配置说明
* 第一种方式
    // index.js
    ```
    let o = {
    name: "monkey",
    getName: () => {
        return o.name;
    },
    setName: (name) => {
        o.name = name;
    }
    }

    export default o ;
    ```
    // app.js
    ```
    import o from 'package';//此处的o随意命名，代表最外层对象
    // import {default} from 'package';//报错，default是关键字

    console.log("===>", o.default.name);

    ```
    // webpack.config.js
    ```
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
    }
    ```
* 第二种方式
    // index.js
    ```
    let o = {
    name: "monkey",
    getName: () => {
        return o.name;
    },
    setName: (name) => {
        o.name = name;
    }
    }

    export { o };
    ```
    // app.js
    ```
    // 第1种
    import o from 'package';//此处的o随意命名，代表最外层对象
    // import {default} from 'package';//报错，default是关键字

    console.log("===>", o.o.name);
    // 第2种
    import {o} from 'package';//就是结构对象

    console.log('banner==>', o.name);

    ```
    // webpack.config.js
    ```
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
    }
    ```
* 第三种方式
   // index.js
    ```
    let o = {
    name: "monkey",
    getName: () => {
        return o.name;
    },
    setName: (name) => {
        o.name = name;
    }
    }

    export default o ;
    ```
    // app.js
    ```
    import o from 'package';//此处的o随意命名，代表最外层对象
    //import {banner} from 'package';

    console.log("===>", o.banner.default.name);
    //console.log("===>", banner.default.name);

    ```
    // webpack.config.js
    ```
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        library: 'banner',
        libraryTarget: 'commonjs'
    }
    ```
    * 第四种方式
   // index.js
    ```
    let o = {
    name: "monkey",
    getName: () => {
        return o.name;
    },
    setName: (name) => {
        o.name = name;
    }
    }

    export { o };
    ```
    // app.js
    ```
    import o from 'package';//此处的o随意命名，代表最外层对象
    //import {banner} from 'package';

    console.log("===>", o.banner.o.name);
    //console.log("===>", banner.o.name);

    ```
    // webpack.config.js
    ```
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        library: 'banner',
        libraryTarget: 'commonjs'
    }
    ```

总结：
    作为组件使用，尽量不用library，尽量不用default导出。

* external 碰到的问题

    external配置:react:"React"，会产生找不到包的问题。

    改成: react: "react"。

    原因是：webpack对大小写敏感，而node_modules中react是小写，用大写则找不到对应的包

    问题：
    ![问题](./src/common/images/webpack-problem.png)