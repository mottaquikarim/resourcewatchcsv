(function() {
  const buildCSV = () => Array.from(document.querySelectorAll('.visualization table tr'))
    .reduce((arr, curr, i) => arr.concat([
      Array.from(curr.querySelectorAll((i === 0) ? 'th' : 'td'))
        .map(col => col.innerHTML).join(',')
    ]), [])
    .join('\n');

  const getFileName = () => document.querySelector('.page-header-content > h1')
    .innerHTML
    .split(' ')
    .join('-')
    .concat(['.csv']);

  const dl = data => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', getFileName());

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  try {
    dl(buildCSV());
  }
  catch(e) {
    alert("Something went wrong! " + e)
  }
})();
