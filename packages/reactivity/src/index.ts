export {
  ref,
  // 非递归监听，只能监听数据的第一层
  shallowRef,
  // 判断是否为ref
  isRef,
  // 监听数据为对象某个值，数据改成响应式，但是无法更新dom，无法触发watch，能改原来值
  toRef,
  // TODO
  // 解构proxy响应式对象，循环用toref包起来，有什么用？？？
  toRefs,
  // 解除监听
  unref,
  // 监听整个对象是响应式，watch监听不到，dom不更新，其他响应式更新dom会顺带把他带上去
  proxyRefs,
  // 自定义一个ref
  customRef,
  // 强制更新ref副作用，强制更新视图
  triggerRef,
  Ref,
  ToRefs,
  UnwrapRef,
  ShallowUnwrapRef,
  RefUnwrapBailTypes
} from './ref'
export {
  // 递归监听
  reactive,
  // 创建对象的只读副本，响应式对象也可以
  readonly,
  // 判断是否为readonly
  isReactive,
  // 判断是否为readonly
  isReadonly,
  // 判断是否为Reactive || Readonly
  isProxy,
  // 只能监听对象的第一层
  shallowReactive,
  // 只能冻结第一层
  shallowReadonly,
  // TODO
  // 如果将当前值包裹的对象转成reactive会跳过,这玩意跟toRefs有区别？？？？？
  markRaw,
  // 取消当前ref，reactive的状态，取消响应式
  toRaw,
  ReactiveFlags,
  DeepReadonly,
  UnwrapNestedRefs
} from './reactive'
export {
  computed,
  ComputedRef,
  WritableComputedRef,
  WritableComputedOptions,
  ComputedGetter,
  ComputedSetter
} from './computed'
export { deferredComputed } from './deferredComputed'
export {
  effect,
  stop,
  trigger,
  track,
  enableTracking,
  pauseTracking,
  resetTracking,
  ITERATE_KEY,
  ReactiveEffect,
  ReactiveEffectRunner,
  ReactiveEffectOptions,
  EffectScheduler,
  DebuggerOptions,
  DebuggerEvent
} from './effect'
export {
  effectScope,
  EffectScope,
  getCurrentScope,
  onScopeDispose
} from './effectScope'
export { TrackOpTypes, TriggerOpTypes } from './operations'
