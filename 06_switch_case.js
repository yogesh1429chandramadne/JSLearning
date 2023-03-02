function dayOfWeek(day) {
    switch (day) {
    case 1:console.log(`Day Of The Week ${day} : monday`);
            
            break;
    case 2:console.log(`Day Of The Week ${day} : Tuesday`);
            
            break;
    case 3:console.log(`Day Of The Week ${day} : wed`);
            
            break;
    case 4:console.log(`Day Of The Week ${day} :Thur`);
            
            break;
    case 5:console.log(`Day Of The Week ${day} : Friday`);
            
            break;
     case 6:console.log(`Day Of The Week ${day} : Saturday`);
            
            break;
    case 7:console.log(`Day Of The Week ${day} : Sunday`);
            
            break;
        
    default:console.log(`Invalid Day: ${day} `);
            break;
    }
    

console.log(`End Of The Switch Case`);
}
dayOfWeek(3);
dayOfWeek(7);
dayOfWeek(0);
dayOfWeek(100);
dayOfWeek(-3);
dayOfWeek(null);
dayOfWeek(undefined);