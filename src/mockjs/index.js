// // 引入mockjs
// const Mock = require('mockjs');
// // 获取 mock.Random 对象
// const Random = Mock.Random;
// // mock一组数据
// const assetarr = function() {
//   let assets = [];
//   assets.push({
//     name: 'INSUR',
//     amount: 0.036,
//     iconUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'
//   }, {
//     name: 'BTC',
//     amount: 0,
//     iconUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'
//   }, {
//     name: 'ETH',
//     amount: 0,
//     iconUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'
//   }, {
//     name: 'ACG',
//     amount: 0,
//     iconUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'
//   })
//
//   return {
//     data: assets,
//     success: true
//   }
// }
//
// // name: Random.cname(), // Ran dom.cname() 随机生成一个常见的中文姓名
// // amount: Random.date(),
// const assetdetail = function() {
//   let assets = {
//     name: 'INSUR', // Ran dom.cname() 随机生成一个常见的中文姓名
//     amount: 0.036, // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
//     description: '123123123123123123123', // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
//     open_recharge: 1,
//     open_withdraw: 1,
//     isShowTips:1,
//     tipsText: '充值、提现，即将开放'
//   }
//
//
//   return {
//     data: assets,
//     success: true
//   }
// }
//
// const usersdetail = function() {
//   let assets = {
//     uid: 123123, // Ran dom.cname() 随机生成一个常见的中文姓名
//     nickName: Random.cname(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
//     memberNum: 4111, // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
//     realName: '1',
//     idCard: '1',
//     phone: '13567859876',
//     avatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     lastLoginTime: Random.date(),
//   }
//   return {
//     data: assets,
//     success: true
//   }
// }
// const setnickname = function() {
//   return {
//     message: '设置成功',
//     data: null,
//     success: true
//   }
// }
// const asset_records = function() {
//   let assets = [];
//   assets.push({
//     type: 1,
//     channel: '充值',
//     symbol: 'INSUR',
//     amount: 0.01,
//     endTime: Random.date()
//   }, {
//     type: 1,
//     channel: '中奖',
//     symbol: 'ETH',
//     amount: 0.01,
//     endTime: Random.date()
//   }, {
//     type: 1,
//     channel: '中奖',
//     symbol: 'BTC',
//     amount: 0.01,
//     endTime: Random.date()
//   }, {
//     type: 0,
//     channel: '参与夺宝',
//     symbol: 'INSUR',
//     amount: 0.01,
//     endTime: Random.date()
//   })
//
//   return {
//     message: '',
//     data: assets,
//     success: true
//   }
// }
//
//
// const addresses = function() {
//   let assets = [];
//   assets.push({
//       realName: Random.cname(),
//       phone: '1256787965596',
//       id: [],
//       address: '大桥镇135号路',
//       zipCode: '314318'
//     },
//     // {
//     //   realName: Random.cname(),
//     //   phone: '1256787965596',
//     //   id: [],
//     //   address:'大桥镇135号路',
//     //   zipCode: '314318'
//     // }
//   )
//
//   return {
//     message: '',
//     data: assets,
//     success: true
//   }
// }
//
// const addAddresses = function() {
//   return {
//     message: '设置成功',
//     data: null,
//     success: true
//   }
// }
//
// const categories = function() {
//   let assets = [];
//   assets.push({
//       id: 0,
//       name: '全部',
//       remark: '全部',
//     }, {
//       id: 1,
//       name: '实物',
//       remark: '实物',
//     }, {
//       id: 2,
//       name: '数字资产',
//       remark: '数字资产',
//     }, {
//       id: 3,
//       name: '保险',
//       remark: '保险',
//     },
//
//   )
//
//   return {
//     message: '',
//     data: assets,
//     success: true
//   }
// }
//
// const getproducts = function() {
//   let assets = [];
//   assets.push(
//     {
//     id: 123123,
//     period: 12,
//     title: 'iPhone X 64G 深空灰色 三网通',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     currentPortion: 88,
//     totalPortion: 100,
//   }, {
//     id: 123123,
//     period: 13,
//     title: '小米电动平衡车',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     currentPortion: 13,
//     totalPortion: 100,
//   }, {
//     id: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     currentPortion: 15,
//     totalPortion: 180,
//   }, {
//     id: 123123,
//     period: 12151515,
//     title: '京东50购物卡',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     currentPortion: 58,
//     totalPortion: 200,
//   }, {
//     id: 123123,
//     period: 12,
//     title: '星巴克星享卡',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     currentPortion: 88,
//     totalPortion: 100,
//   }, {
//     id: 123123,
//     period: 12,
//     title: '星巴克星享卡2',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     currentPortion: 88,
//     totalPortion: 100,
//   }
// )
//
//   return {
//     data: assets,
//     success: true
//   }
// }
//
//
// const getrecords = function() {
//   let assets = [];
//   assets.push(
//     {
//     pid: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     winnerId: '12',
//     winnerNickName: Random.cname(),
//     winnerAvatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     luckyNum: 100,
//     lotteryTime: Random.date(),
//     winnerPortionNum: 100,
//     isWinner: true,
//     awwardId: 1009090,
//     state:'2',
//   }, {
//     pid: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     winnerId: '12',
//     winnerNickName: Random.cname(),
//     winnerAvatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     luckyNum: 100,
//     lotteryTime: Random.date(),
//     winnerPortionNum: 100,
//     isWinner: false,
//     awwardId: 1009090,
//     state: '3',
//   }, {
//     pid: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     winnerId: '12',
//     winnerNickName: Random.cname(),
//     winnerAvatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     luckyNum: 100,
//     lotteryTime: Random.date(),
//     winnerPortionNum: 100,
//     isWinner: true,
//     awwardId: null,
//     state: '3',
//   }, {
//     pid: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     winnerId: '12',
//     winnerNickName: Random.cname(),
//     winnerAvatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     luckyNum: 100,
//     lotteryTime: Random.date(),
//     winnerPortionNum: 100,
//     isWinner: true,
//     awwardId: 1009090,
//     state: '3',
//   },
// )
//
//   return {
//     data: assets,
//     success: true
//   }
// }
//
//
// const getMyrecords = function() {
//   let assets = [];
//   assets.push(
//     {
//     pid: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     winnerId: '12',
//     winnerNickName: Random.cname(),
//     winnerAvatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     luckyNum: 100,
//     lotteryTime: Random.date(),
//     winnerPortionNum: 100,
//     isWinner: true,
//     awwardId: 1009090,
//     state:'2',
//   }, {
//     pid: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     winnerId: '12',
//     winnerNickName: Random.cname(),
//     winnerAvatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     luckyNum: 100,
//     lotteryTime: Random.date(),
//     winnerPortionNum: 100,
//     isWinner: false,
//     awwardId: 1009090,
//     state: '3',
//   }, {
//     pid: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     winnerId: '12',
//     winnerNickName: Random.cname(),
//     winnerAvatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     luckyNum: 100,
//     lotteryTime: Random.date(),
//     winnerPortionNum: 100,
//     isWinner: true,
//     awwardId: null,
//     state: '3',
//   }, {
//     pid: 123123,
//     period: 1214,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     winnerId: '12',
//     winnerNickName: Random.cname(),
//     winnerAvatarUrl: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     luckyNum: 100,
//     lotteryTime: Random.date(),
//     winnerPortionNum: 100,
//     isWinner: true,
//     awwardId: 1009090,
//     state: '3',
//   },
// )
//
//   return {
//     data: assets,
//     success: true
//   }
// }
//
// const getProducts = function() {
//   return {
//     message: '领取成功',
//     data: null,
//     success: true
//   }
// }
//
// const getProductDetail = function() {
//   let assets = {
//     id: 123123,
//     period: 105984,
//     title: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     cover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     introPics: [],
//     currentPortion: 1080,
//     totalPortion: 8488,
//     state: '1',
//   }
//   return {
//     data: assets,
//     success: true
//   }
// }
//
// const getProductDetailJionTime = function() {
//   let assets = {
//     portionNum: 88,
//     portionCodes: ['05615641651——05615641653','05623641651'],
//   }
//   return {
//     data: assets,
//     success: true
//   }
// }
//
// const getAwardOrder = function() {
//   let assets = {
//     pid: 123123,
//     pTitle: 'DJI大疆 御 Mavic Air 便携可折叠4K旅行无人机 白色',
//     lotteryTime: Random.date(),
//     pCover: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
//     address: '大桥镇135号路',
//     realName: Random.cname(),
//     phone: '1515868777',
//     status: '1',
//   }
//   return {
//     data: assets,
//     success: true
//   }
// }
//
// Mock.mock('/v1/users/uid/awards/award_id', 'get', getAwardOrder);
// Mock.mock('/v1/products/:pid/portion/:uid', 'get', getProductDetailJionTime);
// Mock.mock('/v1/products/:pid', 'get', getProductDetail);
// Mock.mock('/v1/users/:uid/products/:pid/confirm', 'post', getProducts);
// Mock.mock('/v1/products/my_records/uid?offset=0&limit=10', 'get', getMyrecords);
// Mock.mock('/v1/products/records/uid?offset=0&limit=10', 'get', getrecords);
// Mock.mock('/v1/products?cid=0&offset=0&limit=10', 'get', getproducts);
// Mock.mock('/v1/products/categories', 'get', categories);
//
//
//
// Mock.mock('/v1/users/:uid/address', 'post', addAddresses);
// Mock.mock('/v1/users/:uid/addresses', 'get', addresses);
// Mock.mock('/v1/users/:uid/asset_records?offset=0&limit=10', 'get', asset_records);
// Mock.mock('/v1/users/:uid', 'get', usersdetail);
// Mock.mock('/v1/users/:uid/nickname', 'post', setnickname);
// Mock.mock('/v1/users/:uid/assets', 'post', assetarr);
// Mock.mock('/v1/users/:uid/assets/:asset_id', 'get', assetdetail);
