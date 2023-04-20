import IField from "../core/IField";
import BooleanField from "./BooleanField.js";
import EnumField from "./EnumField.js";
import FieldGroup from "./FieldGroup.js";
import MultilineStringField from "./MultilineStringField.js";
import NumberField from "./NumberField.js";
import StringField from "./StringField.js";

export default class Factory {
  static boolean() {
    return new BooleanField();
  }

  static list(options: string[]) {
    return new EnumField(options);
  }

  static group(fields: { [x: string]: IField<any>; } & { [x: symbol]: string | Node; }) {
    return new FieldGroup(fields);
  }

  static number() {
    return new NumberField();
  }

  static string(multiline: boolean = false) {
    return multiline
      ? new MultilineStringField()
      : new StringField();
  }
}