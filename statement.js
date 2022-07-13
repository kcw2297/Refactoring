
import createStatementData from './createStatementData.js';

function statement(invoice, plays){
    return renderPlainText(createStatementData(invoice, plays));
}


function renderPlainText(data){
    let result = `청구 내역 (고객명: ${data.customer})`;

    for (let perf of data.performances){
        result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)`;
    }
    
    result += `총액: ${usd(data.totalAmount)}`;
    result += `적립 포인트: ${data.totalVolumeCredits}점`;
    return result;
}

function htmlStatement(invoice, plays){
    return renderHtml(createStatementData(invoice, plays))
}

function renderHtml(data){
    let result = `<h1> ${data.customer} </h1>`;
    return result
}

function usd(aNumber){
    return new Intl.NumberFormat("en-US",
    { style:"currency", currency:"USD",
    minimumFractionDigits:2    
    }).format(aNumber/100);
}
