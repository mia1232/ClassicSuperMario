export function throttle(fn, delay) {
    let wait = false;
    return function() {
      if(!wait) {
        wait = true;
        setTimeout(() => {
          fn(...arguments);
          wait = false;
        }, delay);
      }
    }
  }