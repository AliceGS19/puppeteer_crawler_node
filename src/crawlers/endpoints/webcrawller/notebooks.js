const openBrowserPage = require('../../openBrowserPage');

async function notebooksCrawler(brand = 'Lenovo') {
  const { page, browser } = await openBrowserPage()
  await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops')
  
  const notebooksSelector = '.thumbnail'
  await page.waitForSelector(notebooksSelector)

  const notebooks = await page.evaluate(notebooksSelector => {
    return [...document.querySelectorAll(notebooksSelector)].map(thumbnail => {
      const thumbnailChilds = thumbnail.children
      
      const captionChilds = thumbnailChilds[1].children
      const price = Number(captionChilds[0].textContent.split('$')[1])
      const name = captionChilds[1].children[0].title
      const brand = captionChilds[1].children[0].title.split(' ')[0]
      const description = captionChilds[2].innerHTML

      const ratingChilds = thumbnailChilds[2].children
      const reviewsQuantity = Number(ratingChilds[0].innerHTML.split(' ')[0])
      const ratingStars = Object.keys(ratingChilds[1].children).length

      return {
        price,
        name,
        brand,
        description,
        reviews_quantity: reviewsQuantity,
        rating_stars: ratingStars
      }
    })
  }, notebooksSelector)
  await browser.close()
  const filteredNotebooks = notebooks.filter((notebook) => notebook.brand === brand)
  const orderedNotebooks = filteredNotebooks.sort((notebookA, notebookB) => {
    notebookA.price <= notebookB.price ? 0 : 1
  })
  console.log(orderedNotebooks)
  return filteredNotebooks
}

module.exports = notebooksCrawler