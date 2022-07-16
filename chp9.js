/* 
변수 쪼개기
*/

function distanceTravelled(scenario, time){
    return secondAcc(scenario, time, firstAcc(scenario, time));
}

function firstAcc(scenario, time){
    let primaryTime = Math.min(time, scenario.delay);
    return 0.5 * basicAcc(scenario) * primaryTime * primaryTime;
}

function secondAcc(scenario, time, currentAcc){
    const secondaryTime = time - scenario.delay;
    if (secondaryTime > 0){
        let primaryVelocity = basicAcc(scenario) * scenario.delay;
        acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        currentAcc += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
    }
    return currentAcc;
}

function basicAcc(scenario){
    return scenario.primaryForce / scenario.mass;
}

/* 
파생 변수를 질의 함수로 바꾸기
*/


class ProductionPlan{
    constructor(production){
        this._initialProduction = production;
        this._adjustments = [];
    }

    get production(){
        return this._initialProduction + calculateProductionAccumulator();
    }
    
    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjustment);
    }

    get calculateProductionAccumulator(){
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
}


/* 
값을 참조로 바꾸기
*/

class Order{
    constructor(data){
        this._number = data.number;
        this._customer = registerCustomer(data.customer);
    }
    get customer(){return this._customer;}
}

class Customer{
    constructor(id){
        this._id=id;
    }
    get id() {return this._id;}
}


let _repositoryData;

function initialize(){
    _repositoryData = {};
    _repositoryData.customers = new Map();
}

function registerCustomer(id){
    if (! _repositoryData.customers.has(id)){
        _repositoryData.customers.set(id, new Customer(id));
    }
    return findCustomer(id);
}

function findCustomer(id){
    return _repositoryData.customers.get(id);
}
