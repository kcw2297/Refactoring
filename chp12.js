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






