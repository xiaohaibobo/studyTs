
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
