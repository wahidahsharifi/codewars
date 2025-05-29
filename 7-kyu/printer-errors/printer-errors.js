function printerError(s) {
    return `${s.split('').filter(e => e > 'm').length}/${s.length}`
}