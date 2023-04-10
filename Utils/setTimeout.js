const mySetTimeout = (callback, duration) => {
  const timer = setInterval(() => {
    callback();
    clearInterval(timer);
  }, duration);
};
