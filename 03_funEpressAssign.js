var leapYear = function(year){
      if ( typeof year=="string"||year==undefined||year!=NaN) {
        console.log(`Given Year  ${year} : Invalid Data  `);
        
     }
       else    if (year%4==0){
        console.log(`Given Year Is ${year} : Leap Year`);
        
    }
     
            
    

    else{
        console.log(`Given Year  ${year} : Is Not Leap Year `);
        
    }
    
    


};
leapYear(2020);
leapYear(1999)
leapYear(1600);
leapYear(2022);
leapYear("twenty twenty");
leapYear(1750);
leapYear(undefined);
leapYear(NaN);
