function finalGrade (exam, projects) {
  let count=0;
  if (exam > 90 || projects > 10) {
    return count=100;
  }
  else if (exam > 75 && projects >= 5) {
    return count=90;
  }
  else if (exam > 50 && projects >= 2) {
    return count=75;
  }
  return count=0;// final grade
}
