const v = ['a', 'e', 'i', 'o', 'u']

const desglosarString = (s, type) => {
  if (type !== "vocales" && type !== "consonantes")
    throw new Error('Type should be "vocales" or "consonantes"')

  return [...s].reduce((acc, curr) => acc + (v.includes(curr) ^ type === "consonantes"), 0);
}

const twoSum = (l, target) => {
  const map = new Map();
  for (let i = 0, n = l.length; i < n; i++) {
    const complement = target - l[i];
    if (map.has(complement))
      return [map.get(complement), i];

    map.set(l[i], i);
  }
  return [];
}

const conversionRomana = (s) => {
  let res = 0;
  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  for (let i = 0; i < s.length - 1; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      res -= roman[s[i]];
    } else {
      res += roman[s[i]];
    }
  }

  return res + roman[s[s.length - 1]];
}
