var check = {
    //Cумма продуктов
    sumProducts: 0.00,
    //Сумма хозтоваров
    sumHouse: 0.00,
    goods: [{
        name: 'Свекла',
        price: 100.0,
        count: 1,
        type: 'products',
    }, {
        name: 'Творог',
        price: 200.0,
        count: 0.5,
        type: 'products',
    }, {
        name: 'Бананы',
        price: 60.0,
        count: 1.2,
        type: 'products',

    }, {
        name: 'Картофель',
        price: 25.0,
        count: 3,
        type: 'products'
    }, {
        name: 'Fairy',
        price: 100.0,
        count: 1,
        type: 'house',
    }, {
        name: 'Салфетки',
        price: 15.0,
        count: 3,
        type: 'house',
    }, {
        name: 'Зубная паста Colgate 85мл',
        price: 69.0,
        count: 1,
        type: 'house',
    }, {
        name: 'Tide 3кг',
        price: 300.0,
        count: 1,
        type: 'house',
    }, {
        name: 'Лампочки LED 15w',
        price: 120.0,
        count: 2,
        type: 'house',
    }, {
        name: 'Ведро хозяйственное 8л',
        price: 140.0,
        count: 1,
        type: 'house',
    }, {
        name: 'Лампочка LED 20w',
        price: 135.0,
        count: 1,
        type: 'house',
    }, {
        name: 'Туал.Бумага "Zewa',
        price: 116.0,
        count: 1,
        type: 'house',
    }, {
        name: 'Антиперсперант шар. Rexona',
        price: 116.0,
        count: 1,
        type: 'house',
    }, {
        name: 'Зубная щетка Colgate',
        price: 29.0,
        count: 2,
        type: 'house',
    }],
    /*
    Условие задачи:
 Инна пошла в Ленту и купила там много разных товаров: продуктовых и 
 хозяйственных. 
Список: 
"Fairy 1л" 1шт 100р/шт,
"Свекла" 3кг 15р/кг,
"Салфетки" 3шт 15р/шт,
"Творог" 0,5кг 200р/кг,
"Зубная паста Colgate 85мл" 1шт 69р/шт,
"Бананы" 1,2кг 60р/кг,
"Tide 3кг" 1шт 300р/шт,
"Лампочки LED 15w" 2шт 120р/шт,
"Ведро хозяйственное 8л" 1шт 140р/шт,
"Картофель" 3кг 25р/кг,
"Лампочка LED 20w" 1шт 135р/шт,
"Туал.Бумага "Zewa"" 8рул 1шт 116р/шт,
"Антиперсперант шар. Rexona" 1шт 89р/шт,
"Зубная щетка Colgate" 2шт 29р/шт
Инне нужно знать сколько денег она потратила,чтобы спланировать свой месяц,
 поэтому необходимо посчитать общую сумму заказа и сколько было потрачено 
 отдельно на хозяйственые и продуктовые товары.
    */
    calcSum: function () {
        for (var i = 0; i < this.goods.length; i++) {
            var oneGood = this.goods[i];
            if (oneGood.type === 'products') {
                this.sumProducts = (this.sumProducts + (oneGood.price * oneGood.count));
            }
            if (oneGood.type === 'house') {
                this.sumHouse = (this.sumHouse + (oneGood.price * oneGood.count));
            }

        }

    },
};
check.calcSum();
//Функция,которая считает сумму по типам,отдельно продукты и хозтоварыю
console.log(check.sumProducts);
console.log(check.sumHouse);
