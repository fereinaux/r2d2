export function getColorByTrilogy(trilogy) {

  switch (trilogy) {
    case "prequel":
      return "indigo";
    case "classic":
      return "cyan";
    default:
      return "emerald";
  }

}