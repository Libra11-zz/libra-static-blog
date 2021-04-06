---
title: git代码回滚
category: git
desc: git代码回滚
tag:
  - git
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/git/github.jpeg
date: "2021-04-12"
---

# `git` 代码回滚

## 本地代码回滚

- 本地代码回滚到上一版本（或者指定版本）

```shell
git reset --hard HEAD~1
```

- 加入 `-f` 参数，强制提交，远程端将强制跟新到 `reset` 版本

```shell
git push -f
```

## 远程代码回滚

- 新建 `backup` 分支 作为备份，以防万一

```shell
git branch backup
```

- 将本地的 `backup` 分支　推送到远程的 `backup`

```shell
git push origin backup:backup
```

- 本地仓库彻底回退到 `xxxxx` 版本，`xxxxx` 版本之后的 `commit` 信息将丢失

```shell
git reset --hard xxxxx
```

- 删除远程的 `master` 分支 (注意 `master`前有个 `:` )

```shell
git push origin :master
```

> 如果远程仓库的 `master` 如果是保护分支将报错，请去掉对分支的保护设置

- 重新创建远程 `master` 分支

```shell
 git push origin master
```
