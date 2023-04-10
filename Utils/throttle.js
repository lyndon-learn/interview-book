const throttle = (callback, duration) => {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, duration);
  };
};
