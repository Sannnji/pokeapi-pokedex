const capitalize = (string) => {
  let capitalized;
  var words = string.split(" ");

  if (words.length <= 1) {
    capitalized = string[0].toUpperCase() + string.slice(1);
  } else if (words.length > 1) {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    capitalized = words.join(" ");
  }

  return capitalized;
};

// turn gen i => Gen I
const capitalizeGeneration = (string) => {
  var words = string.split(" ");

  return (
    words[0][0].toUpperCase() + words[0].slice(1) + " " + words[1].toUpperCase()
  );
};

module.exports = { capitalize, capitalizeGeneration };
