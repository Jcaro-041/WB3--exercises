// end result: supplierCode:productNumber-size
// This function returns the supplier code, everything before the :
function getSupplier(code){
    let supplier = code.indexOf(":");
    return code.substring(0, supplier);
}
// This function returns all characters between the : and - or product #
function getProductNumber(code){
    let productNumber = code.indexOf("-" -1);
    return code.substring(code, productNumber);
}
// This function returns all characters after the - so the size
function getSize(code){
    let size = code.indexOf("-");
    return code.substring(size+1);
}

let code = "ACME:123-L";
code = "DI:12345-M";
code = "ACE:1-12";

// First product
console.log(getSupplier(code));
console.log(getProductNumber(code));
console.log(getSize(code));

// Second product
//console.log(getSupplier(code));
//console.log(getProductNumber(code));
//console.log(getSize(code));
//
//// Third
//console.log(getSupplier(code));
//console.log(getProductNumber(code));
//console.log(getSize(code));