export async function register() {
  if (typeof globalThis.localStorage !== "undefined") {
    try {
      const noop = () => null;
      const noopVoid = () => undefined;
      const store: Record<string, string> = {};

      Object.defineProperty(globalThis, "localStorage", {
        value: {
          getItem: (key: string) => store[key] ?? null,
          setItem: (key: string, value: string) => { store[key] = value; },
          removeItem: (key: string) => { delete store[key]; },
          clear: noop,
          key: noopVoid,
          get length() { return Object.keys(store).length; },
        },
        writable: true,
        configurable: true,
      });
    } catch {
      // If override fails, silently continue
    }
  }
}
