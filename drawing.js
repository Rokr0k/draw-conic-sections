class Dot {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.type = "Dot"
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, ctx.lineWidth, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }
}

class Line extends Dot {
    constructor(x, y, m) {
        super(x, y)
        this.m = m
        this.type = "Line"
    }
    draw(ctx) {
        ctx.beginPath()
        if(this.m === Infinity) {
            ctx.moveTo(this.x, this.y - 1000)
            ctx.lineTo(this.x, this.y + 1000)
        }
        else {
            ctx.moveTo(this.x - 1000, this.y - 1000 * this.m)
            ctx.lineTo(this.x + 1000, this.y + 1000 * this.m)
        }
        ctx.stroke()
        ctx.closePath()
    }
}

class Segment extends Dot {
    constructor(x1, y1, x2, y2) {
        super(x1, y1)
        this.a = x2
        this.b = y2
        this.type = "Segment"
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.a, this.b)
        ctx.stroke()
        ctx.closePath()
    }
}

class Circle extends Dot {
    constructor(x, y, r) {
        super(x, y)
        this.r = r
        this.type = "Circle"
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2)
        ctx.stroke()
        ctx.closePath()
    }
}

class Parabola extends Dot {
    constructor(x, y, p, d) {
        super(x, y)
        this.p = p
        this.d = d
        this.type = "Parabola"
    }
    draw(ctx) {
        ctx.beginPath()
        if(this.d === 'h') {
            ctx.moveTo(this.x + Math.pow(-1000, 2) / (4 * this.p), this.y + -1000)
            for(let i=-999; i<1000; i+=0.1) {
                ctx.lineTo(this.x + Math.pow(i, 2) / (4 * this.p), this.y + i)
            }
        }
        else if(this.d === 'v') {
            ctx.moveTo(this.x + -1000, this.y + Math.pow(-1000, 2) / (4 * this.p))
            for(let i=-999; i<1000; i+=0.1) {
                ctx.lineTo(this.x + i, this.y + Math.pow(i, 2) / (4 * this.p))
            }
        }
        ctx.stroke()
        ctx.closePath()
    }
}

class Ellipse extends Dot {
    constructor(x, y, a, b) {
        super(x, y)
        this.a = a
        this.b = b
        this.type = "Ellipse"
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.ellipse(this.x, this.y, this.a, this.b, 0, 0, Math.PI*2)
        ctx.stroke()
        ctx.closePath()
    }
}

class Hyperbola extends Dot {
    constructor(x, y, a, b, d) {
        super(x, y)
        this.a = a
        this.b = b
        this.d = d
        this.type = "Hyperbola"
    }
    draw(ctx) {
        ctx.beginPath()
        if(this.d === 'h') {
            ctx.moveTo(this.x + Math.sqrt(Math.pow(this.a, 2) * (1+Math.pow(-1000/this.b, 2))), this.y + -1000)
            for(let i=-999; i<1000; i+=0.1) {
                ctx.lineTo(this.x + Math.sqrt(Math.pow(this.a, 2) * (1+Math.pow(i/this.b, 2))), this.y + i)
            }
            ctx.moveTo(this.x - Math.sqrt(Math.pow(this.a, 2) * (1+Math.pow(-1000/this.b, 2))), this.y + -1000)
            for(let i=-999; i<1000; i+=0.1) {
                ctx.lineTo(this.x - Math.sqrt(Math.pow(this.a, 2) * (1+Math.pow(i/this.b, 2))), this.y + i)
            }
        }
        else if(this.d === 'v') {
            ctx.moveTo(this.x + -1000, this.y + Math.sqrt(Math.pow(this.a, 2) * (1+Math.pow(-1000/this.b, 2))))
            for(let i=-999; i<1000; i+=0.1) {
                ctx.lineTo(this.x + i, this.y + Math.sqrt(Math.pow(this.a, 2) * (1+Math.pow(i/this.b, 2))))
            }
            ctx.moveTo(this.x + -1000, this.y - Math.sqrt(Math.pow(this.a, 2) * (1+Math.pow(-1000/this.b, 2))))
            for(let i=-999; i<1000; i+=0.1) {
                ctx.lineTo(this.x + i, this.y - Math.sqrt(Math.pow(this.a, 2) * (1+Math.pow(i/this.b, 2))))
            }
        }
        ctx.stroke()
        ctx.closePath()
    }
}