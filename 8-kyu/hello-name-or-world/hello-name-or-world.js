function hello(name) {
  return `Hello, ${name == '' || !name ? 'World' : name.toLowerCase().split('').map((e,i) => i == 0 ? e.toUpperCase() : e).join('')}!`;
}