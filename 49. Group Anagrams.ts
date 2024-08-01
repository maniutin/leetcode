function groupAnagrams(strs: string[]): string[][] {
  // own solution
  const tempArr = [];

  const hashMap = {};

  for (const str in strs) {
    const localTemp = [];
    for (const stragn in strs) {
      if (
        strs[str].split("").sort().toString() ===
        strs[stragn].split("").sort().toString()
      ) {
        if (localTemp.indexOf(strs[stragn]) === -1) {
          localTemp.push(strs[stragn]);
        }
        tempArr.push(localTemp);
      }
    }
  }

  tempArr.forEach(function (arr) {
    hashMap[arr.join("|")] = arr;
  });

  const result = Object.keys(hashMap).map(function (k) {
    return hashMap[k];
  });

  return result;

  // better solution
  /*  let map = {}

     for (let str of strs) {
         let s = str.split('').sort().join('');
         if(!map[s]) map[s] = [];
         map[s].push(str);
     }

     return Object.values(map); */

  // using frequency array

  /* const res = {};

    for (let str of strs) {
        let charFreq = Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            charFreq[str.charCodeAt(i) - 97]++;
        };

        let keyStr = charFreq.toString();

        if (!res[keyStr]) {
            res[keyStr] = [];
        };

        res[keyStr].push(str);

    }

    return Array.from(Object.values(res)); */
}
