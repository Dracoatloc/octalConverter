function convert(decimal) {
    const base = 8;
    const octalString = decimal.toString(base);
    const octalNumber = parseInt(octalString);
    return octalNumber;
}

exports.convert = convert