const parent = () => {
  let x = 10;
  const child = () => {
    x = x + 10;
    console.log(x);
  };
  return child;
};

const caller1 = parent();

caller1();
caller1();
caller1();

const caller2 = parent();
caller2();
