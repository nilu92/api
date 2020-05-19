window.onload=function(){
    let button = document.querySelector('#button');
    let name = document.querySelector('#name');
    let height = document.querySelector('#height');
    let mass = document.querySelector('#mass');
    let birthyear = document.querySelector('#birthyear');
    
    
    function getData()
    {
        name.textContent = 'loading...';
        let myRandomnumber = Math.floor((Math.random() * 4 ) + 1 );
      let baseURL = 'https://swapi.dev/api/people/1' + myRandomnumber;
       
        axios.get(baseURL).then(response => {
         
            updateInfo(response.data)
       
      }).catch(e => {
        updateInfo(data);
      })
    }
    
    function updateInfo(data)
    {
      name.textContent = data.name;
      height.textContent = 'Height: ' + data.height  + 'CM';
      mass.textContent = 'Mass: '      + data.mass + ' Kilograms';
      birthyear.textContent = 'Birthyear: ' + data.birth_year;
    
      var person = name;
      console.log(person);
    }
    
    function Error(data)
    {
        name.textContent = 'There is no data available, please try again :)';
        height.textContent = '';
        mass.textContent = '';
        birthyear.textContent = '';
    }
    
    button.addEventListener('click', getData);
  }
