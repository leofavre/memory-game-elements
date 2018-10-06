export default delay => arg =>
  (Number.isFinite(delay) && delay > 0)
    ? new Promise(resolve => setTimeout(() => resolve(arg), delay))
    : Promise.resolve(arg);
