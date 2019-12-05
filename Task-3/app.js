// data center
const data = [
  {
    title: 'Cops Investigate Murder of Dutch Model Who Died After Threesome With Bitcoin Tyc' +
        'oon & His Wife',
    source: 'Sputniknews',
    content: 'Previously, a coroner ruled that there was no foul play in the model’s death, de' +
        'spite admitting the possibility of a struggle due to the presence of the million' +
        'aire’s DNA under her nails and the trauma on the back of her head.'
  }, {
    title: 'What the Fed Reserve’s Balance Sheet Expansion Means for Bitcoin',
    source: 'Coindesk',
    content: 'The U.S. Federal Reserve is again expanding its balance sheet – prominent expert' +
        's believe that could bode well for bitcoin in the long run.'
  }, {
    title: 'Legendary Bitcoin contributor Hal Finney’s Twitter profile is safe — for now',
    source: 'The Next Web',
    content: 'Bitcoin fans can rest easy as Twitter has backpedalled on its plans to purge ina' +
        'ctive accounts until it can figure out how to memorialize them. We’ve heard you ' +
        'on the impact that this would have on the accounts of the deceased. This was a m' +
        'iss on our part.'
  }, {
    title: 'NARRATIVE MANAGERS FACEPLANT IN HILARIOUS OPCW SCANDAL SPIN JOB',
    source: 'Coindesk',
    content: 'Syria has been the target of what may be the most sophisticated propaganda campa' +
        'ign in history, and Bellingcat has been consistently rallying behind even the mo' +
        'st transparently ridiculous tools of this campaign.'
  }, {
    title: 'EToro: Facebook Should Drop Libra and Support Third-Party Stablecoins',
    source: 'Sputniknews',
    content: 'Facebook needs to change strategy and focus on the Calibra wallet — not Libra — ' +
        'to assure success, say eToro’s blockchain researchers'
  }, {
    title: 'Bitcoin Cash Could Go Up 1000x, Roger Ver Says',
    source: 'Coindesk',
    content: 'Former Bitcoin.com CEO, Roger Ver, was shilling Bitcoin Cash on CNBC’s Power Lun' +
        'ch yesterday. During the interview, Ver maintained his position that BCH “is the' +
        ' real Bitcoin”, and suggested that it could go up in price by 1000 times the cur' +
        'rent value.'
  }
]

// Invoke the elements from HTML
const keyword_input = document.getElementById("keyword");
const source_input = document.getElementById("source");
const articles_box = document.getElementById("articles");
//======================================================= 

//show data in page
function show_data(data) {
  data.map((data) => {
    articles_box.innerHTML += `
        <div class="item col-xs-12">
            <h4>${data.title}</h4><hr/>
            <span><b>source:</b> ${data.source}</span>
            <p>${data.content}</p>
        </div>
        `
  })
}
show_data(data) // at the start, show all data
//===========================================

//action keywoed input
keyword_input.addEventListener("input", () => {
  let query = keyword_input.value
  let results = data.filter((data) => {
    return (data.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
            data.content.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  })
  articles_box.innerHTML = '' // clean articles box first, then show the new results
  show_data(results)
})
// =============================================================================

// action source input
source_input.addEventListener("input", () => {
  let query = source_input.value
  let results = data.filter((data) => {
    return (data.source.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  })
  articles_box.innerHTML = ''
  show_data(results)
})
//===============================================================================