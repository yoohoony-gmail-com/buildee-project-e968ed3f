/**
 * A simple function to simulate an API call with a delay.
 * In a real application, this would be a fetch wrapper.
 * @param data The data to be returned by the mock API call.
 * @param delay The simulated network latency in milliseconds.
 * @returns A promise that resolves with the provided data after the delay.
 */
export async function mockApiCall<T>(data: T, delay: number = 500): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}