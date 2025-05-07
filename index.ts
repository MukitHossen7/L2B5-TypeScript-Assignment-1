function formatString(input: string, toUpper?: boolean): string {
  if (input && toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toLocaleUpperCase();
  }
}
// console.log(formatString("Hello")); // Output: "HELLO"
// console.log(formatString("Hello", true)); // Output: "HELLO"
// console.log(formatString("Hello", false)); // Output: "hello"

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filterRating = items.filter((item) => item.rating >= 4);
  return filterRating;
}
