/**
 * 购物车js对比
 */

class Item {
    name = ''
    price = 0
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class ShoppingCart {
    name = ''
    code = ''
    bookings = []
    date = new Date()

    constructor(name, code) {
        this.name = name
        this.code = code
        this.date = new Date()
    }
    
    price() {
       return this.bookings.map(b => b.price).reduce((a, b) => a+b, 0)
    }

    getInfo() {
        return `购物车信息：
            用户名：${this.name}
            优惠码：${this.code}
            总价: ${this.price()}
            日期： ${this.date.toString()}
        `
    }
}

function main() {
    const sc = new ShoppingCart('张三', '123456')
    sc.bookings = [new Item('苹果', 3), new Item('梨子', 4)]
    console.log(sc.getInfo())
}

main()