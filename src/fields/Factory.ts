import IField from "../core/IField";
import BooleanField from "./BooleanField.js";
import EnumField from "./EnumField.js";
import FieldGroup from "./FieldGroup.js";
import MultilineStringField from "./MultilineStringField.js";
import NumberField from "./NumberField.js";
import StringField from "./StringField.js";

export function boolean() {
  return new BooleanField();
}

export function list(options: string[]) {
  return new EnumField(options);
}

export function group(fields: { [x: string]: IField<any>; } & { [x: symbol]: string | Node; }) {
  return new FieldGroup(fields);
}

export function number() {
  return new NumberField();
}

export function string(multiline: boolean = false) {
  return multiline ? new MultilineStringField() : new StringField();
}