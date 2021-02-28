export class EnvironmentMock {
  private initialEnvironment;
  private mocks: Map<string, { onlyOnce: boolean; value: any }>;

  constructor() {
    this.initialEnvironment = process.env;
    this.mocks = new Map();
    process.env = new Proxy(process.env, this);
  }

  public get(_: NodeJS.ProcessEnv, variable: string) {
    const mock = this.mocks.get(variable);

    if (mock) {
      const { onlyOnce, value } = mock;
      if (onlyOnce) {
        this.mocks.delete(variable);
      }
      return value;
    }

    return this.initialEnvironment[variable];
  }

  public restore() {
    process.env = this.initialEnvironment;
  }

  public mockVariable(name: string, value: any) {
    this.mocks.set(name, { value, onlyOnce: false });
  }

  public mockVariableOnce(name: string, value: any) {
    this.mocks.set(name, { value, onlyOnce: true });
  }
}
