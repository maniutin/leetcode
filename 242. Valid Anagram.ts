function isAnagram(s: string, t: string): boolean {
  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();
  
  if (sortedS.toString() === sortedT.toString()) {
      return true;
  } else {
      return false;
  };
};