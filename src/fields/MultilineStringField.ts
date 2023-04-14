import Emitter from "../core/Emitter.js";
import IField from "../core/IField.js";

export default class MultilineStringField extends Emitter<{ change: [field: MultilineStringField] }> implements IField<string> {
  textarea: HTMLTextAreaElement;

  constructor() {
    super();

    this.textarea = document.createElement("textarea");
    this.textarea.addEventListener("change", () => this.emit("change", this));
  }

  set(value: string): void {
    this.textarea.value = value;
  }

  get(): string {
    return this.textarea.value;
  }

  appendTo(element: HTMLElement): this {
    element.append(this.textarea);
    return this;
  }
}