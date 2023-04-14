import IEmitter from "./IEmitter.js";

export default class Emitter<T extends Record<string, any[]>> implements IEmitter<T> {
  listeners: { [U in keyof T]?: ((...args: T[U]) => any)[] } = {};

  on<U extends keyof T>(event: U, listener: (...args: T[U]) => any): void {
    let listeners = this.listeners[event];

    if (!listeners) {
      listeners = [];
      this.listeners[event] = listeners;
    }

    listeners.push(listener);
  }

  off<U extends keyof T>(event: U, listener: (...args: T[U]) => any): void {
    let listeners = this.listeners[event];

    if (listeners) {
      let index = listeners.indexOf(listener)

      if (index != -1) {
        listeners.splice(index, 1);
      }
    }
  }

  emit<U extends keyof T>(event: U, ...args: T[U]): void {
    let listeners = this.listeners[event];

    if (listeners) {
      for (let listener of listeners) {
        listener(...args);
      }
    }
  }
}