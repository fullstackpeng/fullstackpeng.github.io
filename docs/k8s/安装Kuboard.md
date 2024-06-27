# 如何使用Kuboard在Windows安装K8s

## 本机docker安装Kuboard-Spray

```cmd
docker run -d \
  --privileged \
  --restart=unless-stopped \
  --name=kuboard-spray \
  -p 8090:80/tcp \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ~/kuboard-spray-data:/data \
  swr.cn-east-2.myhuaweicloud.com/kuboard/kuboard-spray:latest-amd64
```

用户名 admin，默认密码 Kuboard123


## 安装虚拟机

配置固定IP

https://www.jianshu.com/p/872e2e2e502d


配置ssh访问

https://blog.csdn.net/kaikai136412162/article/details/98026747

修改主机hostname

https://blog.csdn.net/wohu1104/article/details/103327895

## 安装k8s集群

## 配置container的镜像源

https://juejin.cn/post/7312330825206693939

https://github.com/containerd/containerd/blob/main/docs/cri/registry.md

## 配置nginx

### 创建挂载目录
mkdir -p /home/peng/nginx/conf
mkdir -p /home/peng/nginx/log
mkdir -p /home/peng/nginx/html

### 生成容器
docker run --name test-nginx -p 8091:80 -d registry.openanolis.cn/openanolis/nginx:1.14.1-8.6
### 将容器nginx.conf文件复制到宿主机
docker cp test-nginx:/etc/nginx/nginx.conf /home/peng/nginx/conf/nginx.conf
### 将容器conf.d文件夹下内容复制到宿主机
docker cp test-nginx:/etc/nginx/conf.d /home/peng/nginx/conf/conf.d
### 将容器中的html文件夹复制到宿主机
docker cp test-nginx:/usr/share/nginx/html /home/peng/nginx/

```cmd
docker run \
-p 8091:80 \
--name test-nginx \
-v /home/peng/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /home/peng/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /home/peng/nginx/log:/var/log/nginx \
-v /home/peng/nginx/html:/usr/share/nginx/html \
-d registry.openanolis.cn/openanolis/nginx:1.14.1-8.6
```

## 配置反向代理

https://blog.ltinyho.top/2020/01/13/frp-to-local-k8s/

