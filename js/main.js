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

    let plans = [
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
        
        <li class="plans-item" data-id="${plans.id}">
      <span class="todo-item__index">${index + 1}</span>
      <label class="todo-item__input">
        <input type="checkbox" name="completed" class="" ${plan.completed ? 'checked' : ''}>
      </label>
      <p class="todo-item__text">${plan.body}</p>
      <div class="todo-item__btns">
        <button class="action-btn action-btn_del">x</button>
      </div>
    </li>
        `).join('');

        plansEL.innerHTML = plansEls;


        // for checkboxes
        const checkboxes = doc.querySelectorAll('input[type="checkbox"]')
        checkboxes.forEach((checkbox, index) => {
          checkbox.addEventListener('change', function(){
            plans[index].completed = this.checked;
            console.log(plans)
          })
        })


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


      


plans__btn1.onclick = function removeDone(){
  console.log('btn for removing objects is working')
  const filteredPlans = plans.filter((plans) => !plans.completed);
  plans.length = 0;
  plans.push(...filteredPlans)
  renderPlans(plans);
}


plans__btn2.onclick = function firstlyUndone(){console.log('btn 2 is working');


}

    
      
     

      
