// Not correct
declare const useIsomorphicLayoutEffect: (fn: () => never, deps: any[]) => (() => never | undefined);

export default useIsomorphicLayoutEffect;
