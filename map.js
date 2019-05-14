var moveCount = 0
var imageIndex = 0
var images = ["images/stevewalk1.png", "images/stevewalk2.png"]

var move = (style, diff) => {
  steve.style[style] = (
    (
      parseInt(
        steve.style[style].replace(
          "px",
          ""
        ),
        10
      )
      ||
      1
    )
    +
    diff
  )
  +
  "px"
}

var handleKeydown = (event) => {
  var steve = document.getElementById(
    "steve"
  )

  switch (
    event.keyCode
  )
  {
    case 37: // left
      move("left", -10)
      break;
    case 38: // up
      move("top", -10)
      break;
    case 39: // right
      move("left", 10)
      break;
    case 40: // down
      move("top", 10)
      break;
  }

  moveCount++

  if (moveCount % 5 === 0) {
    if (imageIndex > 1) {
      imageIndex = 0
    }
    
    steve.src = images[imageIndex++]
  }
}

document.addEventListener(
  "keydown",
  handleKeydown
)
