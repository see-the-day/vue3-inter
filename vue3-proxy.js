let targetMap = new WeakMap();
let activeEffect;
function track(target, key) {
  // 首先找 obj 是否有被追踪
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    // 如果没有被追踪，那么添加一个
		targetMap.set(target, (depsMap = new Map()));
  }
  // 然后寻找 obj.x 是否被追踪
  let dep = depsMap.get(key);
	if (!dep) {
    // 如果没有被追踪，那么添加一个
    depsMap.set(key, (dep = new Set()));
  }
  // 如果没有添加 activeEffect 那么添加一个
  if (!dep.has(activeEffect)) {
		dep.add(activeEffect);
	}
}
function trigger(target, key) {
  // 寻找追踪项
  const depsMap = targetMap.get(target);
  // 没找到就什么都不干
  if (!depsMap) return;
  // 去重
  const effects = new Set()
  depsMap.get(key).forEach(e => effects.add(e))
  // 执行
  effects.forEach(e => e())
}
function effect(fn) {
  // 定义一个内部 _effect 
  const _effect = function(...args) {
    // 在执行是将自身赋值给 activeEffect
    activeEffect = _effect;
    // 执行回调
    return fn(...args);
  };
  _effect();
  // 返回闭包
  return _effect;
}
export function reactive(target) {
  // 代理数据
  return new Proxy(target, {
    get(target, prop) {
      // 执行追踪
      track(target, prop);
      return Reflect.get(target, prop);
    },
    set(target, prop, newVal) {
      Reflect.set(target, prop, newVal);
      // 触发effect
      trigger(target, prop);
      return true;
    }
  })
}