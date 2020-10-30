
### 项目配置



### redux使用
    1.首先安装组件 yarn add redux react-redux redux-thunk
    2.建立store文件夹 建立index.js reducer.js actionCreator.js 文件
        在reducer.js文件中写defultState和reducer，暴露reduce人
        在index.js中引入createStore和applyMiddleware从redux中，引入reducer ，然后引入thunk从redux-thunk中作为参数传入到applyMiddlware,然后传入createStore中  生成store并暴露
    3.在总的父组件index中从react-redux 中引入Provider，包裹App，然后传入store={store}
    4.在组件内用的时候，从react-redux中引入connect，接收两个参数mapStateToProps=(state)=>{}  mapDispatchToProps=(dispatch)=>{}
    5.模块化redux：在组件内的文件夹中建立术语自己的reducer，actionCreater，然后将reducer暴露出来，在store文件中的reducer中引入reducer然后引入combineReducers从redux中，然后合并各个组件的reducer然后暴露出总的reducer

### prop-types
    1. 安装 prop-types 
    2. 在需要判断的组件中(检测的是父组件传下来的props中的数据)，引入{string,array} from 'prop-types' 在下面组件名.propTypes={数据1：string}

### 1px边框解决方案
    方法：利用 ::after 添加伪元素的方法，然后父元素相对定位 添加的伪元素绝对定位，根据api设置伪元素的width和height为100%( 200% 300%) 利用transform-scale()缩放为1(0.5 0.3333)实现边框线的变细
    封装：./assets/styledComponents/border.js
        封装 写一个border函数，接收一个参数(组价)，const newComp=styled(Comp)``  return newComp   暴露出border函数
        引用时  引入border  const Item=border(styled.div``)



