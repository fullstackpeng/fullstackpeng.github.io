# 关于IDEA软件的使用


本文主要记录博主对于IDEA软件的一些配置记录，便于后续的快速使用。

## 如何隐藏文件

我们每次新建项目，文件夹都会多一个.iml后缀的文件和一个.idea文件夹，我们希望在IDEA中隐藏这两个文件，这个时候就需要在前往【Settings->编辑器->文件类型->忽略的文件和文件夹(tab)】中添加配置就可以了

![](https://qiniu.867007845.top/202406281138438.png)

## 如何添加自定义类注释和方法注释

### 自定义类注释

![](https://qiniu.867007845.top/202406281135090.png)

代码：
```
/**
* @project_name: ${PROJECT_NAME}
*
* @name: ${NAME}
*
* @description: ${description}
*
* @author: fullstackpeng
*
* @create: ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}
**/
```

### 方法注释

![](https://qiniu.867007845.top/202406281136215.png)

![](https://qiniu.867007845.top/202406281137969.png)

代码：

```
/** 
* @Description: $description$
* @Param: $params$
* @return: $returns$
* @Author: fullstackpeng
* @Date: $date$
*/
```

## Java项目中一个模块如何启动多个服务

![](https://qiniu.867007845.top/202406281227149.png)

![](https://qiniu.867007845.top/202406281224487.png)