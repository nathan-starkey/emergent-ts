import IEmitter from "./IEmitter.js";

export default interface IField<T> extends IEmitter<{ change: [field: IField<T>] }> {
  set(value: T): void;

  get(): T;

  appendTo(element: HTMLElement): this;
}