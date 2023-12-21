# LibraryProject

* 1. array를 돌면서 페이지에서 각 책을 보여주는 함수 작성
    * 1-1. 테이블로 보여줘도 되고 card로 보여줘도 됨.
    * 1-2. array에 책을 더할 수 있어야 됨.
    
* 2. 책에는 세부 정보, author, title, total pages, whether it might be read 담겨 있고 이를 입력할 수 있는 양식을 추가해서 더하는 새 책 버튼이 있어야 한다.
    * 2-1. event.preventDefault() 를 이용해서 버튼의 submit 기능을 제거하고 사용.
    * 2-2. dialog를 이용해서 모달 메세지 창을 띄움.

* 3. 각 책의 디스플레이에는 버튼이 있고 이 버튼은 read 상태를 변경한다.
    * 3-1. prototype instance에서 책의 상태를 전환하는 기능을 생성