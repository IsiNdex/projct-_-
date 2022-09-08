function select_actr(){
  let actr = document.getElementById('selectt').value
  console.log(actr)
  let img = document.getElementById('img')

  img.src = "img/"+actr+".jpg"
}