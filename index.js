// const baseURL = 'https://picsum.photos/v2/list';
let listItem = document.querySelector('img')
const galleryGrid = document.getElementById("gallery")



const baseURL = 'https://picsum.photos/v2/list';
fetch(baseURL) 
  .then(function(result) {
    return result.json()})
  .then(json => displayResults(json))


function displayResults(luke) {
  //console.log(luke)
  //console.log('this should print last');
  var imageGrid = '<div>'
  for(let i=0; i<luke.length;i++){
    if (i%3 == 2){
        imageGrid += `<div class=“col-sm-4”><div class="card"><img src="` + luke[i].download_url +`" class="card-img-top" alt="#"><div class="card-body"><h5 class="card-title">`+ luke[i].author +`</h5><p class="card-text"><i>I haven't learned how to make lookups or joins in arrays, yet.</i></p></div><ul class="list-group list-group-flush"><li class="list-group-item">Width (px): `+ luke[i].width +`</li><li class="list-group-item">Height (px): `+ luke[i].height +`</li></ul><div class="card-body"><a href="`+ luke[i].url +`" class="card-link" target=_blank">Download Image</a></div></div></div></div>`
    }else if (i%3 == 3) {
        imageGrid += `<div class="row"><div class=“col-sm-4><div class="card"><img src="` + luke[i].download_url +`" class="card-img-top" alt="#"><div class="card-body"><h5 class="card-title">`+ luke[i].author +`</h5><p class="card-text"><i>I haven't learned how to make lookups or joins in arrays, yet.</i></p></div><ul class="list-group list-group-flush"><li class="list-group-item">Width (px): `+ luke[i].width +`</li><li class="list-group-item">Height (px): `+ luke[i].height +`</li></ul><div class="card-body"><a href="`+ luke[i].url +`" class="card-link" target=_blank">Download Image</a></div></div></div>`
    }else{
        imageGrid += `<div class=“col-sm-4”><div class="card"><img src="` + luke[i].download_url +`" class="card-img-top" alt="#"><div class="card-body"><h5 class="card-title">`+ luke[i].author +`</h5><p class="card-text"><i>I haven't learned how to make lookups or joins in arrays, yet.</i></p></div><ul class="list-group list-group-flush"><li class="list-group-item">Width (px): `+ luke[i].width +`</li><li class="list-group-item">Height (px): `+ luke[i].height +`</li></ul><div class="card-body"><a href="`+ luke[i].url +`" class="card-link" target=_blank">Download Image</a></div></div></div>`
    }

  };
  imageGrid += '</div>'
  galleryGrid.innerHTML = imageGrid;
    //let image1 = luke[0].download_url;
    //let image2 = luke[1].download_url;
    //let img = new Image();
    //img.src = image1
    //rickMortyPeople.appendChild(img);
    //let img2 = new Image();
    //img2.src = image2
    //rickMortyPeople.appendChild(img2);

//   });
}