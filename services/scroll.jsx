export function getScroll(event, id) {
  event.preventDefault();

  const targetElement = document.getElementById(id);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800;

  let startTime = null;

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const run = easeInOutQuad(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
}
