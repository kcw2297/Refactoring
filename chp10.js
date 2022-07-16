/*
중첩 조건문을 보호 구문으로 바꾸기
*/
function payAmount(employee){
    let result;
    if(employee.isSeparated){
        result = {amount:0, reasonCode:"SEP"};
    }
    else {
        if (employee.isRetired){
            result = {amount:0, reasonCode:"RET"}
        }
    
        else{
            lorem.ipsum(dolor.sitAmet);
            ramdomFunction(something).edit();
            result = someFinalComputation();
        }
    }
    return result;
}