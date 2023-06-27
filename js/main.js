const doc = document;

const
    forms = doc.querySelector('.plansForm'),
    formsEls = forms.elements,
    plansInput = forms.plansInput,
    plansBtn = forms.plansBtn
    actionBtnDel = document.getElementsByClassName('action-btn_del')

    const plansEL = doc.querySelector('.plans-list');

    const plans = [
        {id: 1, body: 'plan 1', completed: false},
    ];

    renderPlans(plans);

    plansBtn.onclick = function(e) {
        e.preventDefault();
        console.log('btn is working')
        const text = plansInput.value.trim();
        const id = plans.length ? plans[plans.length - 1].id + 1 : 1

        if (!text) {
            plansInput.value = '';
            return;
          }

          plans.push(createPlansObj(text, id));
          console.log(plans);
          renderPlans(plans);

          plansInput.value = '';
    };

    function renderPlans(plans) {
        const plansEls = plans.map((plans, index) =>`
        <li class="todo-item" data-id="${ plans.id }">
      <span class="todo-item__index">${ index + 1 }</span>
      <label class="todo-item__input">
        <input type="checkbox" name="completed">
      </label>
      <p class="todo-item__text">${ plans.body }</p>
      <div class="todo-item__btns">
        <button class="action-btn action-btn_del">x</button>
      </div>
    </li>
        `).join('');

        plansEL.innerHTML = plansEls;
    }

    function createPlansObj(text, id) {
        const plansObj = {
          id,
          body: text,
          completed: false
        }
      
        return plansObj;
      }

      // dell func
      const deleteButtons = doc.getElementsByClassName('action-btn_del');
      for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function () {
          console.log('Button is working');
          this.closest('.todo-item').style.display = 'none';
        });
      }
    

