window.onload = function() {

    const  Btn = document.querySelector('button');
    const  name = document.querySelector('#text	');
    const httpReq= new XMLHttpRequest();
  
  
    
    Btn.addEventListener('click', function(event) {
       event.preventDefault();
       const searchResult = document.querySelector('input');
       const searchText = document.querySelector('input').value;
       stored = searchText.trim();
       console.log(stored)
  
      // GET Request
      const  url = `superheroes.php?query=${stored}`;
      httpReq.onreadystatechange = callback;
      httpReq.open('GET', url);
      httpReq.send();
    });
  
    function callback() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) {
          const res = httpReq.responseText;
          name.innerHTML=res;
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
  
  }