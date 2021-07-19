document.addEventListener('DOMContentLoaded', () => {
  let links = document.querySelectorAll('.tabs-shifters__item');
  let tabs = document.querySelectorAll('.tabs-content__item');

  for(let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const linkId = e.target.getAttribute('href').replace('#', '');
      links.forEach((item) => {
        item.classList.remove('tabs-shifters__item_active')
      });
      tabs.forEach((item) => {
        item.classList.remove('tabs-content__item_active')
      });
      link.classList.add('tabs-shifters__item_active');
      document.getElementById(linkId).classList.add('tabs-content__item_active');
    })
  }
  document.querySelector('.tabs-shifters__item').click();
})
