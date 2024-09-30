## convertTimeToWords Function Documentation

### Overview
The `convertTimeToWords` function takes a string representing time in the `HH:MM` format and converts it into a human-readable format with words (e.g., `"2:30"` → `"half past two"`). It handles special cases like midnight and midday, as well as common phrases such as "quarter past," "half past," and "five to."

### Functions

#### 1. `convertTimeToWords(timeStr)`
- **Purpose**: Converts a time string into its corresponding English words representation.
- **Parameters**:
  - `timeStr` (string): A string representing the time in `HH:MM` format.
- **Returns**: A string that represents the time in words.

##### Detailed Breakdown:
1. **Input Parsing**:
   - The input string `timeStr` is split into hours (`hourStr`) and minutes (`minuteStr`).
   - Both `hourStr` and `minuteStr` are converted to integers (`hour` and `minutes`).

2. **Special Case Handling**:
   - If the input is `"0:00"` (midnight), the function returns `"midnight"`.
   - If the input is `"12:00"` (midday), it returns `"midday"`.

3. **Minutes Mapping**:
   - A list `minuteWords` is defined, which contains English representations for each minute from "0" to "30", including specific words like "quarter" and "half".

4. **Time Conversion Logic**:
   - If `minutes` is `0`, it returns the time in the format: `"hour o'clock"`.
   - If `minutes` is between `1` and `30`:
     - For `minutes = 15`, it returns `"quarter past hour"`.
     - For `minutes = 30`, it returns `"half past hour"`.
     - For other cases, it returns `"X past hour"` (e.g., "three past two").
   - If `minutes` is between `31` and `59`:
     - It calculates the remaining minutes to the next hour (`60 - minutes`).
     - For `minutes = 45`, it returns `"quarter to nextHour"`.
     - For other cases, it returns `"X to nextHour"` (e.g., "five to three").

#### 2. `hourInWords(hour)`
- **Purpose**: Converts a numeric hour (0-23) into its corresponding word in English.
- **Parameters**:
  - `hour` (integer): The hour in numeric form (0-23).
- **Returns**: A string representing the hour in words.

##### Mapping Logic:
- Hours are mapped using the `hoursInWords` object, where:
  - `"0"` maps to `"midnight"`,
  - `"12"` maps to `"midday"`,
  - Other hours are mapped to their English equivalents (e.g., `"2"` maps to `"two"`).
- It supports both 12-hour (AM/PM) and 24-hour formats by wrapping around hours after `23`.

### Console loggin for testing
An array `times` is used for testing the `convertTimeToWords` function:

```javascript
const times = ["0:00", "12:00", "2:00", "2:03", "2:11", "2:15", "2:30", "2:33", "2:40", "2:45", "2:55"];

times.forEach(time => {
  console.log(convertTimeToWords(time));
});
