// n steps
// can climb 2 or 1 steps at a time
//  8    5    3    2    1    1
//                          (5)
//                     (4)<
//                (3)<
//           (2)<      (5)
//      (1)<      (4)<
// (0)<      (3)<
//      (2)<      (5)
//           (4)<

function climbStairs(n: number): number {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = one;
    one += two;
    two = temp;
  }

  return one;
}
