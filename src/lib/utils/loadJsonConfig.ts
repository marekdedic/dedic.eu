export async function loadJsonConfig<T>(
  file: string,
  kitFetch: typeof fetch,
): Promise<T> {
  const res = await kitFetch(file);
  return (await res.json()) as T;
}
