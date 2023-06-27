const doc = document;

const
    forms = doc.querySelector('.plansForm'),
    formsEls = forms.elements,
    plansInput = forms.plansInput,
    plansBtn = forms.plansBtn

    // forms.onsubmit = (e) => {
    //     e.preventDeafault();
    //     const value = e.target.value;
    //     console.log('form submit')
        
    // }

    // plansInput.oninput = (e) => {
    //     const value = e.target.value;
    //     console.log('form submit')
        
    // }

    plansInput.onchange = (e) => {
        const value = e.target.value;
        console.log('form submit')
        
    }
