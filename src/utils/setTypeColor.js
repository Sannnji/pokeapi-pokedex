var typeColor;

function setTypeColor(type) {
  switch (type) {
    case "grass":
      typeColor = "#63BB5B";
      break;
    case "normal":
      typeColor = "#9099A1";
      break;
    case "poison":
      typeColor = "#AB6AC8";
      break;
    case "fire":
      typeColor = "#FF9C54";
      break;
    case "steel":
      typeColor = "#5A8EA1";
      break;
    case "flying":
      typeColor = "#8FA8DD";
      break;
    case "dragon":
      typeColor = "#0A6DC4";
      break;
    case "ghost":
      typeColor = "#5269AC";
      break;
    case "bug":
      typeColor = "#90C12C";
      break;
    case "ground":
      typeColor = "#D97746";
      break;
    case "rock":
      typeColor = "#C7B78B";
      break;
    case "electric":
      typeColor = "#F3D23B";
      break;
    case "water":
      typeColor = "#4D90D5";
      break;
    case "dark":
      typeColor = "#5A5366";
      break;
    case "psychic":
      typeColor = "#F97176";
      break;
    case "ice":
      typeColor = "#86D4C8";
      break;
    case "fairy":
      typeColor = "#EC8FE6";
      break;
    case "fighting":
      typeColor = "#CE4069";
      break;
    default:
      break;
  }
  return typeColor;
}

module.exports = { setTypeColor, typeColor };
