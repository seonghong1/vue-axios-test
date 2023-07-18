# vue-axios

axios tutorial

```
 -  현재 baseURL설정 후 export 해주어, import Axios from "@/http/index.ts"  Axios.  get...
    형태이다. $axios전역 설정후 baseURL을 적용 가능한가? 실제 프로젝트에서는 API_URL을 사용하여 import 해주기때문에 import 를 하지 않고 사용하는 방법을 찾아보자
```

```
 - json객체로 반환
 - body 데이터가 자동으로 stringfy
 - error catch시 (res.statuse === "404") .. . 이렇게 조건문을 넣어 에러 코드에 따른 메세지를 따로
 작성해야되는 반면에 axios는 catch(err){
    console.log(err.message) 로 해당되는 에러의 내용을 볼 수 있다.
 }
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
