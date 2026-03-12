class Base {
  _patch<T>(data: T): T { return data; }
}
class Sub extends Base {
  _patch(data: any) {}
}
