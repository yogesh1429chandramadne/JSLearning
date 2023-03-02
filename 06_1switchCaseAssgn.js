function monthOfYear(month) {
    switch (month) {
    case 1:console.log(`Month Of The Year ${month} : january`);
            
            break;
    case 2:console.log(`Month Of The Year ${month} : febuary`);
            
            break;
    case 3:console.log(`Month Of The Year ${month} : march`);
            
            break;
    case 4:console.log(`Month Of The Year ${month} : April`);
            
            break;
    case 5:console.log(`Month Of The Year ${month} : May`);
            
            break;
     case 6:console.log(`Month Of The Year ${month} : June`);
            
            break;
    case 7:console.log(`Month Of The Year ${month} : July`);
            
            break;
    case 8:console.log(`Month Of The Year ${month} : August`);
            break;
    case 9:console.log(`Month Of The Year ${month} : September`);
            
            break;
           
    case 10:console.log(`Month Of The Year ${month} : Octomber`);
            
            break;
    case 11:console.log(`Month Of The Year ${month} : November`);
            
            break;
    case 12:console.log(`Month Of The Year ${month} : December`);
            
            break;
            
    default:console.log(`Invalid Month: ${month} `);
            break;
    }
    

console.log(`End Of The Switch Case`);
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);