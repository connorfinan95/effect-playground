export const simulatedValidation = async <A>(
  promise: Promise<Response>
): Promise<A> => {
  // In a real world scenario we may not want to trust our APIs to actually return the expected data
  return promise.then(res => res.json() as Promise<A>);
};
