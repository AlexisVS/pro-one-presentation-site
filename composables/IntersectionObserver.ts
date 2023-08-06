/**
 * @function onIntersect
 * @param  {HTMLElement} elementToWatch elementToWatch
 * @param  {(target: HTMLElement) => void} callback callback once element is intersecting
 * @param  {(target: HTMLElement) => void} outCallback (optional) callback when element is not intersecting
 * @param  {boolean} once if callback only run one time
 * @param  {IntersectionObserverInit} options Intersection Observer API options
 * @return {IntersectionObserver} observer
 */
export const onIntersect = (
  elementToWatch: Element,
  callback: (target: Element) => void = () => {},
  outCallback: (target: Element) => void = () => {},
  once = true,
  options: IntersectionObserverInit = { threshold: 1.0 },
): IntersectionObserver => {
  // Initiate the observer
  const observer = new IntersectionObserver(([entry]) => {
    // If the element to watch is intersecting within the threshold
    if (entry && entry.isIntersecting) {
      // Run the callback
      callback(entry.target);

      // If the callback should only run once, unobserve the element
      if (once) {
        observer.unobserve(entry.target);
      }
    } else {
      // If the element is not intersecting, run the (optional) unintersecting callback
      outCallback(entry.target);
    }
  }, options);

  // Observe the element
  observer.observe(elementToWatch);

  // Returns the observer, so it can be further used in the component
  return observer;
};
