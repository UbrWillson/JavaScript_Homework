const doc = document;

const
    forms = doc.querySelector('.plansForm'),
    formsEls = forms.elements,
    plansInput = doc.querySelector('.plansInput')
    plansBtn = forms.plansBtn,
    actionBtnDel = document.getElementsByClassName('action-btn_del'),
    chbox = doc.querySelector('input[type=checkbox]');
    plans__btn1 = doc.querySelector('.plans__btn1')
    plans__btn2 = doc.querySelector('.plans__btn2')
    const plansEL = document.querySelector('.plans-list');

    const plans = [
        {id:1, body:'plan 1', completed: false},
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
        const plansEls = plans.map((plan, index) =>`
        
        <li class="plans-item" data-id="${plan.id}">
      <span class="todo-item__index">${index + 1}</span>
      <label class="todo-item__input">
        <input type="checkbox" name="completed" class="plans__input">
      </label>
      <p class="todo-item__text">${plan.body}</p>
      <div class="todo-item__btns">
        <button class="action-btn action-btn_del">x</button>
      </div>
    </li>
        `).join('');

        plansEL.innerHTML = plansEls;


        // dell func
      const deleteButtons = doc.getElementsByClassName('action-btn_del');
      for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function () {
          console.log('Button is working');
          plans.pop();
          let item = doc.querySelector('.plans-item')
          item.remove();
        });
      }
    }

    function createPlansObj(text, id) {
        const plansObj = {
          id,
          body:text,
          completed:false
        }
      
        return plansObj;
      }


      function checkCompletion(plans){
        if(plans__input.checked){
          console.log('1')
        }
      }
    
      
     

      
