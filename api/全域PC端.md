---
# 自动生成仅包含当前页面的标题链接的侧边栏
# sidebar: auto  
# 默认深度是 1，它提取 h2 标题。将其设置为 0 将禁用标题链接，最大值为2，同时提取 h2 和 h3 标题
sidebarDepth: 2  
# 上一页/下一页链接
prev: false 
next: ./全域微信端
---

# 全域微信端api接口文档

## 通用说明:

### ①接口通用前缀:

> 测试环境: [http://192.168.0.168:8081/](http://192.168.0.168:8081/)
>
> 生产环境: [待定](http://192.168.0.168:8081)

### ② 接口通用返回:

``` json
{
    "code": "0000", // 正确码为0000 错误码为0001 特殊结果8888 为未登录标识
    "content": "", // 如发生错误此处会显示相关错误信息
    "result": { // 所有需要的结果集都会放在该对象中
        "id": 194,
        "token": "abb37e1dd94f47289f444b365e932707"
    }
}
```


------

## 1 登录注册模块

### 1.1 获取验证码接口

> 说明: 验证码有效期后台限定为180s  

- **请求URL**

> [/vericode/create](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| mobile | <mark>String,**不可为空**</mark> | 获取验证码的手机号 |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| mobile|   String|  获取验证码的手机号|
| vericode|   String|  获取到的验证码|


- **返回示例**

``` json
// 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
        "mobile": "13252514441",
        "vericode": "160406"
    }
}
// 错误示例
{
    "code": "0001",
    "content": "手机号不能为空！",
    "url": ""
}

```

------

### 1.2 登录账号接口

- **请求URL**
> [/interface/pc/login](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| loginType   | Integer,可为空 | 登录类型 **0.手机号登录 1.验证码登录 默认为0** |
| mobile  | String,不可为空 | 手机号码 |
| passwd | String,可为空 | 密码 |
| checkCode | String,可为空 | 验证码 |

> 说明:  当loginType=0时passwd不可为空 当checkCode=1时checkCode不可为空
>  		测试账号  手机号登录  13252514441 =  a123456
> ​		测试账号  验证码登录  13252514441 =  456258


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| id  | Integer  | 登录用户ID |
| token     | String  | 用户token |
| name | String | 姓名 |
| userPic | String | 头像 |
| birthday | String | 生日 |
| sex | Integer | 性别 0女1男 |
| mobile | String | 手机号 |




- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
        "birthday": "2018-11-23",
        "userPic": "/mobile/doctor/images/default-head-image.png",
        "sex": 1,
        "name": "张宝兴",
        "mobile": "13252514441",
        "id": 194,
        "token": "4b296039b65b450c80605f19e0779848"
    }
}
// 错误示例
{
    "code": "0001",
    "content": "请输入验证码",
    "url": ""
}
```

------


### 1.3 登出账号接口

- **请求URL**
> [/interface/pc/logout](##)

- **请求方式** 

> **POST**

- **请求参数**

>  无

- **返回**

> 无



- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "url": ""
}

```

------

### 1.4 找回密码接口

- **请求URL**
> [/interface/pc/retrievePassword](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| mobile  | String,不可为空 | 手机号码 |
| checkCode | String,不可为空 | 验证码 |
| passwd | String,不可为空 | 新密码 |
| confirmPasswd | String,不可为空 | 确认新密码 |



- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000成功 0001失败 |
| content  | String  | 成功为空 失败为失败提示信息 |




- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "url": ""
}
// 错误示例
{
    "code": "0001",
    "content": "验证码输入错误，请重新输入！",
    "url": ""
}
```

------

### 1.5  注册账号接口

- **请求URL**
> [/interface/pc/register](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| mobile  | String,不可为空 | 手机号码 |
| checkCode | String,不可为空 | 验证码 |
| passwd | String,不可为空 | 新密码 |
| confirmPasswd | String,不可为空 | 确认新密码 |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000成功 0001失败 |
| content  | String  | 成功为空 失败为失败提示信息 |


- **返回示例**


``` json
 // 正确示例
{
    "code": "0000",
    "url": ""
}
// 错误示例
{
    "code": "0001",
    "content": "当前输入手机号已存在!",
    "url": ""
}
```

------

## 2 个人中心模块
### 2.1 修改手机号step1(验证原手机号码)

- **请求URL**
> [/interface/pc/user/verifiedOldMobile](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| oldMobile  | String,不可为空 | 原手机号码 |
| checkCode | String,不可为空 | 验证码 |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000成功 0001失败 8888为未登录 应自行处理返回登录页 |
| content  | String  | 成功为空 失败为失败提示信息 |


- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "url": ""
}

// 错误示例 未登录
{
    "code": "8888",
    "content": "未登录,请先登录"
}

// 错误示例 未获取验证码
{
    "code": "0001",
    "content": "请先获取验证码！",
    "url": ""
}

```

------

### 2.2 修改手机号step2(验证新手机号码)

- **请求URL**
> [/interface/pc/user/verifiedNewMobile](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| newMobile  | String,不可为空 | 新手机号码 |
| checkCode | String,不可为空 | 验证码 |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000成功 0001失败 |
| content  | String  | 成功为空 失败为失败提示信息 |



- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "url": ""
}

// 错误示例
{
    "code": "0001",
    "content": "请获取验证码！",
    "url": ""
}

```

------

### 2.3 上传头像

- **请求URL**
> [/interface/pc/user/getUserImgPath](##)

- **请求方式** 

> **POST**
> 请求头需要设定 Content-Type: multipart/form-data;

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| headPortraitBase64  | text,不可为空 | 最终的Base64字符串 |



- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000 成功 0001 失败 |
| content  | String  | 失败时为失败相关信息 |




- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "content": "",
}


```

------

### 2.4 修改用户姓名、性别、生日、头像

- **请求URL**
> [/interface/user/updateUserInfo](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| name  | String,可为空 | 姓名 |
| sex  | Integer,可为空 | 性别0女 1男 |
| birth  | String,可为空 | 生日 格式为 1970-01-01 |
| picUrl | String,可为空 | 用户头像路径 不含IP和端口号 |

> 会根据当前登录用户更新用户性别或生日或头像  sex、birth、picUrl一定要存在一个值去请求
> 更新完头像后需要处理下  本地头像也需要更新  否则会造成返回上一页时头像还是原来的旧数据


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000成功 0001失败 |
| content  | String  | 成功为空 失败为失败提示信息 |



- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "url": ""
}

// 错误示例
{
    "code": "0001",
    "content": "更新用户信息失败！",
    "url": ""
}

```

----

### 2.5 获取未读消息数(个人中心页)

- **请求URL**
> [/interface/pc/user/getUserMsgByModule](##)

- **请求方式** 

> **POST**

- **请求参数**

> 无


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| msgUnReadCounts  | String  | 总未读消息数 |
| qaUnReadCounts  | String  | 我的问答未读消息数 |
| cmUnReadCounts  | String  | 我的点评未读消息数 |
| stgUnReadCounts  | String  | 我的攻略未读消息数 |
| complaintUnReadCounts  | String  | 我的投诉未读消息数 |
| exposureUnReadCounts  | String  | 我的曝光未读消息数 |


- **返回示例**
``` json

 // 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
        "msgUnReadCounts": 3,
        "cmUnReadCounts": 0,
        "qaUnReadCounts": 3,
        "stgUnReadCounts": 0
    },
    "url": ""
}


```

------

### 2.6 获取我的消息

- **请求URL**
> [/interface/pc/user/getMyMsgList](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| pageNumber  | Integer,不可为空 | 当前页 |
| limit  | Integer,不可为空 | 页大小 |



- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| classify  | String  | 消息分类    1：后台  2: 问答 3: 攻略 4：曝光 |
| classifyId  | Integer  | 关联ID 分类为攻略时咨询王康下   为问答时统一为问题ID 点击后可直接根据问题ID进入相应问题详情页 |
| created  | String  | 创建时间 |


- **返回示例**

``` json

 // 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
        "pageData": {
            "current": 1,
            "pages": 1,
            "records": [
                {
                    "classify": 2,
                    "classifyId": 12,
                    "created": "2018-11-28 09:20:09",
                    "creator": 194,
                    "id": 17,
                    "readStatus": 0,
                    "title": "张宝兴 回复了您的回答",
                    "userId": 194
                }
            ],
            "size": 10,
            "total": 3
        }
    }
}


```

------

### 2.7 获取消息详情

- **请求URL**
> [/interface/pc/user/getMyMsgInfo](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| msgId  | Integer,不可为空 | 消息ID |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| title  | String  | 标题 |
| content  | String  | 内容 |
| created  | String  | 创建时间 |


- **返回示例**


``` json

 // 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
        "msgInfo": {
            "classify": 1,
            "classifyId": 0,
             "otherId": 0,
            "content": "您的账号被后台管理员禁用！",
            "created": "2018-11-28 10:57:55",
            "creator": 0,
            "id": 19,
            "readStatus": 0,
            "title": "您的账号被后台管理员禁用！",
            "userId": 194
        }
    }
}

```

------

### 2.8 修改密码

- **请求URL**
> [/interface/pc/user/updatePasswd](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| mobile  | String,不可为空 | 手机号码 |
| checkCode  | String,不可为空 | 验证码 |
| passwd  | String,不可为空 | 密码 |
| confirmPasswd  | String,不可为空 | 确认密码 |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000成功 0001失败 |
| content  | String  | 失败时为错误消息 |


- **返回示例**


``` json

 // 正确示例
{
    "code": "0000",
    "content": ""
}

