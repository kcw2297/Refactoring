/* 
질의 함수와 변경 함수 분리하기
*/

function alertForMiscreant(people){
    for (const p of people){
        if (p === "조커"){
            setOffAlarms();
            return "조커";
        }
        if (p === "사루만"){
            setOffAlarms();
            return "사루만";
        }
    }
    return "";
}

