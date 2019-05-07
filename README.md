# React + Redux = Counter

create-react-app을 이용해 프로젝트 생성하고, 리덕스를 설치하여 Counter Component를 작업합니다.

```
$ create-react-app redux-counter
$ yarn add redex react-redux
```

## 디렉터리

- actions: 액션 타입과 액션 생성자 파일을 저장
- components: 컴포넌트의 뷰가 어떻게 생길지 담당하는 프로젝테이셔널(presentational) 컴포넌트를 저장
- containers: 스토어에 있는 상태를 props로 받아 오는 컨테이너(continer) 컴포넌트을 저장
- reducers: 스토어의 기본 상태 값과 상태의 업데이트를 담당하는 리듀서 파일을 저장
- lib: 일부 컴포넌트에서 함께 사용되는 파일을 저장

## 실행

```
$ yarn start
```

## 확장 프로그램 설치

크롬 웹 스토어 > Redux DevTools 설치