```

------

## 3 景区模块
### 3.1获取景区列表

- **请求URL**

  > http://192.168.0.45:8083/interface/pcscenic/getScenicList

- **请求方式**

  >**POST**
- **返回**

  | 返回参数           | 参数类型 | 参数说明   |
  | ------------------ | -------- | :--------- |
  | id                 | Integer  | 景区ID     |
  | scenicAddress      | String   | 景区地址   |
  | scenicName         | String   | 景区名称   |
  | scenicIntroduction | String   | 景区简介   |
  | scenicRightPicture | String   | 景区右侧图 |
  | scenicNamePicture  | String   | 景区名称图 |

- 返回示例

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
          scenicNamePicture: "/attached/scenicNamePicture/20181205/5c9178c3-9ac0-426b-9618-78c28eba08e5.png",
  		list: [{
  				scenicName: "黑虎泉",
  				scenicRightPicture: "/attached/scenicRightPicture/20181120/6107ec13-7c85-4665-84a1-55c7690a885b.jpg",
  				id: 2,
  				scenicIntroduction: "风景好",
  				scenicAddress: "山东济南"
  			},
  			{
  				scenicName: "大明湖",
  				scenicRightPicture: "/attached/scenicRightPicture/20181120/1c0ed659-2a42-4784-bff7-654747043149.jpg",
  				id: 4,
  				scenicIntroduction: "痕迹一一 ",
  				scenicAddress: "山东济南"
  			},
  		]
  	}
  }
  ```
### 3.2 获取景区详情

- **请求URL**

  > http://192.168.0.45:8083/interface/pcscenic/getScenicDetails?scenicId=4

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数 | 参数类型 | 参数说明 |
  | -------- | -------- | -------- |
  | scenicId | Integer  | 景区ID   |

- **返回**

  | 返回参数         | 参数类型 | 参数说明        |
  | ---------------- | -------- | --------------- |
  | scenicTopPicture | String   | 详情页顶部top图 |
  | scenicDetail     | String   | 景区详情        |
  | scenicName       | String   | 景区名称        |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		map: {
  			scenicTopPicture: "/attached/scenicTopPicture/20181120/f5a46ac7-c928-4e7f-a691-3337e33eed06.jpg",
  			scenicDetail: "",
              scenicName:"大明湖"
  		}
  	}
  }
  ```
### 3.3景区名称列表

- **请求URL**

  > http://192.168.0.45:8083/interface/pcscenic/getScenicNameList

- **请求方式**

  > **POST**

- **返回参数**

  | 返回参数 | 参数类型 | 参数说明 |
  | -------- | -------- | -------- |
  | id       | Integer  | 景区ID   |
  | value    | String   | 景区名称 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		list: [{
  				id: 2,
  				value: "黑虎泉"
  			},
  			{
  				id: 4,
  				value: "大明湖"
  			},
  			{
  				id: 5,
  				value: "五龙潭"
  			},
  			{
  				id: 6,
  				value: "趵突泉"
  			},
  			{
  				id: 11,
  				value: "解放阁"
  			}
  		]
  	}
  }
  ```

## 4 咨询模块
### 4.1获取咨询列表

- **请求URL**

  > http://192.168.0.45:8083/interface/pcnews/getNewsList

- **请求方式**

  >**POST**

- **返回**

  | 返回参数    | 参数类型      | 参数说明 |
  | ----------- | ------------- | :------- |
  | id          | Integer       | 咨询ID   |
  | newsPicture | String        | 咨询图片 |
  | newsIntro   | String        | 咨询简介 |
  | newsDate    | LocalDateTime | 发布时间 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		list: [{
  				newsIntro: "梨园弟子白发新，椒房阿监青娥老。 夕殿萤飞思悄然，孤灯挑尽未成眠。 迟迟钟鼓初长夜，耿耿星河欲曙天。 鸳鸯瓦冷霜华重，翡翠衾寒谁与共。 悠悠生死别经年，魂魄不曾来入梦。 临邛道士鸿都客，能以精诚致魂魄。 为感君王辗转思，遂教方士殷勤觅。 排空驭气奔如电，升天入地求之遍。",
  				newsPicture: "/attached/newsPicture/20181123/0c76150b-1abe-49ae-82bd-3b5b8b34b011.jpg",
  				id: 1,
  				newsDate: "2018-11-23 17:09:47"
  			},
  			{
  				newsIntro: "风吹仙袂飘飘举，犹似霓裳羽衣舞。 玉容寂寞泪阑干，梨花一枝春带雨。(阑 通：栏；飘飘 一作：飘飖) 含情凝睇谢君王，一别音容两渺茫。 昭阳殿里恩爱绝，蓬莱宫中日月长。 回头下望人寰处，不见长安见尘雾。 惟将旧物表深情，钿合金钗寄将去。 钗留一股合一扇，钗擘黄金合分钿。 但教心似金钿坚，天上人间会相见。",
  				newsPicture: "/attached/newsPicture/20181123/c50e119b-5e86-48a3-a59f-91bf1dcc0ccf.png",
  				id: 2,
  				newsDate: "2018-11-23 17:09:11"
  			}
  		]
  	}
  }
  ```

### 4.2获取资讯详情

- **请求URL**

  > http://192.168.0.45:8083/interface/pcnews/getNewsDetails?newsId=1

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数 | 参数类型 | 参数说明 |
  | -------- | -------- | -------- |
  | newsId   | Integer  | 资讯ID   |

- **返回**

  | 返回参数           | 参数类型 | 参数说明 |
  | ------------------ | -------- | :------- |
  | newsTitle          | String   | 咨询标题 |
  | newsDetailsContent | String   | 咨询简介 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		map: {
  			newsDetailsContent: "详情内容",
  			newsTitle: "今天很好"
  		}
  	}
  }
  ```


- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| title   | String,不可为空 | 标题 |
| content  | String,不可为空 | 内容 |
| pic | String,可为空 | 图片(多个逗号分隔) |

- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000标识成功 0001失败 8888未登录 |
| content  | String  | 错误时为错误信息 正确时为空 |


- **返回示例**
``` json
 // 正确示例
{
    "code": "0000"
}
// 错误示例
{
    "code": "0001",
    "content": "提问失败!",
    "url": ""
}

```
### 4.3 更多资讯

- **请求URL**

  >http://192.168.0.45:8083/interface/pcnews/getMoreNews?pageNumber=0&pageSize=2

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数   | 参数类型 | 参数说明 |
  | ---------- | -------- | -------- |
  | pageNumber | Integer  | 当前页码 |
  | pageSize   | Integer  | 每页大小 |

- **返回**

  | 返回参数  | 参数类型      | 参数说明 |
  | --------- | ------------- | :------- |
  | id        | Integer       | 咨询ID   |
  | newsIntro | String        | 资讯简介 |
  | newsDate  | LocalDateTime | 发布时间 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		pageData: {
  			current: 1,
  			pages: 6,
  			records: [{
  					id: 1,
  					newsDate: "2018-11-23 17:09:47",
  					newsIntro: "梨园弟子白发新，椒房阿监青娥老。 夕殿萤飞思悄然，孤灯挑尽未成眠。 迟迟钟鼓初长夜，耿耿星河欲曙天。 鸳鸯瓦冷霜华重，翡翠衾寒谁与共。 悠悠生死别经年，魂魄不曾来入梦。 临邛道士鸿都客，能以精诚致魂魄。 为感君王辗转思，遂教方士殷勤觅。 排空驭气奔如电，升天入地求之遍。"
  				},
  				{
  					id: 2,
  					newsDate: "2018-11-23 17:09:11",
  					newsIntro: "风吹仙袂飘飘举，犹似霓裳羽衣舞。 玉容寂寞泪阑干，梨花一枝春带雨。(阑 通：栏；飘飘 一作：飘飖) 含情凝睇谢君王，一别音容两渺茫。 昭阳殿里恩爱绝，蓬莱宫中日月长。 回头下望人寰处，不见长安见尘雾。 惟将旧物表深情，钿合金钗寄将去。 钗留一股合一扇，钗擘黄金合分钿。 但教心似金钿坚，天上人间会相见。"
  				}
  			],
  			size: 2,
  			total: 11
  		}
  	}
  }
  ```
------


## 5 问答模块
### 5.1 问题列表

- **请求URL**
> [/interface/pc/qa/getWxQuestionList](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| pageNumber   | Integer,不可为空 | 当前页 |
| limit  | Integer,不可为空 | 页大小 |
| title | String,可为空 | 标题筛选 |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| title  | String  | 问题标题 |
| content  | String  | 问题内容 |
| created     | String  | 创建时间 |
| answerCount | int | 回答数量 |
| visitTimes | int | 浏览次数 |
| creatorUserPic | String | 提问者头像 |




- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
        "pageData": {
            "current": 1,
            "pages": 1,
            "records": [
                {
                	"answerCount": 0,
                    "content": "济南大明湖门票多少钱?",
                    "created": "2018-11-26 15:00:37",
                    "creatorUserPic": "/attached/userImg/20181126/2018112615001430.png",
                    "questionPersonName": "张洋",
                    "title": "济南大明湖门票多少钱1",
                    "visitTimes": 0
                },
                {
                	"answerCount": 0,
                    "content": "济南大明湖门票多少钱?",
                    "created": "2018-11-26 15:00:37",
                    "creatorUserPic": "/attached/userImg/20181126/2018112615001430.png",
                    "questionPersonName": "张洋",
                    "title": "济南大明湖门票多少钱1",
                    "visitTimes": 0
                }
            ],
            "size": 10,
            "total": 2
        }
    }
}


```

