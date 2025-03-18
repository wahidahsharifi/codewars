function declareWinner(fighter1, fighter2, firstAttacker) {
  const name = [fighter1.name, fighter2.name]
  let health = [fighter1.health, fighter2.health]
  const damagePerAttack = [fighter1.damagePerAttack, fighter2.damagePerAttack]
  let fAttacker = name.indexOf(firstAttacker);
​
  while(true) {
    let opponent = 1 - fAttacker;
    health[opponent] -= damagePerAttack[fAttacker];
​
    if (health[opponent] <= 0) {
      return name[fAttacker];
    }
​
    fAttacker = opponent;
  }
}