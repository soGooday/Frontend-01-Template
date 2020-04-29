# 每周总结可以写在这里

### 优先级 下面的优先级依次降低

#### member(成员访问) 也可以是取数性运算
    a.b,
    a[b],
    foo'string'
    super.a
    super['a']  继承
    new target
    new Foo()    带括号的优先级更高
    ```javascript
        function a(){
            console.log('1:',arguments)
        }
        function b(){
            return a
        }
        new new b()()
        //先执行的是new b(),var  x= new b() 然后才是返回的 nwe x()
    ```
#### new 
    + new Foo

    example
    new a()()
    new new a()

#### call
    new foo['a']
    super()
    foo()['b']
    foo().b


#### 单目运算发

    dekete a.b
    void 1; void +any 或是被定义后的变量与方法 会使得返回一个undifind  
    直接运算函数 (function(parameter){})(parameter) ===  void function(parameter){}(parameter)
    typeof
    <!-- +a -->
    -a
    ~a
    !a  !! 可以做类型转换
    waiat a

    a ++  右结合 中间不能有换行
        ```javascript
        var a = 1
        (a
        ++)
        打印出来的a = 1;
        ``` 
    

    &&    fun() && fun2()  先判断左边 fun()不符合的话，就不再执行后面的fun2()
    ||  要自己测试

    作业 stringToNumber  numberToString

# 找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？

##### Bound Function Exotic Objects
有这些特性[[Call]] [[Construct]]
##### Array Exotic Objects
有这些特性[[DefineOwnProperty]] ArrayCreate(length[,proto]) ArraySpeciesCreate(originalArray,length) ##### ArraySetLength(A,Desc)
##### String Exotic Objects
有这些特性[[GetOwnProperty]] [[DefineOwnProperty]] [[OwnPropertyKeys]] StringCreate(value,prototype) StringGetOwnProperty(S,P)
##### Arguments Exotic Objects
有这些特性[[GetOwnProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[Delete]] CreateUnmappedArgumentsObject(argumentsList) CreateMappedArgumentsObject(func,formals,argumentsList,env)
##### Integer-Indexed Exotic Objects
有这些特性[[GetOwnProperty]] [[HasProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[OwnPropertyKeys]] IntegerIndexedObjectCreate(prototype,internalSlotsList) IntegerIndexedElementGet(O,index) IntegerIndexedElementSet(O,index,value)
##### Module Namespace Exotic Objects
有这些特性[[SetPrototypeOf]] [[IsExtensible]] [[PreventExtensions]] [[GetOwnProperty]] [[DefineOwnProperty]] [[HasProperty]] [[Get]] [[Set]] [[Delete]] [[OwnPropertyKeys]] ModuleNamespaceCreate(module,exports)
##### Immutable Prototype Exotic Objects
有这些特性[[SetPrototypeOf]] SetImmutablePrototype