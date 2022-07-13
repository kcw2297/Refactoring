
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