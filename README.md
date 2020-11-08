# cellular-automata

Demonstration of Cellular Automata on Web.

This automata is first order automata.

### Demo

- [Rule 1](https://ma38su.github.io/cellular-automata/?length=100&rule=1&init=center)
- [Rule 4](https://ma38su.github.io/cellular-automata/?length=100&rule=4&init=random)
- [Rule 5](https://ma38su.github.io/cellular-automata/?length=100&rule=5&init=random)
- [Rule 15](https://ma38su.github.io/cellular-automata/?length=100&rule=15&init=random)
- [Rule 18](https://ma38su.github.io/cellular-automata/?length=100&rule=18&init=random)
- [Rule 30](https://ma38su.github.io/cellular-automata/?length=100&rule=30&init=center)
- [Rule 40](https://ma38su.github.io/cellular-automata/?length=100&rule=40&init=random)
- [Rule 90](https://ma38su.github.io/cellular-automata/?length=100&rule=90&init=center)
- Rule 110
  - [Right](https://ma38su.github.io/cellular-automata/?length=100&rule=110&init=right)
  - [Random](https://ma38su.github.io/cellular-automata/?length=100&rule=110&init=random)
- [Rule 126](https://ma38su.github.io/cellular-automata/?length=100&rule=126&init=random)
- Rule 150
  - [length=17](https://ma38su.github.io/cellular-automata/?length=17&rule=150&init=center)
  - [length=19](https://ma38su.github.io/cellular-automata/?length=19&rule=150&init=center)
  - [length=31](https://ma38su.github.io/cellular-automata/?length=31&rule=150&init=center)
  - [length=100](https://ma38su.github.io/cellular-automata/?length=100&rule=150&init=center)
- [Rule 184](https://ma38su.github.io/cellular-automata/?length=100&rule=184&init=random)
- [Rule 249](https://ma38su.github.io/cellular-automata/?length=100&rule=249&init=random)

### Test

Run on local environment
```
yarn start
```

### Paramters

You can change some paramters using URL query.

``?rule=90&init=center&length=200&max=200&batch=1``

- rule: [0 - 255]
- init: 'blank' | 'left' | 'center' | 'right' | 'random' | 'all'
- length: uint
- batch: uint
- max: uint
- interval: uint


### Reference

- Joel L. Schiff著, 梅雄博司, セルオートマトン, 共立出版 (2011) 
