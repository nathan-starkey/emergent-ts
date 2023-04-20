import { Fields } from "../build/index.js";

const {
  string, number, list, boolean, group
} = Fields.Factory;

let btn = document.createElement("button");
btn.innerText = "Read value";
btn.onclick = () => alert(JSON.stringify(form.get(), null, 4));

let form = group({
  id: string(),
  type: list(["primary", "secondary", "tertiary"]),
  legacy: boolean(),
  min: number(),
  max: number(),
  [Symbol()]: btn
}).appendTo(document.body);