import Emitter from "../core/Emitter.js";
import IField from "../core/IField.js";

export default class FieldGroup<T extends Record<string, any>> extends Emitter<{ change: [field: IField<T>] }> implements IField<T> {
  table: HTMLTableElement;
  fields: { [U in keyof T]: IField<T[U]> };

  constructor(fields: { [U in keyof T]: IField<T[U]> } & { [s: symbol]: string | Node }) {
    super();

    let tbody = document.createElement("tbody");

    this.table = document.createElement("table");
    this.table.append(tbody);
    this.fields = fields;

    for (let key of Reflect.ownKeys(fields)) {
      let tr = document.createElement("tr");
      let td0 = document.createElement("td");
      let td1 = document.createElement("td");

      if (typeof key == "string") {
        td0.innerText = key;
        fields[key].appendTo(td1);
      } else {
        td1.append(fields[key]);
      }
      
      tr.append(td0, td1);
      tbody.append(tr);
    }
  }

  set(value: T): void {
    for (let key in this.fields) {
      this.fields[key].set(value[key]);
    }
  }

  get(): T {
    let value: Partial<T> = {};

    for (let key in this.fields) {
      value[key] = this.fields[key].get();
    }

    return value as T;
  }

  appendTo(element: HTMLElement): this {
    element.append(this.table);
    return this;
  }
}