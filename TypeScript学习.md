### 安装TypeScript
```npm install typescript -g```

### 全局安装 ts-node
```npm install -g ts-node```
```txt
注意：安装后，ts-node 项目.ts报错，可以先cnpm install -D tslib @types/node，再ts-node 项目.ts即可
```
### 可选参数
```typescript
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        console.log(firstName + ' ' + lastName);
    } else {
        console.log(firstName);

    }
}

```

