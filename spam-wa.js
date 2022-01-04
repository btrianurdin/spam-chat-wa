var _run = null;

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function runSpam(msg, interval) {
  function spamFunction() {
    const event = new Event('input', {
      bubbles: true
    });

    let input = getElementByXpath("//*[@id=\"main\"]/footer/div[1]/div/span[2]/div/div[2]/div/div/div[2]");
    input.innerHTML = msg;
    input.dispatchEvent(event);

    getElementByXpath("//*[@id=\"main\"]/footer/div[1]/div/span[2]/div/div[2]/div[2]/button").click();
  }

  _run = setInterval(() => {
    spamFunction();
  }, interval);
}

function stopSpam() {
  if (_run !== null) {
    clearInterval(_run);
  }
}
