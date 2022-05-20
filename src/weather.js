const city = 'Honolulu';

async function getBackground(city){
  const searchQuery = `https://pixabay.com/api/?key=`+
    `27534551-f4bb95d2309e17da5e837a0bf&`+`q=${city}`+`&image_type=photo`+
    `&orientation=horizontal&min_width=7052`;
  const response = await fetch(searchQuery, {mode: 'cors'});
  const imgData = await response.json();
  console.log(imgData.hits[0].largeImageURL);

  const backgroundImg = document.querySelector('.background-img');
  backgroundImg.src = imgData.hits[0].largeImageURL;
}

getBackground(city);