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

module.exports = { capitalize };
