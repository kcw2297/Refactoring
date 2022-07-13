
/*
함수 추출하기
*/

function printOwing(invoice){
    
    printBanner();
    printDetails(invoice);
    recordDueDate(invoice);

    const outstanding = calculateOutstanding(invoice);
    

    function calculateOutstanding(invoice){
        let result = 0;
        for (const o of invoice.orders){
            result += o.amount;
        }
        return result;
    }
    
    
    function recordDueDate(invoice){
        const today = Clock.today;
        invoice.dueDate = new Date(today.getFullYear());
    }
    
    function printBanner(){
        console.log('고객채무');
    };
    
    function printDetails(invoice){
        console.log(`고객명 ${invoice.customer}`);
    }
}