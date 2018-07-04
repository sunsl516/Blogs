### 容器属性

1.  flex-direction: row | row-reverse | column | column-reverse;

2.  flex-wrap: nowrap | wrap | wrap-reverse;

3.  flex-flow: `<flex-direction>` || `<flex-wrap>`;

    - flex-direction 和 flex-wrap 简写，默认 row nowrap

4.  justify-content: flex-start | flex-end | center | space-between | space-around;

5.  align-items: flex-start | flex-end | center | baseline | stretch;

6.  align-content: flex-start | flex-end | center | space-between | space-around | stretch;

### 项目属性

1.  order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0

2.  flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

3.  flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小

4.  flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。

5.  flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto

```
flex: none => flex: 0 0 auto;//表示宽度为原始宽度，不发生扩展或收缩
flex: auto => flex: 1 1 auto;//表示除了占据原先的宽度外，还要分配剩余宽度(包括扩展或收缩)
flex: 0 => flex: 0 1 0%;//表示收缩为最小宽度
flex: 1 => flex: 1 1 0%;//表示分配所有宽度(包括扩展或收缩)
flex: 0 auto => flex: 0 1 auto;(默认值)//表除了占据原先的宽度外，还要分配剩余宽度(只收缩，不扩展)
flex: 0 1 => flex: 0 1 0%;
```

当 flex 为关键字 none 或存在 auto 时，flex-basis 为 auto；若 flex 只有数字值，则 flex-basis 为 0%；

6.  align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。
