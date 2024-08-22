/**
 * 购物车程序
 */
class Meta {
  double price;
  String name;
  Meta(this.name, this.price);
  // 重载加法
}

class Item extends Meta {
  // double price;
  // String name;
  // Item(name, price) {
  //   this.name = name;
  //   this.price = price;
  // }
  // 构造函数语法糖
  // Item(this.name, this.price);
  Item(name, price) : super(name, price);
}

class ShoppingCart extends Meta {
  // String name;
  DateTime date;
  String code;
  List<Item> bookings;

  // ShoppingCart(name, code) {
  //   this.name = name;
  //   this.code = code;
  //   this.date = DateTime.now();
  // }
  // ShoppingCart(this.name, this.code) : date = DateTime.now();
  // super必须写在最后面
  ShoppingCart(name, this.code)
      : date = DateTime.now(),
        super(name, 0);

  double get price {
    double total = 0.0;
    bookings.forEach((item) => {total += item.price});
    return total;
  }

  // 加{}也行，不加也行
  getInfo() {
    return '''购物车信息：
    -------------------
    用户名：$name
    优惠码： $code
    总价: ${price}
    日期： ${date.toString()}
    -------------------
     ''';
  }
}

void main() {
  ShoppingCart sc = ShoppingCart('张三', '123456');
  sc.bookings = [Item('苹果', 3.0), Item('梨子', 4.0)];
  String info = sc.getInfo();
  print(info);
}
