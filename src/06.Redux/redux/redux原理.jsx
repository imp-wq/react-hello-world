
function myCreateStore(reducer) {
  let state=reducer(undefined,{})
  // 依赖列表
  const effectList=[]
  function subscribe(callback) {
    // 收集依赖
    effectList.push(callback)
  }

  function dispatch(action) {
    // 调用reducer，传入旧状态和action，返回值作为新的状态
    state=reducer(state,action)
    // 执行所有依赖
    for(const fn in effectList) {
      console.log(fn)
      effectList[fn] && effectList[fn]()
    }
  }
  function getState() {
    return state
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}

export {myCreateStore}