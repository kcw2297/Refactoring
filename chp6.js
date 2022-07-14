
/*
함수 추출하기
*/

function printOwing(invoice){
    
    printBanner();
    printDetails(invoice);
    recordDueDate(invoice);

    const outstanding = calculateOutstanding(invoice);

    function calculateOutstanding(invoice){
        let result = 0;
        for (const o of invoice.orders){
            result += o.amount;
        }
        return result;
    }
    
    function recordDueDate(invoice){
        const today = Clock.today;
        invoice.dueDate = new Date(today.getFullYear());
    }
    
    function printBanner(){
        console.log('고객채무');
    };
    
    function printDetails(invoice){
        console.log(`고객명 ${invoice.customer}`);
    }
}


/*
함수 인라인하기
*/

function reportLines(aCustomer){
    const lines = [];
    out.push(["name",aCustomer.name]);
    out.push(["location", aCustomer.location]);
    return lines;
}

/* 
변수 추출하기
*/

function price(order){
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}

class Order {
    constructor(aRecord){
        this._data = aRecord;
    }

    get quantity() {return this._data.quantity;}
    get itemPrice() {return this._data.itemPrice;}

    get price(){
        return this.basePrice - this.quantityDiscount + this.shipping;
    }

    get basePrice(){ return this.quantity * this.itemPrice;} 
    get quantityDiscount(){ return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;}
    get shipping(){ return this.basePrice * 0.1, 100;}
}

/* 
함수 선언 바꾸기
*/
class Book {
    addReservation(customer, isPriority){
        isPriority == True
        this._reservations.push(customer);
    }
}



function inNewEngland(stateCode){
    ["MA","CT"].includes(stateCode);
}

const newEnglanders = someCusomters.filter(c=> inNewEngland(c.address.state));



/* 
변수 캡슐화하기
*/

let defaultOwnerData = {firstName:"마틴", lastName:"파울러"};
function defaultOwner() {return Object.assign({}, defaultOwnerData);}
function setDefaultOwner(arg) {defaultOwnerData = arg;}



let defaultOwnerData2 = {firstName:"마틴", lastName:"파울러"};
function defaultOwner() {return new Person(defaultOwnerData2);}
function setDefaultOwner(arg) {defaultOwnerData2 = arg;}

class Person {
    constructor(data){
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }
    get lastName() {return this._lastName}
    get firstName() {return this._firstName}
}


/* 
매개변수 객체 만들기
*/

function readingsOutsideRange(station, range){
    return station.readings.filter(r => !range.contains(r.temp))
}

class NumberRange {
    constructor(min, max){
        this._data = {min:min, max:max}
    }
    get min() {return this._data.min;}
    get max() {return this._data.max;}

    contains(arg){
        return (arg >= this.min && arg <= this.max);
    }
}

const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

alerts = readingsOutsideRange(station, range);


/* 
여러 함수를 클래스로 묶기
*/

// 클라이언트1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.BaseCharge;

// 클라이언트2
const aReading1 = acquireReading();
const base = baseRate(aReadin.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));



class Reading {
    constructor(data){
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month() {return this._month;}
    get year() {return this._year;}

    BaseCharge(aReading){
        return baseRate(aReadin.month, aReading.year) * aReading.quantity;
    }
}


/* 
단계 쪼개기
*/

function priceOrder(product, quantity, shippingMethod){
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.baseCharge * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase
    const price = basePrice - discount + shippingCost;
    return price;
}