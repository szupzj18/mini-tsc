export default interface ICore {
  init(): void;
  run(): void;
  stop(): void;
  getStatus(): string;
}

export default interface ECore {
  init(): void;
  run(): void;
  stop(): void;
  getStatus(): string;
}

export default class Core implements ICore {}
