/* 
질의 함수와 변경 함수 분리하기
*/

function alertForMiscreant(people){
    findMiscreant(people) ? setOffAlarms() : ";"
}


function findMiscreant(people){
    for (const p of people){
        if (p === "조커"){
            return "조커";
        }
        if (p === "사루만"){
            return "사루만";
        }
    }
    return "";
}


/*
생성자를 팩터리 함수로 바꾸기
*/

class Employee{
    constructor(name, typeCode){
        this._name = name;
        this._typeCode = typeCode;
    }
    get name(){return this._name;}
    get type(){return Employee.legalTypeCodes[this._typeCode];}
    static get legalTypeCodes(){
        return {"E":"Engineer", "M":"Manager","S":"Salesperson"};
    }
}

function createEngineer(name){
    return new Employee(name, "E")
}


/*
함수를 명령으로 바꾸기
*/

function score(candidate, medicalExam, scoringGuide){
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (medicalExam.isSmoker){
        healthLevel += 10;
        highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(candidate.originState)){
        certificationGrade = "low";
        result -= 5;
    }
    result -= Math.max(healthLevel - 5, 0);
    return result;
}