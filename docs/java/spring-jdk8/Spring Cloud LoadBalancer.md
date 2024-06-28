# Spring Cloud LoadBalancer

Spring Cloud提供了自己的客户端负载均衡器抽象和实现。对于负载均衡机制，增加了 ReactiveLoadBalancer 接口，并提供了基于Round-Robin和Random的实现。

## 什么是负载匀衡

负载均衡是在同一应用程序的不同实例之间分配流量的过程。

要创建容错系统，通常要为每个应用程序运行多个实例。因此，每当一个服务需要与另一个服务通信时，它需要选择一个特定的实例来发送请求。

在负载均衡方面有许多算法：

1. 随机选择：随机选择实例
2. Round-robin：每次以相同的顺序选择一个实例
3. 最少连接：选择当前连接最少的实例
4. 加权指标：使用加权指标来选择最佳实例（例如，CPU或内存使用率）
5. IP哈希：使用客户端IP的哈希映射到实例

## Spring Cloud Load Balancer简介

Spring Cloud Load Balancer库允许我们创建以负载平衡方式与其他应用程序通信的应用程序。使用任何我们想要的算法，我们可以在进行远程服务调用时轻松实现负载均衡。


参考文档：https://www.cnblogs.com/itxiaoshen/p/16247702.html