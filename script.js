
let impri = '';

fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=boolean')
.then(response => response.json())
 .then( data => printArray(data.results))    




 function printArray(array){

  array.forEach((ques, numeroDePregunta) =>{



    const contenido = document.getElementById('contenido');

   


    let html =`
    <div class="d-flex flex-wrap ">
    <div class="card" style="margin-top: 10px">
        <div class="card-header">
        <div class="d-flex mb-2 justify-content-center">
       ${ques.category}
       </div>
       <div class="d-flex mb-2 justify-content-center">
       ${ques.difficulty}
       </div>
       <div class="d-flex mb-2 justify-content-center">
       ${ques.type}
       </div>
    ${ques.question}

       
        </div>
        <div class="card-body">

        <div class="form-check">
        <input class="form-check-input" type="radio" name="${numeroDePregunta}" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          ${ques.incorrect_answers}
        </label>
      </div>

      
      <div class="form-check">
      <input class="form-check-input" type="radio" name="${numeroDePregunta}" id="flexRadioDefault2">
      <label class="form-check-label" for="flexRadioDefault2">
        ${ques.correct_answer}
      </label>
    </div>
      
        </div>
    
    </div>
    </div>
    
    `
    contenido.innerHTML += html;

    

    
  })

  

 }










