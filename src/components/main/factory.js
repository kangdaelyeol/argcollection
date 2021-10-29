// 정렬은 ascend 기준으로 한다.

export const bubbleSort = (arr) => {
  let cmpCount = 0;
  let swpCount = 0;
  const log = [];
  const rec = [...arr];
  log.push(rec);
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      cmpCount++;
      if (arr[j] > arr[j + 1]) {
        swpCount++;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        const record = [...arr];
        log.push(record);
      }
    }
  }
  console.log(arr, cmpCount, swpCount);
  console.log(log);
  return {cmpCount, swpCount, arr, log};
};
