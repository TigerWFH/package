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
* 不配置library
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