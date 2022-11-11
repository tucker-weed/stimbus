export type Listener = (detail?: unknown) => unknown;
export type Constructor<T = {}> = new (...args: any[]) => T;
