function delimeter(string, n) {
  if (string.length > n) {
    string = string.substring(0, n) + "...";
  }
  return string;
}

export default delimeter;
