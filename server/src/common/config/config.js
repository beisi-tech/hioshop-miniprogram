// default config
module.exports = {
    default_module: 'api',
	port: 8360, //服务端口，可自定义
    weixin: {
        appid: 'wxbec3c357bf4190e8', // 小程序 appid
        secret: 'f53599939297c93034167ea145ec000f', // 小程序密钥
        mch_id: '1708391637', // 商户帐号ID
        partner_key: 'z6J94UikV3wL0rZyM8W1QeBsHTD2AGxp', // 微信支付密钥
        notify_url: 'https://www.beisi.tech.com/api/pay/notify' // 微信支付异步通知
    },
    express: {
        // 已废弃，之后考虑改回来，做成和阿里云的物流查询可以切换，方便大家的使用
        // 免费的，但是顺丰的话，要配合快递鸟的电子面单
        // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/ 
        appid: '12312312', // 对应快递鸟用户后台 用户ID
        appkey: '123123123123123123123123', // 对应快递鸟用户后台 API key
        request_url: 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx'
    },
   mianexpress:{
        appid: '123123', // 对应快递鸟用户后台 用户ID
        appkey: '123123-4e61236-94cb5297309a', // 对应快递鸟用户后台 API key
        request_url: 'http://testapi.kdniao.com:8081/api/EOrderService',
        print_url: 'http://sandboxapi.kdniao.com:8080/kdniaosandbox/gateway/exterfaceInvoke.json',
        ip_server_url:'http://www.kdniao.com/External/GetIp.aspx'
    },
    // 七牛云配置已移除 - 现在使用本地上传，图片存储在 /static/upload/ 目录
    // 如需使用 CDN，请在 Nginx/Caddy 等反向代理中配置
    aliexpress:{
        // https://market.aliyun.com/products/56928004/cmapi021863.html?spm=5176.730005.productlist.d_cmapi021863.6ba73524uQjLqE&innerSource=search_%E5%85%A8%E5%9B%BD%E5%BF%AB%E9%80%92%E7%89%A9%E6%B5%81%E6%9F%A5%E8%AF%A2-%E5%BF%AB%E9%80%92%E6%9F%A5%E8%AF%A2%E6%8E%A5%E5%8F%A3#sku=yuncode1586300000
        url:'http://wuliu.market.alicloudapi.com/kdi', //阿里云的物流查询api，收费的
        appcode: 'asldjalsjdlasjdla' ,// 阿里云后台获取
    },
	templateId:{
		deliveryId:'w6AMCJ0nVWTsFasdasdgnlNlmCf9TTDmG6_U' // 模板id。在订阅消息里设置好后就可以得到
	},
};
