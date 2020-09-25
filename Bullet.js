class Bullet{
    constructor(container, x, y, width, height, velX){
        this.x = x; //총알의 x좌표
        this.y = y;
        this.velX = velX;
        this.img = document.createElement("img");
        this.img.src = "../img/shooting/ball.png";
        this.img.style.position = "absolute";
        this.img.style.width = width + "px";
        this.img.style.height = height + "px";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        
        container.appendChild(this.img);
    }

    move(){
        this.x += this.velX;
        this.img.style.left = this.x+"px";
    }
}