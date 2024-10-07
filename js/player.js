class Player {
  constructor(gameScreen, positionX, positionY, width, height, image) {
    this.gameScreen = gameScreen
    this.left = positionX
    this.top = positionY
    this.width = width
    this.height = height
    this.directionX = 0
    this.directionY = 0
    this.element = document.createElement("img")
    this.element.src = image

    this.element.style.position = "absolute"

    this.element.style.top = `${positionY}px`
    this.element.style.left = `${positionX}px`
    this.element.style.width = `${width}px`
    this.element.style.height = `${height}px`

    this.gameScreen.appendChild(this.element)
  }

  move() {
    this.left += this.directionX
    this.top += this.directionY

    if (this.left < 10) {
      this.left = 10;
    }

    if (this.top < 10) {
      this.top = 10;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition()
  }

  updatePosition() {

  }

  didCollide(obstacle) {

  }
}