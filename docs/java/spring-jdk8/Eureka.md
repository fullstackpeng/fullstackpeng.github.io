# Eureka

本文主要记录Eureka的配置和使用。

## Eureka服务端

### pom依赖

```xml
<properties>
    <java.version>1.8</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <spring-boot.version>2.7.6</spring-boot.version>
    <spring-cloud.version>2021.0.5</spring-cloud.version>
</properties>
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>${spring-boot.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

### 启动类添加@EnableEurekaServer注解

```java
@EnableEurekaServer
@SpringBootApplication
public class No001EurekaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(No001EurekaServerApplication.class, args);
    }

}
```

### application.yml
```yaml
server:
  port: 8001 #指定运行端口
spring:
  application:
    name: eureka-server #指定服务名称
eureka:
  instance:
    hostname: localhost #指定主机地址
  client:
    fetch-registry: false #指定是否要从注册中心获取服务（注册中心不需要开启）
    register-with-eureka: false #指定是否要注册到注册中心（注册中心不需要开启）
    serviceUrl:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
  server:
    enable-self-preservation: false #关闭保护模式

```

启动服务后，访问[](http://localhost:8001/)，即可看到注册中心页面。

![](https://qiniu.867007845.top/202406281120966.png)


### 如何保护Eureka服务端

#### 修改pom文件

新增如下依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

#### 新增Security配置类

```java
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().ignoringAntMatchers("/eureka/**");
        super.configure(http);
    }
}
```

#### 修改application.yml

```yaml
spring:
  application:
    name: eureka-server #指定服务名称
  security: #配置SpringSecurity登录用户名和密码
    user:
      name: fsp
      password: fsp
```

#### 重新启动

访问[](http://localhost:8001/)即可看到登录页面。

![](https://qiniu.867007845.top/202406281144929.png)

输入密码之后，即可跳转到注册中心页面。

![](https://qiniu.867007845.top/202406281145361.png)

#### 启动多个服务

![](https://qiniu.867007845.top/202406281224487.png)

## Eureka客户端

### pom依赖

```xml
<properties>
    <java.version>1.8</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <spring-boot.version>2.6.13</spring-boot.version>
    <spring-cloud.version>2021.0.5</spring-cloud.version>
</properties>
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>${spring-boot.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

### application.yml

因为我们之前加了安全配置，所以需要配置用户名和密码。

如果不需要的话，可以将defaultZone中的`fsp:fsp@`去掉

```yaml
server:
  port: 8004
spring:
  application:
    name: eureka-client
eureka:
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://fsp:fsp@localhost:8001/eureka/,http://fsp:fsp@localhost:8002/eureka/,http://fsp:fsp@localhost:8003/eureka/
```

启动服务后，依次访问8001、8002、8003端口注册中心页面，可以发现服务已经注册到注册中心，但是不是全部都可以看到，只有一个可以看到，我这边是8003端口。

现在测试关掉8003端口服务，就会发现，8002服务出现了8004客户端的注册。

![](https://qiniu.867007845.top/202406281230904.png)