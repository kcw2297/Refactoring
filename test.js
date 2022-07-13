
// 계산과 출력을 분리 할 수 있어 보임
function statement(invoice, plays){
    // 변수 설정 3개의 필요성 여부 검토 - 가변성 유의사항 확인
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoice.customer})`;
    
    // format 변수의 파악 어려움, 함수 추출 및 이름 짓기
    const format = new Intl.NumberFormat("en-US",
        { style:"currency", currency:"USD",
        minimumFractionDigits:2    
        }).format;

    // 반복문 내부에 조건부 중첩 존재, 조건문 추출 필요
    for (let perf of invoice.performances){
        // 충첩 변수 혹은 가변 변수 파악
        const play = plays[perf.playID];
        let thisAmount = 0;

        switch (play.type){
            case "tragedy":
                thisAmount = 40000;
                if (perf.audience > 30) {
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            case "comedy":
                thisAmount = 30000;
                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르: ${play.type}`);
        }

        // 함수 추출 가능해 보임
        volumeCredits += Math.max(perf.audience - 30, 0);
        if ("comedy" == play.type) volumeCredits += Math.floor(perf.audience / 5);
        result += `${play.name}: ${format(thisAmount/100)} (${perf.audience}석)`;
        totalAmount += thisAmount;
    }
    result += `총액: ${format(totalAmount/100)}`;
    result += `적립 포인트: ${volumeCredits}점`;
    return result;

}

function amountFor(perf, play){
    let result = 0;

    switch (play.type){
        case "tragedy":
            result = 40000;
            if (perf.audience > 30) {
                result += 1000 * (perf.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (perf.audience > 20) {
                result += 10000 + 500 * (perf.audience - 20);
            }
            result += 300 * perf.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르: ${play.type}`);
    }
    return result;
}