export function longRunningOperation<T>(value: T, duration = 2000): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => res(value), duration);
  });
}
