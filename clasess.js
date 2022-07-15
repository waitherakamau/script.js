function Kiosk(price){
    this.price(price)
    this.CalKioskCost=function(name,quantity){
        let total_price=this.price*quantity
        return '$ {quantity} ${name} for $ {total_price}'
    }
}
let Kiosk=new Kiosk(30)
console.log(Kiosk.CalKioskCost("orange",5));

class KioskCal{
    constructor (fruit,quantity){
        this.fruit=fruit;
        this.quantity=quantity;
        this.fruitListprice={
            'orange':30,
            'mango':15,
            'avocado':40,
        };
        this.getTotalcost=()=>{
            return '${this.quantity}${this.fruit} for KES ${parseFloat(this.fruitListprice.orange*this.quantity)}'

        }

    }
}
var KioskCal=new KioskCal('oranges',2)
var KioskCal=new KioskCal('mango',5)

console.log(KioskCal.getTotalcost());
console.log(KioskCaly.getTotalcost);