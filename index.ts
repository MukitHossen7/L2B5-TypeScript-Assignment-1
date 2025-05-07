function formatString(input: string, toUpper?: boolean): string {
  if (input && toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toLocaleUpperCase();
  }
}
