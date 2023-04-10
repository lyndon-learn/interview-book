function arrange(taskId) {
  const tasks = [];
  tasks.push(() => {
    console.log(`${taskId} is notified`);
  });

  async function execute() {
    for (const task of tasks) {
      await task();
    }
  }

  function doSomething(something) {
    tasks.push(() => {
      console.log(`Start to ${something}`);
    });
    return this;
  }

  function wait(duration) {
    tasks.push(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, duration);
        })
    );
    return this;
  }

  function waitFirst(duration) {
    tasks.unshift(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, duration);
        })
    );
    return this;
  }

  return {
    execute,
    do: doSomething,
    wait,
    waitFirst,
  };
}
