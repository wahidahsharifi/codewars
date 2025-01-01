function abbrevName(name) {
    return `${name[0].toUpperCase()}.${name[name.indexOf(' ')+1].toUpperCase()}`;
}