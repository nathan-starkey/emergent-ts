export default interface IEmitter<T extends Record<string, any[]>> {
  on<U extends keyof T>(event: U, listener: (...args: T[U]) => any): void;

  off<U extends keyof T>(event: U, listener: (...args: T[U]) => any): void;

  emit<U extends keyof T>(event: U, ...args: T[U]): void;
}