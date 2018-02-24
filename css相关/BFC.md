## 什么是 BFC？

块级格式化上下文(Block Formatting Context)：一个块级元素的渲染显示规则。通俗一点讲，可以把 BFC 理解成一个封闭的大箱子，容器里面的子元素不会影响到外面的元素，反之亦然。

## BFC 的盒子有以下特性：

1.内部的盒子会在垂直方向，一个个放置

2.BFC 是页面上的一个隔离的独立容器

3.属于<span style="font-weight:bold;color:red">同一个 BFC</span>的两个<span style="font-weight:bold;color:red">相邻 Box</span>的<span style="font-weight:bold;color:red">上下 margin</span>会发生重叠

4.计算 BFC 的高度时，浮动元素也参与计算

5.每个元素的左边，与包含的盒子的左边相接触，即使存在浮动也是如此

6.BFC 的区域不会与 float 重叠

## 如何触发 BFC 特性

* body 根元素
* 浮动元素：float 不为 none 的属性值
* 绝对定位元素：position(absolute、fixed)
* display 为：inline-block、table-cells、flex 的元素
* overflow 除了 visible 以外的值(hidden、auto、scroll)

参考资料

https://segmentfault.com/a/1190000012993668
