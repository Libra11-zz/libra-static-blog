module.exports = {
  title: "Libra",
  theme: "libra",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  // 文章目录和 back to top
  plugins: ["vuepress-plugin-table-of-contents", "@vuepress/back-to-top"],
  // theme:
  themeConfig: {
    // 主页
    home: {
      title: "Libra",
      subTitle: "在生活里，我们永远是初学者",
    },
    // 页脚
    footer: {
      // 版权信息
      copyright: "Copyright © 2019-2020 Libra | 版权所有",
    },
    // 个人信息卡片
    infoCard: {
      // 头像
      headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
      // 姓名
      name: "Libra",
      // 邮箱
      mail: "libra085925@gmail.com",
    },
    // 联系人页面
    contact: {
      title: "Hello There !!!!",
      subTitle1: "Thank you for visiting my blog",
      subTitle2: "Hope we can make progress together",
      // QQ二维码地址
      qq:
        "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
      // 微信二维码地址
      wechat:
        "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
      // 邮箱
      mail: "libra085925@gmail.com",
      // github地址
      github: "https://github.com/Libra11",
      // 头像图片地址
      headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
    },
    comment: {
      // 是否显示评论列表
      showComment: false,
      // The owner's name of repository to store the issues and comments.
      owner: "Libra11",
      // The name of repository to store the issues and comments.
      repo: "vuepress-theme-libra",
      // The clientId & clientSecret introduced in OAuth2 spec.
      clientId: "",
      clientSecret: "",
    },
  },
};
