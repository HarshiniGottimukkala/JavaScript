let validateAadhar = (aadharNumber) => {
    if (aadharNumber.length === 12) {
        if (/^\d+$/.test(aadharNumber)) {
            if (aadharNumber[0] !== '0' && aadharNumber[0] !== '1') {
                return "Valid Aadhar Number";
            } else {
                return "Invalid Aadhar Number";
            }
        } else {
            return "Invalid Aadhar Number";
        }
    } else {
        return "Invalid Aadhar Number";
    }
}
let result = validateAadhar("A23456789012");
console.log(result);
