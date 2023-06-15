export function feladat01(colors) {
  let length = colors.length;

  if (length === 0 || length === 1) {
    return 0;
  }

  let count = 0;

  for (let i = 2; i <= length; i++) {
    let x = 1;
    let y = 1;

    for (let j = 1; j <= i; j++) {
      x *= (length - j + 1);
      y *= j;
    }
    count += (x/y);
  }

  return count;
}