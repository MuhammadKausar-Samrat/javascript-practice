const getDayType = (day) => {
  switch (day.toUpperCase()) {
    case "FRIDAY":
    case "SATURDAY":
      return "Weekend";

      case "SUNDAY":
      case "MONDAY":
      case "TUESDAY":
      case "WEDNESDAY":
      case "THURSDAY":
        return "Working Day";
        default:
        return "Invalid Day";
  }
};

console.log(getDayType("friday"));
//Weekend
console.log(getDayType("Friday"));
// Weekend
console.log(getDayType("FRANCE"));
//Invalid Day
console.log(getDayType("thursdaY"));
// Weekend
console.log(getDayType("Wednesday"));
// Weekend