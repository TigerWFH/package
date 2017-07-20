# NPM包

## 包结构

    package
        |
        |--->lib
        |
        |
        |--->test
        |
        |
        |--->doc
        |
        |
        |--->bin
        |
        |
        |--->package.json
        |
        |
        |--->readMe.md

# webpack配置说明
* 不配置library且使用export{o}导出方式
```
// src
output{
    path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
}
export {o};
// target
import {o} from 'package';//此处就是结构对象，换成oo就会出错
```
* 不配置library且使用export default o导出方式
```
output{
    path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
}
export default o;
//target
import o from 'package';
但是o.default才是真正的要导出的对象，因为default是关键字，不能使用结构对象方式

```

总结：
    如果使用library，则library是作为webpack打包的最外层组件属性导出的，而要导出的组件则是library的属性导出
    ```
    要导出的组件是banner
    library配置为Banner
    则访问方式是：
    import {Banner} from 'package';
    Banner.banner才是最终的组件（export {banner}）或者，
    Banner.default才是最终的组件(export default banner)
    ```