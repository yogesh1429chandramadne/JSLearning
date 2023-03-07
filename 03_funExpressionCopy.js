  var check_leap_Year = function (leap_year) {
    if ((leap_year % 4 == 0 && leap_year % 100 != 0) || leap_year % 400 == 0) {
      console.log(`Given Year Is ${leap_year} : Leap Year`);
      return leap_year;
    } else if (
      leap_year != "number" ||
      leap_year == undefined ||
      leap_year == null
    ) {
      console.log(`Given Year  ${leap_year} : Invalid Data  `);
      return leap_year;
    } else {
      console.log(`Given Year  ${leap_year} : Is Not Leap Year `);
      return leap_year;
    }
  };
  var year = check_leap_Year(2020);
  check_leap_Year(1999);
  check_leap_Year(1600);
  check_leap_Year(2022);
  check_leap_Year("twenty twenty");
  check_leap_Year(1750);
  check_leap_Year(undefined);
  check_leap_Year(NaN);
