/*게임의 주인공 비행기를 정의한다.*/
class Hero{
    //주인공이 태어날 때, 어떠한 초기화 작업을 진행할지를 결정짓는 메서드
    //특히 생성자 메서드라고 한다.
    constructor(container, x, y, width, height){
        //생성자 내에서는 반드시 변수명 앞에 this를 명시해야 한다.
        //왜? 객체안에서의 코드작성이므로...
        this.img = document.createElement("img");  //<img>
        this.img.src = "../img/shooting/plane.png";
        this.img.style.position = "absolute";
        this.img.style.left = x+"px";
        this.img.style.top = y +"px";
        this.img.style.width = width +"px";
        this.img.style.height =height +"px";
        
        //화면에 부착하기!!
        //부모 요소에 부착하자
        container.appendChild(this.img);
    }

    //비행기의 동작방식을 결정짓는 메서드
    move(){

    }
}