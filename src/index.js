const { Application, Controller } = Stimulus;

class HelloController extends Stimulus.Controller {
  static targets = ['p'];
  connect() {
    try {
      this.pTarget.textContent = `succesed: Unifying target attributes -> data-hello-target="p"`;
    } catch (e) {
      p.textContent = e.message;
      p.style.color = 'red';
    }
  }
}

const application = Application.start();
application.register('hello', HelloController);
