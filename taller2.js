const findMax = (l) => {
  let max = l[0]; // first element is the maximum for now

  for (let i = 1, n = l.length; i < n; i++) {
    if (l[i] > max) // replace the maximum if there is another max element
      max = l[i];
  }

  return max;
}

const a = [3, 17, -1, 4, -19]
//console.log(findMax(a))

const includes = (l, k) => {
  // if the element is found, then returns true inmedately
  for (let i = 0, n = l.length; i < n; i++)
    if (l[i] === k) return true;

  // the element was not found
  return false;
}

//console.log(includes(a, 2))
//console.log(includes(a, 4))

const sum = (l) => {
  let s = 0;
  for (let i = 0, n = l.length; i < n; i++)
    s += l[i];

  return s
}

//console.log(sum(a))

const missingNumbers = (l) => {
  // bubble sort algorithm
  for (let i = l.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (l[j] > l[j + 1]) {
        let temp = l[j];
        l[j] = l[j + 1];
        l[j + 1] = temp;
      }
    }
  }

  const missing = []
  const last = l[0]

  for (let i = 1, n = l.length; i < n; i++) {
    // check if there is any gap between the numbers
    while (last < l[i] - 1) {
      // push all the numbers between last element and current element
      last++;
      missing.push(last);
    }

    last = l[i]
  }

  return missing
}

b = [7, 2, 4, 6, 3, 9]
//console.log(missingNumbers(b))
