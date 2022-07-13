function printOwing(invoice){
    
    printBanner();
    printDetails();

    let outstanding = 0;
    for (const o of invoice.orders){
        outstanding += o.amount;
    }
    
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear())
    
    
    
    function printBanner(){
        console.log('고객채무');
    };
    
    function printDetails(){
        console.log(`고객명 ${invoice.customer}`);
    }
}