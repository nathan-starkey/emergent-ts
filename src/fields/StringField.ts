import Emitter from "../core/Emitter.js";
import IField from "../core/IField.js";

export default class StringField extends Emitter<{ change: [field: StringField] }> implements IField<string> {
  input: HTMLInputElement;

  constructor() {
    super();

    this.input = document.createElement("input");
    this.input.addEventListener("change", () => this.emit("change", this));
  }

  set(value: string): void {
    this.input.value = value;
  }

  get(): string {
    return this.input.value;
  }

  appendTo(element: HTMLElement): this {
    element.append(this.input);
    return this;
  }
}