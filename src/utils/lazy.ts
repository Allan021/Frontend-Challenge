let setTimeoutHandle: { [key: string]: any } = {};
export function lazy<T>(action: Function, msec: number) {
  const key = action.toString();
  clearTimeout(setTimeoutHandle[key]);
  return new Promise<T>((resolve, reject) => {
    setTimeoutHandle[key] = setTimeout(async () => {
      resolve(await Promise.resolve(action()));
    }, msec);
  });
}
