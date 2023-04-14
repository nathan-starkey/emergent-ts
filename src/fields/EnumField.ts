import Emitter from "../core/Emitter.js";
import IField from "../core/IField.js";

export default class EnumField extends Emitter<{ change: [field: IField<string>] }> implements IField<string> {
  select: HTMLSelectElement;

  constructor(options: string[]) {
    super();

    this.select = document.createElement("select");

    for (let option of options) {
      this.select.add(new Option(option));
    }

    this.select.selectedIndex = 0;
    this.select.addEventListener("change", () => this.emit("change", this));
  }

  set(value: string): void {
    this.select.value = value;
  }

  get(): string {
    return this.select.value;
  }

  appendTo(element: HTMLElement): this {
    element.append(this.select);
    return this;
  }
}