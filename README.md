# 1. LibraryProject

- ## 1.1. Dialog
  - book 객체 그리고 그것을 prototype으로 하는 typebook 에는 author, title, total pages, whether it might be read (typebook의 경우 type도 포함)를 갖고 있다.
    - event.preventDefault() 를 이용해서 버튼의 submit 기능을 제거하고 사용.
    - dialog를 이용해서 모달 메세지 창을 띄움.
- ## 1.2. main

  - grid를 활용하여 화면을 반응형으로 만들고 책을 추가해도 레이아웃이 깨지지 않게 auto-fill을 활용한다.

  2. 강화버전
     2.1. localstorage를 이용해서 web에 book data를 저장하고 showscreen으로 저장된 모든 책을 꺼내는 로직으로 운영한다.
  회고하면서 적겠음 ㅇㅇ