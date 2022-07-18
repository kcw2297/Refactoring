/* 
타입 코드를 서브클래스로 바꾸기
*/

class Employee{
    constructor(name, type){
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(arg){
        if (!["engineer", "manager","salesperson"].includes(arg)){
            throw new Error('해당 타입의 직원 유형은 없습니다')
        }
    }
    get typeString(){return this._type.toString()}
    get type() {return this._type;}
    set type(arg) {this._type = Employee.createEmployeeType(arg);}

    get capitalizedType(){
        return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
    }
    toString(){
        return `${this._name} (${this.type.capitalizedName})`;
    }

    static createEmployeeType(aString){
        switch(aString){
            case "engineer":
                return new Engineer();
            case "manager":
                return new Manager();
            case "salesperson":
                return new SalesPerson();
            default:
                throw new Error("해당 유형이 없습니다.")
        }
    }
}

class EmployeeType{
    get capitalizedName(){
        return this.typeString.charAt(0).toUpperCase() 
            + this.typeString.substr(1).toLowerCase();
    }
}

class Engineer extends EmployeeType{
    toString(){return "engineer";}
}
class Manager{
    toString(){return "manager";}
}
class SalesPerson{
    toString(){return "salesperson";}
}






/* 
서브클래스를 위임으로 바꾸기 1
*/

class Booking{
    constructor(show, date){
        this._show = show;
        this._date = date;
    }
    get hasTalkback(){
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice(){
        return (this._premiumDelegate) ? this._premiumDelegate.basePrice : this._privateBasePrice
    }

    get _privateBasePrice(){
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
    get hasDinner(){
        return (this._premiumDelegate) ? this._premiumDelegate.hasDinner : undefined;
    }

    _bePremium(extras){
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
}


class PremiumBookingDelegate{
    constructor(hostBooking, extras){
        this._host = hostBooking;
        this._extras = extras;
    }
    get hasTalkback(){
        return this._host._show.hasOwnProperty('talkback');
    }
    get basePrice(){
        return Math.round(this._host._privateBasePrice + this._extras.premiumFee);
    }
    get hasDinner(){
        return this._extras.hasOwnProperty('dinner') && !this._host.isPeakDay;
    }
}


function createBooking(show, date){
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras){
    result =  new Booking(show, date, extras);
    result._bePremium(extras);
    return result;
}

aBooking = createBooking(show, date);
aBooking2 = createPremiumBooking(show, date, extras);


/* 
슈퍼클래스를 위임으로 바꾸기
*/

class CatalogItem{
    constructor(id, title, tags){
        this._id = id;
        this._title = title;
        this._tags = tags;
    }

    get id(){return this._id;}
    get title(){return this._title;}
    hasTag(arg){return this._tags.includes(arg);}
}


class Scroll extends CatalogItem{
    constructor(id, title, tags, dateLastCleaned){
        super(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }

    needsCleaning(targetDate){
        const threshold = this.hasTag("revered") ? 700 : 1500;
        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    daysSinceLastCleaning(targetDate){
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
}