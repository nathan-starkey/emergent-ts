import Emitter from "../core/Emitter.js";
import IField from "../core/IField.js";

export default class NumberField extends Emitter<{ change: [field: NumberField] }> implements IField<number> {
  input: HTMLInputElement;

  constructor() {
    super();

    this.input = document.createElement("input");
    this.input.type = "number";
    this.input.valueAsNumber = 0;
    this.input.addEventListener("change", () => this.emit("change", this));
  }

  set(value: number): void {
    this.input.valueAsNumber = value;
  }

  get(): number {
    return this.input.valueAsNumber || 0;
  }

  appendTo(element: HTMLElement): this {
    element.append(this.input);
    return this;
  }
}