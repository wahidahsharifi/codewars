function printerError(s) {
    return `${s.split('').filter(e => 'abcdefghijklm'.split('').includes(e) == false).length}/${s.length}`
}