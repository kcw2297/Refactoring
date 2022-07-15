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
        this._production = production;
        this._adjustments = [];
    }

    get production(){return this._production;}
    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}