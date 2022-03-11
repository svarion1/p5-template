class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(0.5, 1.5))
        this.acceleration = createVector();

    }

    align(boids) {
        let avg = createVector()
        for (others of boids) {
            avg.add(other.velocity);
        }
    }


    update() {
        this.position.add(this.velocity);
        this.position.add(this.acceleration);

    }

    show() {
        stroke(255, 0, 23);
        strokeWeight(16);
        point(this.position.x, this.position.y);

    }

}
