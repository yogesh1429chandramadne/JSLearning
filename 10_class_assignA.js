class Vehicle {
    companyName
    model
    colour
    fuel
    price
    
    constructor(companyName,model,colour,fuel,price){
   this. companyName=companyName
   this. model=model
    this.colour=colour
    this.fuel=fuel
    this.price=price
    

    }
    

}

console.log(`============================================Vehicles Information==========================================================`);
const royalEnfield  = new Vehicle("Royal Enfield","Meteor 650","black","petrol","350000")
console.log(royalEnfield);

const bajaj = new Vehicle("Bajaj","pulsar","black","petrol","180000")
console.log(bajaj);
const honda = new Vehicle("Honda","shine","silver","petrol","150000")
console.log(honda);
const hero = new Vehicle("Hero","splendor","black","petrol","120000")
console.log(hero);
console.log(`============================================Vehicles Information After Traversing==========================================================`);

const arrayOfVehicles=[royalEnfield,bajaj,honda,hero]
for (const element of arrayOfVehicles) {
    {
       
        console.log(`Details Of Vehicles:${element.companyName},${element.model},${element.colour},${element.fuel},${element.price}`);
    }
    
}


class Collage{
        
    collageName
    city
    university
    establishment
    
    constructor(collageName,city,university,establishment){
       this. collageName=collageName
       this.city=city
       this.university=university
       this.establishment=establishment
       
    }

    }

    console.log(`============================================Collages ==========================================================`);

const coep=new Collage("COEP Pune","Pune","Pune University","1854")
console.log(coep);
const sggs=new Collage("SGGS","Nanded","SRTMUN","1994")
console.log(sggs);
const bidve=new Collage("Bidve Collage","Latur","SRTMUN","1983")
console.log(bidve);
const vidarbh=new Collage("Vidarbha Mahavidhyalay","Amaravati","Maharastra University","1931")
console.log(vidarbh);
let traverseObject= function(){
    
        console.log(`
collage Name:${coep.collageName},
City       :${coep.city},
University :${coep.university},
estd.Year  :${coep.establishment}                   
                                          `);
    
console.log(`
collage Name:${sggs.collageName},
City       :${sggs.city},
University :${sggs.university},
estd.Year  :${sggs.establishment}                   
                                   `);           
console.log(`
collage Name:${bidve.collageName},
City       :${bidve.city},
University :${bidve.university},
estd.Year  :${bidve.establishment}                   
                                `);
console.log(`
collage Name:${vidarbh.collageName},
City       :${vidarbh.city},
 University :${vidarbh.university},
estd.Year  :${vidarbh.establishment}                   
                                                                          `);
}                                                                  
traverseObject();

