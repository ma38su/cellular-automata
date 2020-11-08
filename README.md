# cellular-automata

Demonstration of Elementary Cellular Automata(ECA) on Web.

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
  - [51:49](https://ma38su.github.io/cellular-automata?rule=184&max=300&init=center&batch=49&length=100)
  - [50:50](https://ma38su.github.io/cellular-automata?rule=184&max=300&init=center&batch=50&length=100)
  - [49:51](https://ma38su.github.io/cellular-automata?rule=184&max=300&init=center&batch=51&length=100)
- [Rule 249](https://ma38su.github.io/cellular-automata/?length=100&rule=249&init=random)

### Paramters

You can change some paramters using URL query.

``?rule=90&init=center&length=200&max=200&batch=1``

- rule: [0 - 255] = 90
- init: 'blank' | 'left' | 'center' | 'right' | 'random' | 'all' = 'center'
- length: uint = 100
- batch: uint = 1
- max: uint = 200
- interval: uint = 10
- cellsize: uint = 8
- boundary: 'periodic' | 'reflective' | 'true' | 'false' = 'periodic'

### Related Project

[game-of-life](https://github.com/ma38su/game-of-life)

### Reference

- Joel L. Schiff著, 梅雄博司, セルオートマトン, 共立出版 (2011) 
