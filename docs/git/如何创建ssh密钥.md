# 如何创建ssh密钥

为了避免每次创建项目后提交git远程仓库都要输入用户名和密码，可以采取设置ssh密钥的方式进行远程推送。

## 检查是否存在ssh密钥

命令：
```cmd
cd ~/.ssh
dir // windows
ls // mac
```
这两个命令就是检查是否已经存在 id_rsa.pub 或 id_dsa.pub 文件，如果文件已经存在，那么你可以跳过步骤2，直接进入步骤3。

## 创建一个 SSH key 
ssh-keygen -t rsa -C "867007845@qq.com"

代码参数含义：

-t 指定密钥类型，默认是 rsa ，可以省略。

-C 设置注释文字，比如邮箱。

-f 指定密钥文件存储文件名。

以上代码省略了 -f 参数，因此，运行上面那条命令后会让你输入一个文件名，用于保存刚才生成的 SSH key 代码，如：

```cmd
Generating public/private rsa key pair.
# Enter file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]
```

当然，你也可以不输入文件名，使用默认文件名（推荐），那么就会生成 id_rsa 和 id_rsa.pub 两个秘钥文件。

接着又会提示你输入两次密码（该密码是你push文件的时候要输入的密码，而不是github管理者的密码），

当然，你也可以不输入密码，直接按回车。那么push的时候就不需要输入密码，直接提交到github上了，如：

```cmd
Enter passphrase (empty for no passphrase): 
# Enter same passphrase again:
```

接下来，就会显示如下代码提示，如：

```cmd
Your identification has been saved in /c/Users/you/.ssh/id_rsa.
# Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
# The key fingerprint is:
# 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db 867007845@qq.com
```

当你看到上面这段代码的时候，那就说明，你的 SSH key 已经创建成功，你只需要添加到github的SSH key上就可以了。


## 添加你的 SSH key 到 远程仓库上面去

```cmd
code ~/.ssh/id_rsa.pub
```

类似于云效，在个人设置里就会有ssh密钥配置，直接复制本地的id_rsa.pub文件内容粘贴对于的输入框中就好了。







