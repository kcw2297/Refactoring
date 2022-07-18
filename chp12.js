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
    get type() {return this._type;}
    set type(arg) {this._type = arg;}

    get capitalizedType(){
        return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
    }
    toString(){
        return `${this._name} (${this.capitalizedType})`;
    }
}