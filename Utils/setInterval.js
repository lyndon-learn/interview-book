const mySetInterval = (callback, duration) => {
  let timer;
  const interval = () => {
    callback();
    timer = setTimeout(interval, duration);
  };
  setTimeout(interval, duration);
  return () => clearTimeout(timer);
};

mySetInterval(() => {
  console.log("111");
}, 1000);
