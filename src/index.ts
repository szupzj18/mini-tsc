import parser from "./tsc";
import ICore from "./core";

export default function main(params: string) {
  console.log(`hello ${params} tsc.`);
  parser(params);
}

main("world");
