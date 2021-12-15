
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
    name: '小民',
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
