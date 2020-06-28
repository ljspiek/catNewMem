function openOrSenior(data) {
  let results = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
        results.push("Senior");
        break;
      } else {
        results.push("Open");
        break;
      }
      //   results.push(data[i][j]);
    }
  }
  return results;
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
