---
title: CSS隐藏元素的多种方法
category: css
desc: CSS隐藏元素的多种方法
tag:
  - css
picture: https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/ceee5120571beaf6bf306e635b41d5b5a1b0bde4.jpeg
date: "2021-02-12"
---

今天来跟大家介绍一下 `CSS` 隐藏元素的多种方法，虽然都是隐藏元素，但这些方法也都有着微小的区别，那么我们就来看一下究竟有哪些方法吧。

## 准备工作

在正式介绍这些方法之前，我们先来准备一下 `DOM` 结构和基本样式

```
<div class="hide"></div>
.hide {
  width: 200px;
  height: 200px;
  background-color: red;
}
```

我们定义了一个 200\*200 背景颜色为红色的 `div`,在浏览器上查看其结构如下图所示：

![图片](https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlO8pqDgibpWUV1tEzIkLtIqyuwP8Tw6cQo4TY4b33TDWhxtqBcQzwzh5w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 接下来我们就在这个基础结构中介绍隐藏元素的多种方法

## display: none

第一种，使用 `display: none;`,经典的 `display` 隐藏元素,这个是彻底的隐藏了元素，不占据空间，也就不影响布局,元素脱离了标准流。

```
.hide {
  width: 200px;
  height: 200px;
  background-color: red;
  display: none;
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOp35a2YQmRYMcjoSzwiaefJ4e0oZHC7iciaFESW0V4oj4ic0PLleCRlbjkg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 可以看到，鼠标放到 `DOM` 元素上的时候，元素已经完全隐藏了，并且不占据任何空间。

## visibility: hidden

第二种，使用 `visibility: hidden;`,这种方式被隐藏的元素依然会对我们的网页布局起作用，就是元素没有脱离标准流。

```
.hide {
  width: 200px;
  height: 200px;
  background-color: red;
  visibility: hidden;
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOBxq9FnU38icL0vYFVicVCr8s1B1zPnsz5bE8koUibDbOSEJamsLEcylxg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 可以看到，鼠标放到 `DOM` 元素上的时候，虽然元素已经被隐藏了，但元素依然占据这空间。

## opacity

第三种，使用 `opacity: 0;`,这种方式就是改变元素的透明度，从而实现元素的隐藏效果，所以这种方式被隐藏的元素依然会对我们的网页布局起作用，就是元素没有脱离标准流。

```
.hide {
  width: 200px;
  height: 200px;
  background-color: red;
  opacity: 0;
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOBxq9FnU38icL0vYFVicVCr8s1B1zPnsz5bE8koUibDbOSEJamsLEcylxg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 结果同 `visibility`

## position

第四种，使用 `position: absolute;`, 这种方法的原理就是将元素移出屏幕外，从而达到了不可见的效果。

```
.hide {
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  left: -2000px;
  top: -2000px;
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOZJsxKKle5efTEiaSnVYP5etz7tichMdySXBGmoIrUsWTAap0czCiakTDQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 移出屏幕外，虽然还占用着空间，但是占据的位置确是无关紧要的了。

## clip-path: polygon()

第五种， 使用 `clip-path: polygon()`,这种方法的原理就是对与元素进行裁剪，参数全部都给 0，这样就裁剪出来了一个 0\*0 的形状，其实也就是变向隐藏了元素。

```
.hide {
  width: 200px;
  height: 200px;
  background-color: red;
  clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlOBxq9FnU38icL0vYFVicVCr8s1B1zPnsz5bE8koUibDbOSEJamsLEcylxg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 虽然裁剪出来的是 0\*0 的大小，但是元素本身大小还是不变的。

## transform

第六种， 使用 `transform: scale(0);`,这种方法的原理就是对元素进行缩放，参数给 0，也相当于隐藏了元素。

```
.hide {
  width: 200px;
  height: 200px;
  background-color: red;
  transform: scale(0);
}
```

![图片](https://mmbiz.qpic.cn/mmbiz_png/NVdFC3nUSJbmAdvVaFIUhhn0wpibEvUlO1dPCcX2gQudL68p7Cbq9N1fbybNChria2T1rC23t8k0rvPvVia3AmF7g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> 因为缩放是从四周到中间进行缩放，所以元素最后缩放后的位置在元素正中间。
