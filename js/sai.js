(function() {
    window.che = function() {
            //车的宽
            this.w = 30;
            //车的高
            this.h = 80;
            //随机出的车的样子
            do {
                this.x = _.random(1, 5);
                this.x1 = _.random(1, 5);
            } while (this.x == this.x1)
            //随机的位置
            this.y = _.random(100, 300);
            this.t = _.random(-100, -300);
            game.arr.push(this);
            this.a = 0;
        }
        //随机出的车z
    che.prototype.render = function() {
        this.a += 0.1;
        this.t += this.a;
        this.a1 = this.y;
        this.a2 = this.y + this.w;
        this.b1 = this.t;
        this.b2 = this.t + this.h;
        //车的碰撞判断
        if (this.b2 < game.mydeche.b2 + 130) {
            game.ctx.drawImage(game.R["che" + this.x], this.y, this.t);
            if (game.mydeche.b1 <= this.b2 && game.mydeche.a2 >= this.a1 && game.mydeche.a1 <= this.a2) {
                game.toDie()
                clearInterval(game.timer)
            }
        }
    }
})()