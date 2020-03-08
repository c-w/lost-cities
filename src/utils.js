export function sum(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

export function partition(items, predicate) {
  const matching = [];
  const nonMatching = [];

  for (const item of items) {
    if (predicate(item)) {
      matching.push(item);
    } else {
      nonMatching.push(item);
    }
  }

  return [matching, nonMatching];
}

export function zip(xs, ys) {
  const result = [];

  for (let i = 0; i < xs.length; i++) {
    result.push([xs[i], ys[i]]);
  }

  return result;
}

export function fromPairs(pairs) {
  const obj = {};

  for (const [key, value] of pairs) {
    obj[key] = value;
  }

  return obj;
}