------

### 5.2 发布提问上传图片/发布回答上传图片

- **请求URL**
> [/publicinterface/getImgurlbyfile/qa](##)

- **请求方式** 

> **POST**
> 请求头需要设定 Content-Type: multipart/form-data;

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| imgfile  | File,不可为空 | 选中要上传的图片 |



- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| filePath  | String  | 文件保存在服务器的路径 |

------

### 5.3 添加提问

- **请求URL**
> [/interface/pc/qa/addWxQuestion](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| title   | String,不可为空 | 标题 |
| content  | String,不可为空 | 内容 |
| pic | String,可为空 | 图片(多个逗号分隔) |

- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000标识成功 0001失败 8888未登录 |
| content  | String  | 错误时为错误信息 正确时为空 |


- **返回示例**
``` json
 // 正确示例
{
    "code": "0000"
}
// 错误示例
{
    "code": "0001",
    "content": "提问失败!",
    "url": ""
}

```

------


### 5.4 查看问题明细

- **请求URL**
> [/interface/pc/qa/getWxQuestionInfo](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| id   | Integer,不可为空 | 提问ID |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| 提问相关返回值(questionInfo)↓↓↓ |  |  |
| questionInfo | obj  | 提问对象 |
| title | String  | 提问标题 |
| content | String | 提问内容 |
| pic | String | 提问的图片(多个逗号分隔) |
| picArr | String[] | 提问的图片 |
| questionPersonName | String | 提问人姓名 |
| creatorUserPic | String | 提问人头像 |
| visitTimes | String | 被浏览的次数 |
| created | String | 创建时间 |


- **返回示例**

``` json

{
    "code": "0000",
    "content": "",
    "result": {
        "questionInfo": {
            "answerCount": 0,
            "content": "test提问标题",
            "created": "2018-11-26 17:04:49",
            "creator": 194,
            "creatorUserPic": "/mobile/doctor/images/default-head-image.png",
            "delFlag": 0,
            "id": 12,
            "pic": "/attached/userImg/20181126/2018112615001430.png,/attached/userImg/20181126/2018112615001430.png,/attached/userImg/20181126/2018112615001430.png",
            "questionPersonName": "张宝兴",
            "title": "test提问标题",
            "visitTimes": 4
        }
    },
    "url": ""
}


```

------

### 5.5 查看回答分页列表

- **请求URL**
> [/interface/pc/qa/getAnswerListByQuestionId](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| id   | Integer,不可为空 | 提问ID |
| pageNumber   | Integer,不可为空 | 当前页 |
| limit   | Integer,不可为空 | 分页大小 |
| userId | Integer,可为空 | 用户ID 非必填 |
| pCenterMark | Integer,可为空 | 个人中心进来需传1 和userId 否则不需要传 |
| userMsgId | Integer,可为空 | 从消息进入问答 需传入该参数 为消息ID |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| 回答相关返回值↓↓↓ |  |  |
| answerList | array | 回答的数组 |
| canDel | String | 能否删除 0不能删除 1可以删除(判断依据 是否是自己创建的回复) |
| praiseCounts | String | 当前点赞数量 |
| nowPraiseStatus | String | 当前点赞状态 0未点赞  1已点赞 |
| creatorUserPic | String | 回答人头像 |
| creatorName | String | 回答人姓名 |
| creator | String | 回答人ID |
| answerId | String | 回答ID|
| created | String | 回答时间 |
| content | String | 回答的内容 |
| pic | String[] | 回答的图片 |
| 回答下面的回复相关返回值↓↓↓ |  |  |
| children | array | 回复的数组 (后台递归查询的所有回复 可能为[] 就是没有回复) |
| fromName | String | 回复人姓名  A->B   即A |
| fromUserPic | String | 回复人头像  A->B   即A |
| creator | Integer | 回复人ID |
| toName | String | 回复目标人姓名 A->B   即B |
| toUserPic | String | 回复目标头像  A->B   即B |
| answerCreator | Integer | 回复目标人ID |
| content | String | 回复内容 |

- **返回示例**
``` json

{
    "code": "0000",
    "content": "",
    "result": {
        "pageData": {
            "current": 1,
            "pages": 2,
            "records": [
                {
                    "canDel": "1",
                    "children": [
                        {
                            "answerCreator": 194,
                            "answerId": 4,
                            "children": [
                                {
                                    "answerCreator": 194,
                                    "answerId": 4,
                                    "content": "我是给回复的回复",
                                    "created": "2018-11-28 09:20:09",
                                    "creator": 194,
                                    "delFlag": 0,
                                    "fromName": "张宝兴",
                                    "id": 7,
                                    "questionId": 12,
                                    "replyId": 6,
                                    "sort": 0,
                                    "toName": "张宝兴"
                                }
                            ],
                            "content": "我是给回答的回复",
                            "created": "2018-11-28 09:16:18",
                            "creator": 194,
                            "delFlag": 0,
                            "fromName": "张宝兴",
                            "id": 6,
                            "questionId": 12,
                            "replyId": 0,
                            "sort": 0,
                            "toName": "张宝兴"
                        }
                    ],
                    "created": "2018-11-28 09:10:01",
                    "creatorName": "张宝兴",
                    "praiseCounts": 0,
                    "pic": "/attached/userImg/20181126/2018112615001430.png,/attached/userImg/20181126/2018112615001430.png,/attached/userImg/20181126/2018112615001430.png",
                    "creatorUserPic": "/mobile/doctor/images/default-head-image.png",
                    "content": "测试的回答内容",
                    "nowPraiseStatus": 0
                }
            ],
            "size": 1,
            "total": 2
        }
    },
    "url": ""
}


```

------


### 5.6 添加回答

- **请求URL**
> [/interface/pc/qa/addWxAnswer](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| questionId   | Integer,不可为空 | 问题ID |
| content  | String,不可为空 | 内容 |
| pic | String,可为空 | 图片(多个逗号分隔) |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000标识成功 0001失败 8888未登录 |
| content  | String  | 错误时为错误信息 正确时为空 |




- **返回示例**
``` json
 // 正确示例
{
    "code": "0000"
}
// 错误示例
{
    "code": "0001",
    "content": "添加回答失败!",
    "url": ""
}

```

------

### 5.7 添加回复(或@指定人回复)

- **请求URL**
> [/interface/pc/qa/addWxReply](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| questionId   | Integer,不可为空 | 问题ID |
| answerId   | Integer,不可为空 | 回答ID |
| content  | String,不可为空 | 内容 |
| answerCreator  | Integer,可为空 | 可以不传 不传默认回复给回答人  传就回复给指定回答人或回复人 |
| replyId  | Integer,可为空 | 可以不传 不传就是一级回复 如果不是一级回复需和answerCreator字段一起传给后台 |




- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000标识成功 0001失败 8888未登录 |
| content  | String  | 错误时为错误信息 正确时为空 |




- **返回示例**

``` json
 // 正确示例
{
    "code": "0000"
}
// 错误示例
{
    "code": "0001",
    "content": "添加回复失败!",
    "url": ""
}

```

------

### 5.8 点赞/取消点赞

- **请求URL**
> [/interface/pc/qa/giveLikes](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| answerId   | Integer,不可为空 | 回答ID |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000标识成功 0001失败 8888未登录 |
| content  | String  | 错误时为错误信息 正确时为空 |




- **返回示例**

``` json
 // 正确示例
{
    "code": "0000"
}
// 错误示例
{
    "code": "0001",
    "content": "点赞失败!",
    "url": ""
}

```

------


### 5.9 删除回答

- **请求URL**
> [/interface/pc/qa/delAnswer](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| answerId   | Integer,不可为空 | 回答ID |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000标识成功 0001失败 8888未登录 |
| content  | String  | 错误时为错误信息 正确时为空 |


- **返回示例**

``` json
 // 正确示例
{
    "code": "0000"
}
// 错误示例
{
    "code": "0001",
    "content": "删除失败!",
    "url": ""
}

```

------



------


### 5.10 删除回复

- **请求URL**
> [/interface/pc/qa/delReply](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| replyId   | Integer,不可为空 | 回复ID |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| code  | String  | 0000标识成功 0001失败 8888未登录 |
| content  | String  | 错误时为错误信息 正确时为空 |


- **返回示例**

``` json
 // 正确示例
{
    "code": "0000"
}
// 错误示例
{
    "code": "0001",
    "content": "删除失败!",
    "url": ""
}

```

------


### 5.11 获取我的问题/我的回答

- **请求URL**
> [/interface/pc/qa/getMyQuestionOrAnswerList](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| pageNumber   | Integer,不可为空 | 当前页 |
| limit   | Integer,不可为空 | 页大小 |
| type   | Integer,不可为空 | 类型 0为我的问题 1为我的回答 默认为0 |


- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| content | String  | type=0时为提问内容/type=1时为回答内容 |
| visitTimes | String  | 浏览次数 |
| created | String  | 浏览时间 |
| answerCount | Integer  | 回答数量 |
| questionContent | String  | type=1时才存在该返回值提问内容 |



- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
        "pageData": {
            "current": 1,
            "pages": 1,
            "records": [
                {
                    "answerCount": 0,
                    "content": "test提问标题",
                    "created": "2018-11-26 17:04:49",
                    "creator": 194,
                    "creatorUserPic": "/mobile/doctor/images/default-head-image.png",
                    "delFlag": 0,
                    "id": 12,
                    "pic": "/attached/user1430.png,/attached/user01430.png",
                    "questionPersonName": "张宝兴",
                    "title": "test提问标题",
                    "visitTimes": 1
                }
            ],
            "size": 10,
            "total": 1
        }
    },
    "url": ""
}

```

------

## 6 热门模块

### 6.1查询热门分类接口

- **请求URL**

> [192.168.0.119:8081/interface/pchotPopularFront/listData](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| null | null     | 没有参数 |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| scenicId |  | 景区名称 |
| scenicImge |  | 背景图 |
| average |  | 平均值 |
| id |  |  |

- **返回示例**

```json
{
	"code": "0000",
	"content": "",
	"result": {
		"pageData": [{
			"average": 2.5,
			"id": 1,
			"delFlag": 0,
			"scenicImge": "/attached/scenicImge/20181116/61a5842c-3ff8-4799-ba2f-5d3b53c0d956.png"
		}, {
			"average": 0.0,
			"scenicId": "黑虎泉",
			"id": 2,
			"delFlag": 0,
			"scenicImge": "/attached/scenicImge/20181122/0df060a7-377a-4d37-8ab5-528fec9c926e.jpg"
		}]
	}
}
  ```

------

### 6.2上传图片路径

- **请求URL**
> [/publicinterface/getImgurlbyfile/hotComment](##)

- **请求方式** 

> **POST**
> 请求头需要设定 Content-Type: multipart/form-data;

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| imgfile  | File,不可为空 | 选中要上传的图片 |



- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| filePath  | String  | 文件保存在服务器的路径 |


> 注意 调用该接口仅仅是将图片保存至服务器 具体更新数据库还需要调用下面2.4进行修改用户头像


- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
        "filePath": "/attached/userImg/20181126/2018112609030817.png"
    }
}

// 错误示例
{
    "code": "0001",
    "content": "文件类型不支持！",
    "url": ""
}
```
------

### 6.3新增评论接口

- **请求URL**

> [192.168.0.119:8081/interface/pchotPopularFront/save]()

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| scenicGrade |      | 总体点评分数 |
| scenicExperiencegrade |      | 体验分数 |
| scenicServegrade |      | 景区服务分数 |
| performanceGrade |      | 性价比分数 |
| title |      | 标题 |
| content |      | 内容 |
| userId |      | 用户id |
| scenicImge |      | 景区图片 |
| commentId |      | 景区id |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| success|   boolean|  请求成功与否|
| code|   Integer|  执行结果code|
| message|   String|  执行结果消息|

- **返回示例**

```json
{"code":"0001","content":"您已经评论过该景区","url":""}
```
------

### 6.4查询热门评论

- **请求URL**

> [192.168.0.119:8081/interface/pchotPopularFront/listTopic](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| userId |      | 用户id |
| commentId |      | 景区id |
| pageNumber |      | 开始页数 |
| pageSize |      | 每页显示多少条 |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| id|   |  点评id |
| scenicGrade |   |  总体点评分数  |
| scenicExperienceGrade|   |  体验分数 |
| scenicServeGrade|   |  景区服务分数 |
| performanceGrade|   |  性价比分数 |
| title |   |  标题 |
| content |   |  内容 |
| publishedDate |   |  发表日期 |
| userId |   |  用户id |
| scenicImge |   |  景区图片 |
| comment_id |   |  景区id |
| praise |   |  已点赞为true 没有点赞为false |
| giveaLike |   |  点赞数 |

- **返回示例**

```json
{"code":"0001","content":"您已经评论过该景区","url":""}
```
------

### 6.5查询景区平均分

- **请求URL**

> [192.168.0.119:8081/interface/pchotPopularFront/getHotGrade](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| commentId |      | 景区id |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| id|   |  点评id |
| scenicGrade |   |  总体点评分数  |
| scenicExperienceGrade |   |  体验分数 |
| scenicServeGrade |   |  景区服务分数 |
| performanceGrade |   |  性价比分数 |

- **返回示例**

```json
{"code":"0001","content":"您已经评论过该景区","url":""}
```
------

### 6.5新增点赞接口

- **请求URL**

> [192.168.0.119:8081/interface/pchotPopularFront/newCommentsLike](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| userId |      | 用户id |
| articleId |      | 热门点评id |

- **返回参数**

{
   "code": "0000",
   "content": "",
}

------

### 6.7取消点赞

- **请求URL**

> [192.168.0.119:8081/interface/pchotPopularFront/cancelCommentsLike](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| userId |      | 用户id |
| articleId |      | 热门点评id |

- **返回参数**

{
    "code": "0000",
    "content": "",
}

------

### 6.8个人中心 删除点评

- **请求URL**

> [192.168.0.119:8081/interface/pchotPopularFront/deleteTopic](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| id |      | 热门点评id |

- **返回参数**

{
"code": "0000",
"content": "",
}

------

### 6.9个人中心 查询所有点评

- **请求URL**

> [192.168.0.119:8081/interface/pchotPopularFront/getHotCommentsAll](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| pageNumber |      | 当前页 |
| pageSize |      | 每页显示多少条 |
| userId |      | 用户id |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| id|   |  点评id |
| scenicGrade |   |  总体点评分数  |
| scenicExperienceGrade|   |  体验分数 |
| scenicServeGrade|   |  景区服务分数 |
| performanceGrade|   |  性价比分数 |
| title |   |  标题 |
| content |   |  内容 |
| publishedDate |   |  发表日期 |
| userId |   |  用户id |
| userPic |   |  用户头像 |
| nickName |   |  用户头像 |
| scenicImge |   |  景区图片 |
| comment_id |   |  景区id |
| praise |   |  已点赞为true 没有点赞为false |
| giveaLike |   |  点赞数 |

- **返回示例**

```json
{"code":"0001","content":"您已经评论过该景区","url":""}
```
------

## 7 美食模块
### 7.1获取美食列表

- **请求URL**

  > http://192.168.0.45:8083/interface/pcfood/getFoodList

- **请求方式**

  >**POST**

- **返回**

  | 返回参数    | 参数类型 | 参数说明 |
  | ----------- | -------- | :------- |
  | id          | Integer  | 美食ID   |
  | foodPicture | String   | 美食图片 |
  | foodName    | String   | 美食名称 |
  | foodIntro   | String   | 美食简介 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		list: [{
  				foodPicture: "/attached/foodPicture/20181126/89d18a8d-9d09-40dc-b6e0-d275f7ffa36e.jpg",
  				foodName: "蒜蓉虾",
  				foodIntro: "善用兵者，役不再籍，粮不三载；取用于国，因粮于敌，故军食可足也。国之贫于师者远输，远输则百姓贫。近于师者贵卖，贵卖则百姓财竭，财竭则急于丘役。力屈、财殚，中原内虚于家。百姓之费，十去其七；公家之费，破车罢马，甲胄矢弩。戟楯蔽橹，丘牛大车，十去其六。",
  				id: 1
  			},
  			{
  				foodPicture: "/attached/foodPicture/20181126/3bace2b3-271f-46f0-bc98-a5e8b945d43b.jpg",
  				foodName: "大白菜",
  				foodIntro: "孙子曰：凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮，则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之师举矣。",
  				id: 2
  			}
  		]
  	}
  }
  ```
### 7.2 获取美食详情
- **请求URL**

  > http://192.168.0.45:8083/interface/pcfood/getFoodDetails?foodId=1

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数 | 参数类型 | 参数说明 |
  | -------- | -------- | -------- |
  | foodId   | Integer  | 美食ID   |

- **返回**

  | 返回参数           | 参数类型 | 参数说明 |
  | ------------------ | -------- | :------- |
  | newsDetailsContent | String   | 咨询简介 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		details: "美食详情"
  	}
  }
  ```
### 7.3 更多美食

- **请求URL**

  >http://192.168.0.45:8083/interface/pcfood/getMoreFoods?pageNumber=0&pageSize=3

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数   | 参数类型 | 参数说明 |
  | ---------- | -------- | -------- |
  | pageNumber | Integer  | 当前页码    |
  | pageSize | Integer |每页大小|

- **返回**

  | 返回参数  | 参数类型      | 参数说明 |
  | --------- | :------------ | :------- |
  | id        | Integer       | 美食ID   |
  | foodIntro | String        | 美食简介 |
  | foodData  | LocalDateTime | 发布时间 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		pageData: {
  			current: 1,
  			pages: 4,
  			records: [{
  					foodData: "2018-11-26 11:40:02",
  					foodIntro: "善用兵者，役不再籍，粮不三载；取用于国，因粮于敌，故军食可足也。国之贫于师者远输，远输则百姓贫。近于师者贵卖，贵卖则百姓财竭，财竭则急于丘役。力屈、财殚，中原内虚于家。百姓之费，十去其七；公家之费，破车罢马，甲胄矢弩。戟楯蔽橹，丘牛大车，十去其六。",
  					id: 1
  				},
  				{
  					foodData: "2018-11-26 11:40:38",
  					foodIntro: "孙子曰：凡用兵之法，驰车千驷，革车千乘，带甲十万，千里馈粮，则内外之费，宾客之用，胶漆之材，车甲之奉，日费千金，然后十万之师举矣。",
  					id: 2
  				},
  				{
  					foodData: "2018-11-26 11:39:44",
  					foodIntro: "其用战也胜，久则钝兵挫锐，攻城则力屈，久暴师则国用不足。夫钝兵挫锐，屈力殚货，则诸侯乘其弊而起，虽有智者，不能善其后矣。故兵闻拙速，未睹巧之久也。夫兵久而国利者，未之有也。故不尽知用兵之害者，则不能尽知用兵之利也。",
  					id: 3
  				}
  			],
  			size: 3,
  			total: 10
  		}
  	}
  }
  ```
## 8 攻略模块

### 8.1查询热门分类接口

- **请求URL**

> [192.168.0.118:8081/interface/pcStrategyFront/Tablelist](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------- | :------- |
| null     | null     | 没有参数 |

- **返回参数**

| 返回参数   | 参数类型 | 参数说明 |
| :--------- | :------- | :------- |
| scenicId   |          | 景区名称 |
| scenicImge |          | 背景图   |
| id         |          |          |

- **返回示例**

```json
{
	"code": "0000",
	"content": "",
	"result": {
		"pageData": [{
			"scenicId": "趵突泉", 
			"id": 1,
			"delFlag": 0,
			"scenicImge": "/attached/scenicImge/20181113/9267524c-7602-4e6a-966d-ce2417e28432.png"
		}, {
			"scenicId": "黑虎泉",
			"id": 4,
			"delFlag": 0,
			"scenicImge": "/attached/scenicImge/20181120/80645243-852f-4127-9825-affeacaab13a.jpg"
		}]
	}
}
```
------

### 8.1上传图片路径

- **请求URL**
> [192.168.0.118:8081/publicinterface/getImgurlbyfile/strategyTable](##)

- **请求方式** 

> **POST**
> 请求头需要设定 Content-Type: multipart/form-data;

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------------- | :---------------------------------- |
| imgfile  | File,不可为空 | 选中要上传的图片 |



- **返回**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| filePath  | String  | 文件保存在服务器的路径 |


> 注意 调用该接口仅仅是将图片保存至服务器 具体更新数据库还需要调用下面2.4进行修改用户头像


- **返回示例**
``` json
 // 正确示例
{
    "code": "0000",
    "content": "",
    "result": {
       "filePath": "/attached/userImg/20181126/2018112609030817.png"
    }
}

// 错误示例
{
    "code": "0001",
    "content": "文件类型不支持！",
    "url": ""
}
```

------

### 8.2 新增攻略
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/saveContent](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数   | 参数类型 | 参数说明       |
| :--------- | :------- | :------------- |
|  theTitle  |       | 标题 |
|  detailsContent   |       |   内容   |
|  userId   |       |   用户id   |
|  tableId   |       |   景区id   |
|  backgroundImg   |       |   背景图   |

- **返回参数**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| success  | boolean  | 请求成功与否 |
| code     | Integer  | 执行结果code |
| message  | String   | 执行结果消息 |

- **返回示例**
```json 
{
"success": true,
"code": 200,
"message": "操作正确"
}
```
------

### 8.2查询随机
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/contentLis](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数   | 参数类型 | 参数说明       |
| :--------- | :------- | :------------- |
| pageSize   | int      | 每页显示多少条 |
| tableId    | int      | 分类查询id     |

- **返回参数**

| 返回参数      | 参数类型 | 参数说明 |
| :------------ | :------- | :------- |
| id            |          |          |
| theTitle      |          | 标题名称 |
| publishedDate |          | 发表时间 |
| views         |          | 浏览次数 |
| backgroundImg |          | 背景图   |
| userName      |          | 用户名   |
| headPortrait  |          | 用户头像 |

- **返回示例**

```json
{
	"code": "0000",
	"content": "",
	"result": {
		"pageData": {
			"current": 1,
			"pages": 1,
			"records": [{
				"backgroundImg": "/attached/backgroundImg/20181113/4dab6839-d3c5-4328-8106-178d7c8a5f34.png",
				"id": 4,
				"publishedDate": "2018-11-13 16:47:22",
				"theTitle": "是是是",
				"userName": "admin",
				"headPortrait": "/front/images/user.png",
				"views": 0
			}],
			"size": 2,
			"total": 1
		}
	}
}
```
------

### 8.3查询攻略详情
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/getStrategyById](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------- | :------- |
| id       | int      | 攻略id   |
| userId   | int      | 用户id   |

- **返回参数**

| 返回参数       | 参数类型 | 参数说明                 |
| :------------- | :------- | :----------------------- |
| id             |          |                          |
| theTitle       |          | 标题名称                 |
| detailsContent |          | 内容                     |
| giveaLike      |          | 点赞数                   |
| publishedDate  |          | 发表时间                 |
| views          |          | 浏览次数                 |
| userName       |          | 用户名                   |
| headPortrait   |          | 用户头像                 |
| praise         |          | 点赞是true 没点赞是false |

- **返回示例**

```json
{
  "backgroundImg": "/attached/backgroundImg/20181113/4dab6839-d3c5-4328-8106-178d7c8a5f34.png",
  "headPortrait": "/front/images/user.png",
  "detailsContent": "<p>对对对</p><p><span style=\"display:none;\">tmp</span></p>",
  "id": 4,
  "publishedDate": "2018-11-13 16:47:22",
  "theTitle": "是是是",
  "userName": "admin",
  "views": 1,
  "praise": false
}
```

------

### 8.4新增评论
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/theNewData](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数   | 参数类型 | 参数说明 |
| :--------- | :------- | :------- |
| contentId  | int      | 攻略表id |
| content    | string   | 评论内容 |
| fromUserid | int      | 用户id   |

- **返回参数**

| 返回参数 | 参数类型 | 参数说明   |
| :------- | :------- | :--------- |
| Flag     | Boolean  | true,false |
| msg      |          | 返回消息   |

------

### 8.5新增回复
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/theNewReplyData](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数     | 参数类型 | 参数说明       |
| :----------- | :------- | :------------- |
| commentId    | int      | 评论id         |
| replyId      | int      | 回复目标id     |
| content      | string   | 回复内容       |
| fromUserid   | int      | 回复用户id     |
| toUserid     | int      | 回复用户目标id |
| recoveryTime | date     | 回复时间       |

- **返回参数**

| 返回参数 | 参数类型 | 参数说明   |
| :------- | :------- | :--------- |
| Flag     | Boolean  | true,false |
| msg      |          | 返回消息   |

------

### 8.6查询评论回复
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/getDataReplyTion](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数   | 参数类型 | 参数说明       |
| :--------- | :------- | :------------- |
| pageNumber | int      | 第几页         |
| pageSize   | int      | 每页显示多少条 |
| contentId  | int      | 攻略id         |
| userId     | int      | 用户id         |
| otherId     | int      | 评论id          |

- **返回参数**

| 返回参数       | 参数类型 | 参数说明                          |
| :------------- | :------- | :-------------------------------- |
| id             |          |                                   |
| content        |          | 评论内容                          |
| commentTime    |          | 评论时间                          |
| userName       |          | 用户名                            |
| headPortrait   |          | 用户头像                          |
| giveaLike      |          | 点赞数                            |
| praise         |          | 点赞状态 true是点赞 false是没点赞 |
| userName       |          | 用户名                            |
| replyComment{} |          | 回复数组                          |
| id             |          | 回复id                            |
| content        |          | 回复内容                          |
| userName       |          | 回复用户名称                      |
| headPortrait   |          | 回复用户头像                      |
| headPortrait   |          | 回复目标昵称                      |

- **返回示例**
  ```json
  {
  "code": "0000",
  "content": "",
  "result": {
  	"pageData": {
  	"current": 1,
  		"pages": 0,
  		"records": [{
  			"content": "你好啊路明非1",
  			"giveaLike": 2,
  			"headPortrait": "/attached/userImg/20180831/2018083117270861.jpg",
  			"id": 1,
  			"praise": false,
  			"replyComment": [{
  				"content": "333",
  				"id": 1,
  				"replyPortrait": "/attached/userImg/20180831/2018083117270861.jpg",
  				"replyTargetName": "张三",
  				"userName": "张三"
  			}],
  			"userName": "张三"
  		}],
  		"size": 2,
  		"total": 0
  	}
  }
  }
  
  ```

### 8.7攻略点赞
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/newPointPraise](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------- | :------- |
| typeId   | int      | 攻略id   |
| userId   | int      | 用户id   |

- **返回参数**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| success  | boolean  | 请求成功与否 |
| code     | Integer  | 执行结果code |
| message  | String   | 执行结果消息 |

- **返回示例**
```json 
{
"success": true,
"code": 200,
"message": "操作正确"
}
```


### 8.8攻略取消点赞
- **请求URL**

> [192.168.0.119:8081/interface/strategyFrontPort/strategyCancel](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| typeId | int     | 攻略id  |
| userId | int     | 用户id |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| success|   boolean|  请求成功与否|
| code|   Integer|  执行结果code|
| message|   String|  执行结果消息|

- **返回示例**
  ```json 
  {
  "success": true,
  "code": 200,
  "message": "操作正确"
  }
  
  ```

### 8.9评论点赞接口
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/newCommentLike](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数  | 参数类型 | 参数说明 |
| :-------- | :------- | :------- |
| commentId | int      | 评论id   |
| userId    | int      | 用户id   |

- **返回参数**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| success  | boolean  | 请求成功与否 |
| code     | Integer  | 执行结果code |
| message  | String   | 执行结果消息 |

- **返回示例**
​```json 
{
"success": true,
"code": 200,
"message": "操作正确"
}
```
### 8.10取消点赞接口
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/cancelCommentLike](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数  | 参数类型 | 参数说明 |
| :-------- | :------- | :------- |
| commentId | int      | 评论id   |
| userId    | int      | 用户id   |

- **返回参数**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| success  | boolean  | 请求成功与否 |
| code     | Integer  | 执行结果code |
| message  | String   | 执行结果消息 |

- **返回示例**
```json 
{
"success": true,
"code": 200,
"message": "操作正确"
}
```
### 8.11删除评论或者回复
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/deleteComment](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数  | 参数类型 | 参数说明 |
| :-------- | :------- | :------- |
| id    | int      |  评论id或者回复id   |
| status    | int      |  0是删除评论 1是删除回复  |

- **返回参数**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| success  | boolean  | 请求成功与否 |
| code     | Integer  | 执行结果code |
| message  | String   | 执行结果消息 |

- **返回示例**
```json 
{
"success": true,
"code": 200,
"message": "操作正确"
}
```
### 8.12个人中心查询攻略
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/getPersonalStrategy](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数   | 参数类型 | 参数说明       |
| :--------- | :------- | :------------- |
| pageNumber | int      | 第几页         |
| pageSize   | int      | 每页显示多少条 |
| userId   | int      | 用户id |

- **返回参数**

| 返回参数      | 参数类型 | 参数说明 |
| :------------ | :------- | :------- |
| id            |          |          |
| theTitle      |          | 标题名称 |
| publishedDate |          | 发表时间 |
| views         |          | 浏览次数 |
| backgroundImg |          | 背景图   |
| userName      |          | 用户名   |
| headPortrait  |          | 用户头像 |

- **返回示例**
```json 
{
"success": true,
"code": 200,
"message": "操作正确"
}
```
### 8.13删除攻略
- **请求URL**

> [192.168.0.119:8081/interface/pcStrategyFront/deleteStrategy](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数 | 参数类型 | 参数说明 |
| :------- | :------- | :------- |
| id       | int      | 攻略id   |

- **返回参数**

| 返回参数 | 参数类型 | 参数说明     |
| :------- | :------- | :----------- |
| success  | boolean  | 请求成功与否 |
| code     | Integer  | 执行结果code |
| message  | String   | 执行结果消息 |

- **返回示例**
```json 
{
"success": true,
"code": 200,
"message": "操作正确"
}
```

## 9 投诉模块
### 9.1保存投诉内容

- **请求URL**

  >http://192.168.0.45:8083/interface/pcComplaints/save?scenicId=2&complaintPersonId=70&complaintPicture=/27149.jpg&complaintContent=132124124

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数          | 参数类型 | 参数说明 |
  | ----------------- | -------- | -------- |
  | complaintPersonId | Integer  | 投诉人ID |
  | scenicId          | Integer  | 景区ID   |
  | complaintContent  | String   | 投诉内容 |
  | complaintPicture  | String   | 投诉图片 |

- **返回**

   |  返回参数    | 参数类型     |   参数说明     |
  | ---- | ---- | ---- |
  | code | String | 0000成功 0001失败 |

- **返回示例**

  ```json
  //成功示例
  {
  	"code": "0000",
  	"url": ""
  }
  ```

### 9.2上传投诉图片

- **请求URL**

  >http://192.168.0.45:8083/publicinterface/getImgurlbyfile/complaints

- **请求方式**

  >**POST** 请求头需要设定 Content-Type: multipart/form-data;**

- **请求参数**

  | 请求参数 | 参数类型      | 参数说明       |
  | -------- | ------------- | -------------- |
  | imgfile  | File,不可为空 | 选中要上传的图 |

- **返回**

  | 返回参数 | 参数类型 | 参数说明               |
  | -------- | -------- | ---------------------- |
  | filePath | String   | 文件保存在服务器的路径 |

- **返回示例**

  ``` json
  // 正确示例
  {
  	"code": "0000",
  	"content": "",
  	"result": {
  		"filePath": "/attached/userImg/20181126/2018112609030817.png"
  	}
  }
  // 错误示例
  {
  	"code": "0001",
  	"content": "文件类型不支持！",
  	"url": ""
  }
  ```

### 9.3 我的投诉
- **请求URL**

  >http://192.168.0.45:8083/interface/pcComplaints/getMyComplaints?pageNumber=1&pageSize=5&userId=70

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数   | 参数类型 | 参数说明   |
  | ---------- | -------- | ---------- |
  | pageNumber | Integer  | 当前页面   |
  | pageSize   | Integer  | 每页大小   |
  | userId     | Integer  | 投诉用户ID |

- **返回**

  | 返回参数         | 参数类型      | 参数说明            |
  | ---------------- | ------------- | ------------------- |
  | id               | Integer       | 投诉ID              |
  | complaintContent | String        | 投诉内容            |
  | complaintPicture | String        | 投诉图片            |
  | complaintData    | LocalDateTime | 投诉时间            |
  | feedbackContent  | String        | 反馈内容            |
  | haveRead         | String        | 是否已读0未读 1已读 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		pageData: {
  			current: 1, //当前页码
  			pages: 1, //总页码
  			records: [{
  					feedbackContent: "会处理的2",
  					complaintPersonId: 70,  //投诉用户ID
  					scenicId: 2,
  					haveRead: 0,
  					complaintContent: "13gfgghghg",
  					id: 5,
  					complaintPicture: "/attached/scenicRightPicture/20181121/0fb17d9c-3d4e-43f1-b6d3-b75aecf55610.jpg,/attached/scenicRightPicture/20181120/1c0ed659-2a42-4784-bff7-654747043149.jpg",
  					delFlag: 0,
  					complaintData: "2018-11-28 08:26:28",
  					status: 1
  				},
  				{
  					feedbackContent: "会处理的3 ",
  					complaintPersonId: 70,
  					scenicId: 2,
  					haveRead: 0,
  					complaintContent: "132124124",
  					id: 4,
  					complaintPicture: "/attached/scenicRightPicture/20181121/0fb17d9c-3d4e-43f1-b6d3-b75aecf55610.jpg,/attached/scenicRightPicture/20181120/1c0ed659-2a42-4784-bff7-654747043149.jpg",
  					delFlag: 0,
  					complaintData: "2018-11-26 14:25:32",
  					status: 1
  				},
  				{
  					feedbackContent: "会处理的1",
  					complaintPersonId: 70,
  					scenicId: 2,
  					haveRead: 0,
  					complaintContent: "132124124",
  					id: 3,
  					complaintPicture: "/attached/scenicRightPicture/20181121/0fb17d9c-3d4e-43f1-b6d3-b75aecf55610.jpg,/attached/scenicRightPicture/20181120/1c0ed659-2a42-4784-bff7-654747043149.jpg",
  					delFlag: 0,
  					complaintData: "2018-11-26 13:17:49",
  					status: 1
  				}
  			],
  			size: 5, //每页数据条数
  			total: 3 //总的数据条数
  		}
  	}
  }
  ```
### 9.4 投诉删除
- **请求URL**

  >http://192.168.0.45:8083/interface/pcComplaints/deleteComplaints?complaintId=1

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数    | 参数类型 | 参数说明 |
  | ----------- | -------- | -------- |
  | complaintId | Integer  | 投诉ID   |

- **返回**
  | 返回参数 | 参数类型 | 参数说明                                            |
  | -------- | -------- | --------------------------------------------------- |
  | code     | String   | 正确码为0000 错误码为0001 特殊结果8888 为未登录标识 |

- **返回示例**

  ``` json
  {
  	code: "0000"
  }
  ```

### 9.5 投诉数量

- **请求URL**

> http://192.168.0.45:8083/interface/pcComplaints/countComplaints?userId=70

- **请求方式**

  > POST

- **请求参数**

  | 请求参数 | 参数类型 | 参数说明 |
  | -------- | -------- | -------- |
  | userId   | Integer  | 用户ID   |

- **返回**

  | 返回参数 | 参数类型 | 参数说明       |
  | -------- | -------- | -------------- |
  | iden     | Integer  | 用户的投诉数量 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		iden: 3
  	}
  }
  ```

## 10 曝光模块
### 10.1 保存曝光内容

- **请求URL**

  > http://192.168.0.45:8083/interface/pcexposure/save?scenicId=2&exposureUserid=70&exposureImge=/27149.jpg&exposureContent=132124124

- **请求方式**

  >**POST**

- **请求参数**

  |  请求参数    |  参数类型     |参数说明       |
  | ---- | ---- | ---- |
  | scenicId | Integer | 景区ID     |
  | exposureUserid | Integer | 曝光用户ID |
  | exposureImge | String | 曝光图片 |
  | exposureContent | String | 曝光内容 |

- **返回**

  |  返回参数    | 参数类型     |   参数说明     |
  | ---- | ---- | ---- |
  | code | String | 0000成功 0001失败 |

- **返回示例**

  ```json
  //成功示例
  {
  	"code": "0000",
  	"url": ""
  }
  ```
### 10.2 上传曝光图片

- **请求URL**

  >http://192.168.0.45:8083/publicinterface/getImgurlbyfile/exposureImg

- **请求方式**

  > **POST** 请求头需要设定 Content-Type: multipart/form-data;

- **请求参数**

  | 请求参数 | 参数类型      | 参数说明       |
  | -------- | ------------- | -------------- |
  | imgfile  | File,不可为空 | 选中要上传的图 |
- **返回**

  |  返回参数    | 参数类型     |   参数说明     |
  | ---- | ---- | ---- |
  | filePath | String | 文件保存在服务器的路径 |

- **返回示例**

  ``` json
  // 正确示例
  {
  	"code": "0000",
  	"content": "",
  	"result": {
  		"filePath": "/attached/userImg/20181126/2018112609030817.png"
  	}
  }
  // 错误示例
  {
  	"code": "0001",
  	"content": "文件类型不支持！",
  	"url": ""
  }
  ```

### 10.3 我的曝光

- **请求URL**

  >http://192.168.0.45:8083/interface/pcexposure/getMyExposure?pageNumber=1&pageSize=5&userId=70

- **请求方式**

  >**POST**

- **请求参数**

  | 请求参数   | 参数类型 | 参数说明   |
  | ---------- | -------- | ---------- |
  | pageNumber | Integer  | 第几页     |
  | pageSize   | Integer  | 每页大小   |
  | userId     | Integer  | 曝光用户ID |

- **返回**

  | 返回参数        | 参数类型      | 参数说明                |
  | --------------- | ------------- | ----------------------- |
  | exposureContent | String        | 曝光内容                |
  | exposureImge    | String        | 曝光图片                |
  | exposureDate    | LocalDateTime | 曝光时间                |
  | exposureFeedback        |        | 管理员回复对象  |
  | replyDate        |        | 回复时间  |
  | content        |        | 反馈内容  |
  | haveRead        |        | 是否已读  |
   | companyName        |        | 管理员名称  |
    | userPic        |        | 管理员头像  |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		pageData: {
  			current: 1,
  			pages: 1,
  			records: [{
  					exposureUserid: 70, //曝光用户ID
  					exposureDate: "2018-11-19 09:38:30",
  					scenicId: 2,
  					id: 1,
  					exposureImge: "/attached/scenicRightPicture/20181120/6107ec13-7c85-4665-84a1-55c7690a885b.jpg,/attached/scenicRightPicture/20181120/1c0ed659-2a42-4784-bff7-654747043149.jpg,/attached/scenicTopPicture/20181120/e4f7951c-c23f-454f-b803-2b66591e87dc.jpg",
  					delFlag: 0,
  					exposureContent: "黑虎泉景区有人乱让垃圾",
  					status: 0
  				},
  				{
  					exposureUserid: 70, //曝光用户ID
  					exposureDate: "2018-11-20 14:28:34",
  					scenicId: 4,
  					haveRead: 0,
  					id: 2,
  					exposureImge: "/attached/scenicRightPicture/20181120/6107ec13-7c85-4665-84a1-55c7690a885b.jpg,/attached/scenicRightPicture/20181120/1c0ed659-2a42-4784-bff7-654747043149.jpg,/attached/scenicTopPicture/20181120/e4f7951c-c23f-454f-b803-2b66591e87dc.jpg",
  					delFlag: 0,
  					content: "啦啦啦啦啦",
  					exposureContent: "大明湖景区有人乱让垃圾",
  					status: 0
  				},
  				{
  					exposureUserid: 70,
  					exposureDate: "2018-11-20 14:28:34",
  					scenicId: 4,
  					haveRead: 0,
  					id: 2,
  					exposureImge: "/attached/scenicRightPicture/20181120/6107ec13-7c85-4665-84a1-55c7690a885b.jpg,/attached/scenicRightPicture/20181120/1c0ed659-2a42-4784-bff7-654747043149.jpg,/attached/scenicTopPicture/20181120/e4f7951c-c23f-454f-b803-2b66591e87dc.jpg",
  					delFlag: 0,
  					content: "信你个鬼",
  					exposureContent: "大明湖景区有人乱让垃圾",
  					status: 0
  				},
  				{
  					exposureUserid: 70,
  					exposureDate: "2018-11-20 14:28:34",
  					scenicId: 4,
  					haveRead: 0,
  					id: 2,
  					exposureImge: "/attached/scenicRightPicture/20181120/6107ec13-7c85-4665-84a1-55c7690a885b.jpg,/attached/scenicRightPicture/20181120/1c0ed659-2a42-4784-bff7-654747043149.jpg,/attached/scenicTopPicture/20181120/e4f7951c-c23f-454f-b803-2b66591e87dc.jpg",
  					delFlag: 0,
  					content: "啊飒飒大多",
  					exposureContent: "大明湖景区有人乱让垃圾",
  					status: 0
  				}
  			],
  			size: 5,
  			total: 4
  		}
  	}
  }
  ```

### 10.4 曝光删除

- **请求URL**

  >http://192.168.0.45:8083/interface/pcexposure/deleteExposure?exposureId=1

- **请求方式**

  > POST

- **请求参数**

  | 请求参数   | 参数类型 | 参数说明 |
  | ---------- | -------- | -------- |
  | exposureId | Integer  | 曝光ID   |

- **返回**

  | 返回参数 | 参数类型 | 参数说明                                            |
  | -------- | -------- | --------------------------------------------------- |
  | code     | String   | 正确码为0000 错误码为0001 特殊结果8888 为未登录标识 |

- **返回示例**

  ``` json
  {
  	code: "0000"
  }
  ```


### 10.5 曝光数量

- **请求URL**

  >http://192.168.0.45:8083/interface/pcexposure/countExposure?userId=70

- **请求方式**

  > POST

- **请求参数**

  | 请求参数 | 参数类型 | 参数说明 |
  | -------- | -------- | -------- |
  | userId   | Integer  | 用户ID   |

- **返回**

  | 返回参数 | 参数类型 | 参数说明       |
  | -------- | -------- | -------------- |
  | iden     | Integer  | 用户的曝光数量 |

- **返回示例**

  ``` json
  {
  	code: "0000",
  	content: "",
  	result: {
  		iden: 8
  	}
  }
  ```


## 11 商家入驻
### 11.1新增入住

- **请求URL**

> [192.168.0.119:8081/interface/PcMerchantsStayController/saveTopic](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明| 需要调用方法 | 需要传值 |
| :-------- | :--------| :------ | :------ | :------ |
| contactName |      | 联系人姓名 | | |
| contactOperator |      | 联系人手机 | | |
| contactEmail |      | 联系人电子邮箱 | | |
| licenseType |      | 执照类型 | 下拉框调用接口 192.168.0.119:8081/interface/PcMerchantsStayController/getConfDefData |  confValue :license_type  |
| businessLicenseImge |      | 营业执照电子版 | | |
| companyName |      | 公司名称 | | |
| licenseNumber |      | 营业执照注册号 | | |
| province |      | 营业执照所在地 省 | | |
| city |      | 市 | | |
| area |      | 区 | | |
| address |      | 营业执照详细地址 | | |
| theDate |      | 成立日期 | | |
| openingDate |      | 营业期限开始日期 | | |
| closingDate |      | 营业期限 结束日期 | | |
| capital |      | 注册资本 | | |
| business |      | 经营范围 | | |
| documentType |      | 法定代表人证件类型 | 下拉框调用接口 192.168.0.119:8081/interface/PcMerchantsStayController/getConfDefData |confValue:behalf_certificate_type  |
| certificateElectronic |      | 法人证件电子版 | | |
| theLegalName |      | 法定代表人姓名 | | |
| theLegalId |      | 法定代表人证件号 | | |
| startDate |      | 有效开始日期 | | |
| endDate |      | 有效期结束日期 | | |
| companyProvince |      | 公司所在省 | | |
| companyCity |      | 公司所在市 | | |
| companyArea |      | 公司所在区 | | |
| companyAddress |      | 公司详细地址 | | |
| companyPhone |      | 公司电话 | | |
| companyEmergencyContact |      | 公司紧急联系人 | | |
| companyEmergencyPhone |      | 公司紧急联系人手机 | | |
| bankLicenseElectronic |      | 银行开户许可证电子版 | | |
| institutionsCode |      | 组织机构代码 | | |
| institutionsStartDate |      | 组织机构代码证开始日期 | | |
| institutionsEndDate |      | 组织机构代码证结束日期 | | |
| institutionsElectronic |      | 组织机构代码证电子版 | | |
| taxpayerType |      | 纳税人类型 | 192.168.0.119:8081/interface/PcMerchantsStayController/getConfDefData |confValue:tax_type    |
| taxpayerIdentify |      | 纳税人识别号 | | |
| taxpayerCode |      | 纳税类型税码 |192.168.0.119:8081/interface/PcMerchantsStayController/getLinkageData |confValue:confValue   |
| taxRegis |      | 税务登记电子版 | | |
| general |      | 一般纳税人资格证电子版 | | |
| bankAccountName |      | 银行开户名 | | |
| settlementAccount |      | 对公结算银行账号 | | |
| bankBranchName |      | 开户银行支行名称 | | |
| branchProvince |      | 开户银行支行所在省 | | |
| branchCity |      | 开户行支行所在市 | | |
| branchArea |      | 开户行支行所在区 | | |
| categories1 |      | 主营类目1 |192.168.0.119:8081/interface/PcMerchantsStayController/getCategoryData  | |
| categories2 |      | 主营类目2 |192.168.0.119:8081/interface/PcMerchantsStayController/getCategorySubsetData  | categoryId:id|
| shopName |      | 选定店铺名称 | | |
| userId |      | 用户id | | |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| success|   boolean|  请求成功与否|
| code|   Integer|  执行结果code|
| message|   String|  执行结果消息|

- **返回示例**

```json
{"code":"0001","content":"您已经评论过该景区","url":""}
```
------

### 11.2 效验是否存在 用户名和手机号

- **请求URL**

> [192.168.0.119:8081/interface/PcMerchantsStayController/NewMerchantData](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| contactName |      | 联系人姓名 |
| contactOperator |      | 联系人手机 |
| contactEmail |      | 联系人电子邮箱 |
| verification |      | 验证码 |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| success|   boolean|  请求成功与否|
| code|   Integer|  执行结果code|
| message|   String|  执行结果消息|

- **返回示例**

```json
{"code":"0001","content":"手机号已存在","url":""}
```
------

### 11.3 获取验证码

- **请求URL**

> [192.168.0.119:8081/interface/PcMerchantsStayController/getVerification](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| email |      | 电子邮箱 |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| success|   boolean|  请求成功与否|
| code|   Integer|  执行结果code|
| message|   String|  执行结果消息|

- **返回示例**

``` json
true 为成功 false 失败
```
------

### 11.4 前端个人中心查询接口

- **请求URL**

> [192.168.0.119:8081/interface/PcMerchantsStayController/getThemeMessageDataFront](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| userId |      | 用户id |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| auditStatus |   |  0未审核 1驳回 2  通过 |
| submissionDate |    |  申请时间 |
| shopName |   |  店铺名称 |
| feedback |   |  驳回内容 |
| auditDate |   |  审核时间 |

- **返回示例**

```json
[{"auditStatus":"2","submissionDate":"2018-11-19 09:36:22","id":1}]
```
------

### 11.5 根据id查询详情

- **请求URL**

> [192.168.0.119:8081/interface/PcMerchantsStayController/getThemeMessageByIdFront](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明|
| :-------- | :--------| :------ |
| userId |      | 用户id |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| contactName |      | 联系人姓名 |
| contactOperator |      | 联系人手机 |
| contactEmail |      | 联系人电子邮箱 |
| licenseType |      | 执照类型 |
| businessLicenseImge |      | 营业执照电子版 |
| companyName |      | 公司名称 |
| licenseNumber |      | 营业执照注册号 |
| province |      | 营业执照所在地 省 |
| city |      | 市 |
| area |      | 区 |
| address |      | 营业执照详细地址 |
| theDate |      | 成立日期 |
| openingDate |      | 营业期限开始日期 |
| closingDate |      | 营业期限 结束日期 |
| capital |      | 注册资本 |
| business |      | 经营范围 |
| documentType |      | 法定代表人证件类型 | 下拉框调用接口  |
| certificateElectronic |      | 法人证件电子版 |
| theLegalName |      | 法定代表人姓名 |
| theLegalId |      | 法定代表人证件号 |
| startDate |      | 有效开始日期 |
| endDate |      | 有效期结束日期 |
| companyProvince |      | 公司所在省 |
| companyCity |      | 公司所在市 |
| companyArea |      | 公司所在区 |
| companyAddress |      | 公司详细地址 |
| companyPhone |      | 公司电话 |
| companyEmergencyContact |      | 公司紧急联系人 |
| companyEmergencyPhone |      | 公司紧急联系人手机 |
| bankLicenseElectronic |      | 银行开户许可证电子版 |
| institutionsCode |      | 组织机构代码 |
| institutionsStartDate |      | 组织机构代码证开始日期 |
| institutionsEndDate |      | 组织机构代码证结束日期 |
| institutionsElectronic |      | 组织机构代码证电子版 |
| taxpayerType |      | 纳税人类型 |
| taxpayerIdentify |      | 纳税人识别号 |
| taxpayerCode |      | 纳税类型税码  |
| taxRegis |      | 税务登记电子版 |
| general |      | 一般纳税人资格证电子版 |
| bankAccountName |      | 银行开户名 |
| settlementAccount |      | 对公结算银行账号 |
| bankBranchName |      | 开户银行支行名称 |
| branchProvince |      | 开户银行支行所在省 |
| branchCity |      | 开户行支行所在市 |
| branchArea |      | 开户行支行所在区 |
| categories1 |      | 主营类目1  |
| categories2 |      | 主营类目2 |
| shopName |      | 选定店铺名称 |
| userId |      | 用户id |

- **返回参数**
| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| success|   boolean|  请求成功与否|
| code|   Integer|  执行结果code|
| message|   String|  执行结果消息|

- **返回示例**

``` json
true 为成功 false 失败
```
------
### 11.6修改信息

- **请求URL**

> [192.168.0.119:8081/interface/PcMerchantsStayController/updateMerchantData](##)

- **请求方式** 

> **POST**

- **请求参数**

| 请求参数|参数类型|参数说明| 需要调用方法 | 需要传值 |
| :-------- | :--------| :------ | :------ | :------ |
| contactName |      | 联系人姓名 | | |
| contactOperator |      | 联系人手机 | | |
| contactEmail |      | 联系人电子邮箱 | | |
| licenseType |      | 执照类型 | 下拉框调用接口 192.168.0.119:8081/interface/PcMerchantsStayController/getConfDefData |  confValue :license_type  |
| businessLicenseImge |      | 营业执照电子版 | | |
| companyName |      | 公司名称 | | |
| licenseNumber |      | 营业执照注册号 | | |
| province |      | 营业执照所在地 省 | | |
| city |      | 市 | | |
| area |      | 区 | | |
| address |      | 营业执照详细地址 | | |
| theDate |      | 成立日期 | | |
| openingDate |      | 营业期限开始日期 | | |
| closingDate |      | 营业期限 结束日期 | | |
| capital |      | 注册资本 | | |
| business |      | 经营范围 | | |
| documentType |      | 法定代表人证件类型 | 下拉框调用接口 192.168.0.119:8081/interface/PcMerchantsStayController/getConfDefData |confValue:behalf_certificate_type  |
| certificateElectronic |      | 法人证件电子版 | | |
| theLegalName |      | 法定代表人姓名 | | |
| theLegalId |      | 法定代表人证件号 | | |
| startDate |      | 有效开始日期 | | |
| endDate |      | 有效期结束日期 | | |
| companyProvince |      | 公司所在省 | | |
| companyCity |      | 公司所在市 | | |
| companyArea |      | 公司所在区 | | |
| companyAddress |      | 公司详细地址 | | |
| companyPhone |      | 公司电话 | | |
| companyEmergencyContact |      | 公司紧急联系人 | | |
| companyEmergencyPhone |      | 公司紧急联系人手机 | | |
| bankLicenseElectronic |      | 银行开户许可证电子版 | | |
| institutionsCode |      | 组织机构代码 | | |
| institutionsStartDate |      | 组织机构代码证开始日期 | | |
| institutionsEndDate |      | 组织机构代码证结束日期 | | |
| institutionsElectronic |      | 组织机构代码证电子版 | | |
| taxpayerType |      | 纳税人类型 | 192.168.0.119:8081/interface/PcMerchantsStayController/getConfDefData |confValue:tax_type    |
| taxpayerIdentify |      | 纳税人识别号 | | |
| taxpayerCode |      | 纳税类型税码 |192.168.0.119:8081/interface/PcMerchantsStayController/getLinkageData |confValue:confValue   |
| taxRegis |      | 税务登记电子版 | | |
| general |      | 一般纳税人资格证电子版 | | |
| bankAccountName |      | 银行开户名 | | |
| settlementAccount |      | 对公结算银行账号 | | |
| bankBranchName |      | 开户银行支行名称 | | |
| branchProvince |      | 开户银行支行所在省 | | |
| branchCity |      | 开户行支行所在市 | | |
| branchArea |      | 开户行支行所在区 | | |
| categories1 |      | 主营类目1 |192.168.0.119:8081/interface/PcMerchantsStayController/getCategoryData  | |
| categories2 |      | 主营类目2 |192.168.0.119:8081/interface/PcMerchantsStayController/getCategorySubsetData  | categoryId:id|
| shopName |      | 选定店铺名称 | | |
| userId |      | 用户id | | |

- **返回参数**

| 返回参数      |     参数类型 |   参数说明   |
| :-------- | :--------| :------- |
| success |   boolean |  请求成功与否|
| code |   Integer |  执行结果code|
| message |   String |  执行结果消息|

- **返回示例**

``` json
{"code":"0001","content":"您已经评论过该景区","url":""}
```

------
