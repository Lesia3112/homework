const registration = (event)=>{
  // щоб запустилася форма(відміна стандартної поведінки форми при Сабміті)
  event.preventDefault();
//  витягнути саму форму.
  const form = new FormData(event.target);
  const firstName=(form.get('firstName'));
  if (firstName){
    document.getElementById('js-form-registration-first-name').classList.remove('error');

  } else{
    document.getElementById('js-form-registration-first-name').classList.add('error');
  }

  const lastName=(form.get('lastName'));
  if(lastName){
    document.getElementById('js-form-registration-last-name').classList.remove('error');

  }else{
    document.getElementById('js-form-registration-last-name').classList.add('error');
  }

  console.log(firstName+' '+lastName);



}

export{registration};   