# Chrome App clone coding

> [KR]
>
> 클론 코딩을 진행하면서 알게 된 것을 적어 놓은 문서입니다.
>
> 항목은 강의 섹션에 따라서 나뉘어 있습니다.
>
> [EN]
>
> This document is note about what I got to know while clone coding.
>
> Each provision is separated follow section of lecture
>
> [Lecture link](https://nomadcoders.co/javascript-for-beginners)

### Basic of JS

> - Recently, ``var`` is not trend. If possible use ``const`` and use ``let`` sometimes
> - `JS` is for interaction.
> - ``CSS`` if for display.
> - ``querySelector`` and ``getElementById`` are have same role.

### Log in

> - The default action of ``submit`` event is **refresh**
> - It is possible that storing some data in The ``localstorage``.

### Clock

> - usage of ``padStart`` function and ``setInterval``
> - ``setTimeout`` operate only one time.

### Quotes and Background

> - ``Math.random()`` make number **form 0 to 1** randomly

### To Do List

> - Use ``stringify`` to save array in ``local storage`` for use it as string
> - JS provides ``item`` that is being processed
> - The ``foreach`` executes a function for each ``item``
> - When an event is made, I know what it is and where it is. But I can't know that which item of ``local storage`` is the target of event with  without special task.
>   1. Using ``Date.now()``, make a id
>   2. Make an object what have a id and a text
>   3. Add id in ``li.id``
>
> - ``filter`` returns a new array without altering the array.

---

[2021.08.01.] 

- chrome app clone coding 끝.
- 간단한 기능 구현 완료.
- 날씨 정보 api key 발급해야됨.
- CSS 이용해서 레이아웃 가다듬을 필요가 있음

[2021.08.04.]

- 배경화면, 최대 화면일 때 레이아웃 추가
- 반응형으로 만들어서 창의 크 기에 따라 유동적인 레이아웃을 만들어야 함.
- To do list 위치 변경 필요

[2021.08.05.]

- 배경화면 이미지 변겅
- 시계, 로그인 브라우저 화면 중앙으로 위치 이동
- 명언 브라우저 하단으로 위치 이동
- To do list 제거

[2021.08.07.]

- 배경화면이 창의 크기에 따라 유동적으로 변하게 변경
- 현재 날씨 우측 상단에 표시
