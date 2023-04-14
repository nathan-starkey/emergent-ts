import Emitter from "../core/Emitter.js";
import IField from "../core/IField.js";

export default class BooleanField extends Emitter<{ change: [field: BooleanField] }> implements IField<boolean> {
  select: HTMLSelectElement;

  constructor() {
    super();

    this.select = document.createElement("select");
    this.select.add(new Option("false"));
    this.select.add(new Option("true"));
    this.select.selectedIndex = 0;
    this.select.addEventListener("change", () => this.emit("change", this));
  }

  set(value: boolean): void {
    this.select.value = value ? "true" : "false";
  }

  get(): boolean {
    return this.select.value == "true";
  }

  appendTo(element: HTMLElement): this {
    element.append(this.select);
    return this;
  }
}