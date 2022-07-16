/*
중첩 조건문을 보호 구문으로 바꾸기
*/


function payAmount(employee){
    if(employee.isSeparated){return {amount:0, reasonCode:"SEP"};}
    if(employee.isRetired){return {amount:0, reasonCode:"RET"};}
    lorem.ipsum(dolor.sitAmet);
    ramdomFunction(something).edit();
    return someFinalComputation();
}


/* 
조건부 로직을 다형성으로 바꾸기 - ex1
*/
function plumages(birds){
    // return new Map(birds.map(b=>[b.name, plumage(b)]));
    return new Map(birds.map(b=>[b.name, createBird(b).plumage]));
}

function speeds(birds){
    // return new Map(birds.map(b=>[b.name, airSpeedVelocity(b)]));
    return new Map(birds.map(b=>[b.name, createBird(bird).airSpeedVelocity]));
}

// function plumage(bird){
//     return createBird(bird).plumage;
// }

// function airSpeedVelocity(bird){
//     return createBird(bird).airSpeedVelocity;
// }

function createBird(bird){
    switch (bird.type){
        case '유럽 제비':
            return new EuropeBird(bird);
        case "아프리카 제비":
            return new AfricaBird(bird);
        case "노르웨이 파랑 앵무":
            return new NorwayBird(bird);
        default:
            return new Bird(bird);
    }
}

class Bird{
    constructor(birdObject){
        Object.assign(this, birdObject);
    }

    get plumage(){
        return "unknown action";
    }

    get airSpeedVelocity(){
        return "unknown speed";
    }
}

class EuropeBird extends Bird{
    get plumage(){
        return "보통이다";
    }

    get airSpeedVelocity(){
        return 35;
    }
}

class AfricaBird extends Bird{
    get plumage(){
        return (this.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";;
    }

    get airSpeedVelocity(){
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwayBird extends Bird{
    get plumage(){
        return (this.voltage > 100) ? "그을렸다" : "예쁘다";
    }

    get airSpeedVelocity(){
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }
}


/* 
조건부 로직을 다형성으로 바꾸기 - ex2
*/
function rating(voyage, history){
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
}

function voyageRisk(voyage){
    let result = 1;
    if (voyage.length > 4) result += 2;
    if (voyage.length > 8) result += voyage.length - 8;
    if (["중국", "동인도"].includes(voyage.zone)) result += 4;
    return Math.max(result, 0);
}

function captainHistoryRisk(voyage, history){
    let result = 1;
    if (history.length < 5) result += 4;
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === "중국" && hasChina(history)) result -= 2;
    return Math.max(result, 0);
}

function hasChina(history){
    return history.some(v => "중국" === v.zone);
}

function voyageProfitFactor(voyage, history){
    let result = 2;
    if (voyage.zone === "중국") result += 1;
    if (voyage.zone === "동인도") result += 1;
    if (voyage.zone === "중국" && hasChina(history)){
        result += 3;
        if (history.length > 10) result += 1;
        if (voyage.length > 12) result += 1;
        if (voyage.length > 18) result -= 1;
    } 
    else {
        if (history.length > 8) result += 1;
        if (voyage.length > 14) result -= 1;
    }
    return result;
}