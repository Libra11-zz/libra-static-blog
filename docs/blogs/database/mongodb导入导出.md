---
title: mongodb导入导出
category: database
desc: mongodb导入导出
tag:
  - database
  - mongodb
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/mongodb.png
date: "2021-01-12"
---

# `Mongodb`导入导出

## 将本地数据库中的数据导入到远程服务器

- #### 将本地数据中的集合打包成 `json`文件

```shell
mongoexport -d database_name -c collection_name -o ~/collection_name.json --type=json
```

如果数据库需要账号和密码，则输入：

```shell
mongoexport -u username -p password -d database_name -c collection_name -o ~/collection_name.json --type=json
```

- #### 将打包好的`json`文件上传到远程服务器

- #### 进入到`mongdb`安装位置的`bin`目录下，执行下面命令：

```shell
mongoimport --db  database_name --collection collection_name --file ~/collection.json
```

如果数据库需要用户名和密码，则输入：

```shell
mongoimport -u username -p password --db  database_name --collection collection_name --file ~/collection.json
```

## 将远程数据库的数据库导入到本地

```shell
mongoexport -h 远程服务器的IP地址 --port 端口号 -u user_name -p password -d database_name -c collection_name --type=json --out ~/data.json
```
