
// “javascript check if valid url” Code Answer’s
//  https://www.codegrepper.com/code-examples/javascript/javascript+check+if+valid+url

function checkForName(inputText) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    //  return (pattern.test(inputText))
     if(!pattern .test(inputText)) {
      alert("Please enter valid URL.");
         return false;
       } else {
         return true;
      }
  }
export { checkForName }
