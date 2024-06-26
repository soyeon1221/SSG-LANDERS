# &#9918; SSG LANDERS &#9918;

인천 야구팀 SSG LANDERS 홈페이지 제작


#### [목차]
###### 1. [SSG LANDERS 바로가기](#-ssg-landers-바로가기)
###### 2. [프로젝트 소개](#-프로젝트-소개)
###### 3. [기술 스택 및 라이브러리](#-기술-스택-및-라이브러리)
###### 4. [개발 기간](#-개발-기간)
###### 5. [주요 기능](#-주요-기능)

<br>


## &#128204;SSG LANDERS 바로가기

[<img src="./SSG-icon.png" width="40" height="40">](https://soyeon1221.github.io/SSG-LANDERS) 아이콘 클릭!

<br>


## &#128204; 프로젝트 소개

HTML, CSS, JavaScript를 사용하여 기존의 SSG LANDERS 홈페이지를 참고하여 만들었습니다.

메뉴, 선수단 소개, 경기일정, 유튜브 등 사이트를 처음부터 끝까지 구현해보았습니다. 

<br>


## &#128204; 기술 스택 및 라이브러리

- <img src="https://img.shields.io/badge/JavaScript-ECD53F?style=flat-square&logo=JavaScript&logoColor=white"/>
- <img src="https://img.shields.io/badge/HTML5-F46D01?style=flat-square&logo=HTML5&logoColor=white"/>
- <img src="https://img.shields.io/badge/CSS3-2490D7?style=flat-square&logo=CSS3&logoColor=white"/>

<br>


## &#128204; 개발 기간

- 23.12.04 - 23.12.08 (총 5일)

<br>


## &#128204; 주요 기능

### 1. 상단
![ssg landers_1](https://github.com/soyeon1221/SSG-LANDERS/assets/121142418/08500183-b3a7-4ea6-af3d-bee6991d1b4f)
- Header에 flex를 사용하여 상단 메뉴들의 너비를 똑같이 지정하였습니다.
- :hover를 이용해 숨어있던 하단 메뉴가 나타나도록 하였고, color와 font-weight를 변경하였습니다.

### 2. 선수단 소개
![ssg landers_2](https://github.com/soyeon1221/SSG-LANDERS/assets/121142418/df59c3d0-d92c-4c2c-849b-3915cfe3908e)
- 기존 SSG LANDERS 홈페이지에 없는 선수단 소개 부분을 추가하였습니다.
- 반복문을 사용하여 각 상자에 호버이벤트를 추가하고 호버된 상자의 너비를 넓히고 제외한 다른 상자의 너비를 작게 하여 움직이는 애니메이션을 적용했습니다.

### 3. 경기일정
![ssg landers_3](https://github.com/soyeon1221/SSG-LANDERS/assets/121142418/f02edf59-8a2a-4d3a-85d1-9d1a37b13a11)
- position과 ::before를 사용해서 배경이미지에만 opacity를 적용했습니다.
- 버튼을 클릭하면 각 상자의 translateX를 이동해서 슬라이드를 구현하였습니다.
- if else 문으로 함수를 작성해서 맨 마지막 상자에서 next 버튼을 눌렀을 때 다시 첫 번째 상자로 돌아가도록, 첫 번째 상자에서 prev 버튼을 눌렀을 때 맨 마지막 상자로 이동하도록 구현하였습니다.

### 4. 유튜브
![ssg landers_4](https://github.com/soyeon1221/SSG-LANDERS/assets/121142418/8d4a27fe-2c3a-4d5d-9c30-fcb8b4a4b81a)
- onclick 이벤트를 이용해서 해당 유튜브가 재생되도록 구현하였습니다.

### 5. 미디어
![ssg landers_5](https://github.com/soyeon1221/SSG-LANDERS/assets/121142418/f2a0bd3a-e6a5-41b3-81a8-74e9cb278b69)
- 각 버튼을 클릭하면 해당 미디어로 이동합니다.

