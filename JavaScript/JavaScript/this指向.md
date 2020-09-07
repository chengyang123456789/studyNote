1. fn()
    this => window/global
2. obj.fn()
    this => obj
3. fn.call(xxx)
    this => xxx
4. fn.apply(xxx)
    this => xxx
5. fn.bind(xxx)
    this => xxx
6. new Fn()
    this => 新的对象
7. fn = () => {}
    this => 外面的 this