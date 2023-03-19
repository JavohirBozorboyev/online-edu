export function reducer(open: any = false, action: any) {
  console.log(open);

  switch (action.type) {
    case "OPEN":
      return (open = true);
    case "CLOSE":
      return (open = false);
    default:
      throw new Error();
  }
}
