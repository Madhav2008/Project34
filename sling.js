class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.3,
            length: 300
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly() {
        this.rope.bodyA = null;
    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255, 255, 255);
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }

    }
}