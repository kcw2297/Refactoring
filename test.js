
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

        // 함수 추출 가능해 보임
        volumeCredits += Math.max(perf.audience - 30, 0);
        if ("comedy" == playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

        result += `${playFor(perf).name}: ${format(amountFor(perf)/100)} (${perf.audience}석)`;
        totalAmount += amountFor(perf);
    }
    result += `총액: ${format(totalAmount/100)}`;
    result += `적립 포인트: ${volumeCredits}점`;
    return result;

}

function playFor(aPerformance){
    return plays[aPerformance.playID];
}

function amountFor(aPerformance){
    let result = 0;

    switch (playFor(aPerformance).type){
        case "tragedy":
            result = 40000;
            if (aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }
    return result;
}