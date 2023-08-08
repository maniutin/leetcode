function isPalindrome(s: string): boolean {
  const replaced: string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  const revStr: string = s
    .split("")
    .reverse()
    .join("")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();

  if (replaced === revStr) {
    return true;
  } else {
    return false;
  }
}
