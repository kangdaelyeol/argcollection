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
  return { cmpCount, swpCount, arr, log };
};

export const selectionSort = (arr) => {
  const log = [];
  let cmpCount = 0;
  let swpCount = 0;
  const rec = [...arr];
  log.push(rec);
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      cmpCount++;
      if (arr[j] < arr[i]) minIndex = j;
    }
    if (minIndex !== i) {
      swpCount++;
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
      const record = [...arr];
      log.push(record);
    }
  }
  return { cmpCount, swpCount, arr, log };
};

export const insertionSort = (arr) => {
  let cmpCount = 0;
  let swpCount = 0;
  const log = [];
  const rec = [...arr];
  log.push(rec);
  // insertEntity
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      cmpCount++;
      if (arr[j] < arr[j - 1]) {
        swpCount++;
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        const record = [...arr];
        log.push(record);
      } else {
        break;
      }
    }
  }
  return { cmpCount, swpCount, arr, log };
};

export const shellSort = (arr) => {
  let cmpCount = 0;
  let swpCount = 0;
  let log = [];
  const rec = [...arr];
  log.push(rec);

  let interval = Math.floor(arr.length / 2);

  // 부분집합 개수만큼 반복
  while (interval > 0) {
    for (let i = 0; i < interval; i++) {
      // 부분집합의 index j의 loop -> odd partition인 경우를 위해
      // index j는 배열의 최대 참조 index까지 참조 가능
      for (let j = i + interval; j < arr.length; j += interval) {
        // j는 삽입이 된 index(start + interval)이고 index k를 이용하여 삽입정렬 수행
        for (let k = j; k <= 0; k = -interval) {
          cmpCount++;
          if (arr[k - interval] > arr[k]) {
            swpCount++;
            const temp = arr[k - interval];
            arr[k - interval] = arr[k];
            arr[k] = temp;
            const record = [...arr];
            log.push(record);
          } else {
            break;
          }
        }
      }
    }
    interval = Math.floor(interval / 2);
  }
  return { cmpCount, swpCount, arr, log };
};

export const mergeSort = (arr) => {
  let cmpCount = 0;
  let swpCount = 0;
  const log = [];
  const temp = [];
  const rec = [...arr];
  log.push(rec);
  
  const mergeConquer = (start, middle, end) => {
    // 이전에 정복이 완료된 arr[start - middle] arr[middle + 1 - end] 부분해에 대한 합병
    let k = start;
    let i = start;
    let j = middle + 1;

    while (i <= middle && j <= end) {
      cmpCount++;
      if (arr[i] < arr[j]) {
        temp[k] = arr[i];
        i++;
        k++;
      } else {
        temp[k] = arr[j];
        j++;
        k++;
      }
    }

    if (i <= middle) {
      while (i <= middle) {
        temp[k] = arr[i];
        i++;
        k++;
      }
    } else {
      while (j <= end) {
        temp[k] = arr[j];
        j++;
        k++;
      }
    }

    for (let n = start; n <= end; n++) {
      arr[n] = temp[n];
    }
    swpCount++;
    const record = [...arr];
    log.push(record);
  };

  const merge = (start, end) => {
    if (start < end) {
      const middle = Math.floor((start + end) / 2);

      merge(start, middle);
      merge(middle + 1, end);

      mergeConquer(start, middle, end);
    }
  };


  merge(0, arr.length - 1);
  return { cmpCount, swpCount, arr, log };
};

