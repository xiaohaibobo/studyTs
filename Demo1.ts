
//初识TypeScript
interface Person {
    name: string;
    age: number;

}
function test(person: Person) {
    // let web: string = "玛卡巴卡";
    console.log(person);
}
let xiaomin = {
    name: '小   民',
    age: 23
}
test(xiaomin);

//函数声明
function sun(x: number, y: number): number {
    return x + y
}
console.log(sun(3, 5));

//可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        console.log(firstName + ' ' + lastName);
    } else {
        console.log(firstName);

    }
}
//存在lastName
buildName('John', 'Luise');
// 不存在lastname
buildName('John')

//剩余参数
function push(array: any[], ...items: any[]) {
    items.forEach(item => {
        array.push(item)
    });
}

//联合类型
type Lianhe = string | number;
function typeofLianHe(x: Lianhe, y: Lianhe) {
    if (typeof (x) == 'string' || typeof (y) === 'string') {
        console.log(x.toString() + y.toString());
    } else {
        console.log(x + y);
    }
}
typeofLianHe('1', '2');
