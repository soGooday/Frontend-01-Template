# 每周总结可以写在这里


#### 学习的方法
* 体系完整法
* 追本溯源法

### 面向对象
关于OO研究成果有很多但是离我们关系不大，程序员不需要针线活， 我们就从OOP进行面向对象追溯，
面向对象的程序设计的雏形，早在1960年Simula语言中即可发现，当时的程序设计领域正面临着一种危机：
在软硬件环境逐渐复杂的情况下，软件如何的带的良好的维护？而面向对象程序设计在某种程度上通过强调可重复性（可复用）解决了这一问题
（OAOO一个规则，实现一次（One rule, one place）是面向对象编程中的基本原则）
到了20世纪70年代的Smalltalk语言在面向对象方面堪称经典----以至于30年后的今天依然将这个语言视为面向对象语言的基础，作者Alan Kay也被称为 OO语言之父。
smalltalk发明大佬们，在谈到OOP时都是这样说的
> I thought of objects being like biological cells and/or individual computers on a network, only able to communicate with messages (so messaging came at the very beginning -- it took a while to see how to do messaging in a programming language efficiently enough to be useful)....OOP to me means only messaging, local retention and protection and hiding of state-process, and extreme late-binding of all things. It can be done in Smalltalk and in LISP.

下面是大佬翻译的

> OOP应该体现一种网状结构，这个结构上的每个节点“Object”只能通过“消息”和其他节点通讯。每个节点会有内部隐藏的状态，状态不可以被直接修改，而应该通过消息传递的方式来间接的修改。

群里面解释（雅仔-北京） 这句话说出了很形象的比喻

> 像大神说的那样，对象就像生物细胞那样，与外界只通过信息进行交换，所有内部状态的进程和变更都在内部进行，并且处于保护状态，不受外部影响。这样的“细胞”可以组合成很复杂的系统 

面向对象编程是以类为思考对象。在进行面向对象编程的时候，我们并不是一上来就去思考，如何将复杂的流程拆解为一个一个方法，而是采用曲线救国的策略，先去思考如何给业务建模，如何将需求翻译为类，如何给类之间建立交互关系，而完成这些工作完全不需要考虑错综复杂的处理流程。当我们有了类的设计之后，然后再像搭积木一样，按照处理流程，将类组装起来形成整个程序。这种开发模式、思考问题的方式，能让我们在应对复杂程序开发的时候，思路更加清晰。

#### 四大法则
* 抽象 
* 封装
* 继承
* 多态
 ##### 抽象
 > 封装主要讲如何隐藏信息、保护数据，那抽象就是讲如何隐藏方法的具体实现，让使用者只需要关心方法提供了哪些功能，不需要知道这些功能是如何实现的
 
 ##### 封装
 > 封装也叫作信息隐藏或者数据访问保护。类通过暴露有限的访问接口，授权外部仅能通过类提供的方式来访问内部信息或者数据。
 
 ##### 继承
> 处理的是重复问题

 ##### 多态
 > 处理的是可以从写继承的方法。
 
  ### 分析URL串
 
 ![Pandao editor.md](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9zczAuYmFpZHUuY29tLzZPTldzamlwMFFJWjh0eWhucS9pdC91PTI4ODE5MDE0MDksMjcyMjU3NzM5NyZmbT0xNzMmcz04ODIxQ0YxMDlDRTg0NDAxMTRGMTgxREUwMzAwRDBCMSZ3PTY0MCZoPTIwMCZpbWcuSlBH?x-oss-process=image/format.png "Pandao editor.md") ()

 
```javascript
  function queryURLParams(url) {
      let result = {},
        reg1 = /([^?=&#]+)=([^?=&#]+)/g,
        reg2 = /#([^?=&#]+)/g;
      url.replace(reg1, (n, x, y) => result[x] = y)
      url.replace(reg2, (n, x) => result['HASH'] = x)
      return result
    }
 
    let url = 'http://www.baidu.com/index?name=baidu&age=35#333'
    let paramsObj = queryURLParams(url)
```


#### 思考方式
目标>现状>方案>实施>结果
目标：分析业务目标定数据指标
现状：采集数据建立数据展示系统
方案：设计技术方方案预估数据
实施：小规模实验 推广前公司 形成制度
结果：统计最终效果汇报

