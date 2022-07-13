
// 계산과 출력을 분리 할 수 있어 보임
function statement(invoice, plays){
    // 변수 설정 3개의 필요성 여부 검토 - 가변성 유의사항 확인
    let totalAmount = 0;
    let result = `청구 내역 (고객명: ${invoice.customer})`;
    
    for (let perf of invoice.performances){
        result += `${playFor(perf).name}: ${usd(amountFor(perf)/100)} (${perf.audience}석)`;
        totalAmount += amountFor(perf);
    }
    
    let volumeCredits = 0; 
    for (let perf of invoice.performances){
        volumeCredits += volumeCreditsFor(perf);
    }

    result += `총액: ${usd(totalAmount/100)}`;
    result += `적립 포인트: ${volumeCredits}점`;
    return result;
}

function usd(aNumber){
    return new Intl.NumberFormat("en-US",
    { style:"currency", currency:"USD",
    minimumFractionDigits:2    
    }).format(aNumber/100);
}


function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" == playFor(aPerformance).type) 
        result += Math.floor(aPerformance.audience / 5);
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

