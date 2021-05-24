export default class VelocityScroll {
    constructor(element) {
        this.element = element;
        this.maxSkew = 40;
        this.speedRate = 0.35;
        this.content = '';
    }
    addEffect() {
        this.content = document.querySelector(this.element)
        this.content.style.transition = "0.25s ease-out";
        let currentPositionY = window.pageYOffset;
        const velocityScroll = () => {
            const newPositionY = window.pageYOffset;
            const positionChange = newPositionY - currentPositionY;
            let speed = positionChange * this.speedRate;
            if (speed < -this.maxSkew) {
                speed = -this.maxSkew;
            }
            if (speed > this.maxSkew) {
                speed = this.maxSkew;
            }
            this.content.style.transform = "skewY(" + speed + "deg)";
            currentPositionY = newPositionY
            requestAnimationFrame(velocityScroll)
        };
        velocityScroll()
    }
    setSkew(maxSkew) {
        this.maxSkew = maxSkew;
    }
    setSpeedRate(speedRate) {
        this.speedRate = speedRate;
    }
    removeEffect() {
        this.content = '';
    }
}
