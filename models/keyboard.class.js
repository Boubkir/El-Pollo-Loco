class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;


  constructor() {
    this.eventTouchBtns();
    this.eventKeyboardBtns();
  }


  eventKeyboardBtns() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode == 37) {
        keyboard.LEFT = true;
      };
      if (e.keyCode == 39) {
        keyboard.RIGHT = true;
      };
      if (e.keyCode == 38) {
        keyboard.UP = true;
      };
      if (e.keyCode == 40) {
        keyboard.DOWN = true;
      };
      if (e.keyCode == 32) {
        keyboard.SPACE = true;
      };

    });


    window.addEventListener('keyup', (e) => {
      if (e.keyCode == 37) {
        keyboard.LEFT = false;
      };
      if (e.keyCode == 39) {
        keyboard.RIGHT = false;
      };
      if (e.keyCode == 38) {
        keyboard.UP = false;
      };
      if (e.keyCode == 40) {
        keyboard.DOWN = false;
      };
      if (e.keyCode == 32) {
        keyboard.SPACE = false;
      };
    });
  }


  eventTouchBtns() {
    setTimeout(() => {
      document.getElementById('MobileBtnLeft').addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.LEFT = true;
      });


      document.getElementById('MobileBtnLeft').addEventListener('touchend', (event) => {
        event.preventDefault();
        this.LEFT = false;

      });


      document.getElementById('MobileBtnRight').addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.RIGHT = true;
      });

      
      document.getElementById('MobileBtnRight').addEventListener('touchend', (event) => {
        event.preventDefault();
        this.RIGHT = false;
      });


      document.getElementById('MobileBtnJump').addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.UP = true;
      });


      document.getElementById('MobileBtnJump').addEventListener('touchend', (event) => {
        event.preventDefault();
        this.UP = false;
      });


      document.getElementById('MobileBtnThrow').addEventListener('touchstart', (event) => {
        event.preventDefault();
        this.SPACE = true;
      });


      document.getElementById('MobileBtnThrow').addEventListener('touchend', (event) => {
        event.preventDefault();
        this.SPACE = false;
      });
    }, 500);
  }
}
