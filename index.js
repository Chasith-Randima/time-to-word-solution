function convertTimeToWords(timeStr) {
  const [hourStr, minuteStr] = timeStr.split(":");
  let hour = parseInt(hourStr);
  const minutes = parseInt(minuteStr);

  if (hour === 0 && minutes === 0) {
    return "midnight";
  } else if (hour === 12 && minutes === 0) {
    return "midday";
  }

  const minuteWords = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", 
    "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", 
    "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "half"];

  if (minutes === 0) {
    return `${hourInWords(hour)} o'clock`;
  } else if (minutes <= 30) {
    if (minutes === 15) {
      return `quarter past ${hourInWords(hour)}`;
    } else if (minutes === 30) {
      return `half past ${hourInWords(hour)}`;
    } else {
      return `${minuteWords[minutes]} past ${hourInWords(hour)}`;
    }
  } else {
    return `${minuteWords[60 - minutes]} to ${hourInWords((hour + 1) % 24)}`;
  }
}

function hourInWords(hour) {
  const hoursInWords = {
    0: "midnight",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "midday",
    13: "one",
    14: "two",
    15: "three",
    16: "four",
    17: "five",
    18: "six",
    19: "seven",
    20: "eight",
    21: "nine",
    22: "ten",
    23: "eleven"
  };

  return hoursInWords[hour];
}


// console loggin for testing
const times = ["0:00","12:00","2:00","2:03","2:11","2:15","2:30","2:33","2:40","2:45","2:55"];

times.forEach(time => {
  console.log(convertTimeToWords(time));
});

module.exports = { convertTimeToWords };