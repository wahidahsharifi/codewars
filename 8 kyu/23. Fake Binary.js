function fakeBin(x) {
    let value = x.split('');
    let given = '';
    value.forEach(val => { given += Number(val) < 5 ? '0' : '1'; });
    return given;
}  