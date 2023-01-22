


            // family :  "House Targaryen"
            // firstName : "Daenerys"
            // fullName : "Daenerys Targaryen"
            // id : 0
            // image : "daenerys.jpg"
            // imageUrl : "https://thronesapi.com/assets/images/daenerys.jpg"
            // lastName : "Targaryen"
            // title : "Mother of Dragons"
               
    



const gameOfThrones = fetch('https://thronesapi.com/api/v2/Characters');
gameOfThrones.then((data)=>data.json()).then((data1)=>{

    console.log(data1);
    

     let option = document.getElementById("browsers");
     let btn = document.getElementById("button");
     btn.addEventListener("click",()=>{
     
        let input = document.getElementById("browser").value;
        let display = document.getElementById("card");
            
        

      for (let i = 0; i < data1.length; i++) {
          if(input===data1[i].fullName){
                // console.log(data1[i].fullName);
                display.innerHTML = `
                <div class="opacity-75" >
                <div class="shadow-lg p-3 mb-5 bg-body rounded" id="design-card">
                <div class="card"  style="width: 18rem;">
                <img src="${data1[i].imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Family_Name :  ${data1[i].family}.</p>
                  <p class="card-text">Full_Name : ${data1[i].fullName}.</p>
                  <p class="card-text">Image_icon : ${data1[i].image}.</p>
                  <p class="card-text">Title of Show : ${data1[i].title}.</p>
                </div> 
                </div>
                </div>
              
                
                `;
          }
        
      }
            
        
      
     });

    data1.forEach(element => {
    //   console.log( element.fullName) ;
      option.innerHTML+=`
      <option value="${element.fullName}"></option>
      `
    });

    
   
   

});

