//  DOM Element References
var $body = document.getElementsByTagName('body')[0];
var $button = document.getElementsByTagName('button')[0];
var $openIcon = document.getElementsByClassName('open')[0];
var $closeIcon = document.getElementsByClassName('close')[0];
var $logo = document.getElementsByClassName('logo')[0];
var $contact = document.getElementsByClassName('contact')[0];

//  Contact Information Button Switch
var contactInfoVisible = false;

//  Sets Button Icons
function iconSetter() {
  if (contactInfoVisible) {
    $button.disabled = true;
    $closeIcon.classList.remove('icon-fade-in');
    $closeIcon.classList.add('icon-fade-out');
    contentSetter();
    setTimeout(function(){
      $openIcon.classList.remove('icon-fade-out');
      $openIcon.classList.add('icon-fade-in');
      $button.disabled = false;
    }, 250);

    contactInfoVisible = false;

  } else {
    $button.disabled = true;
    $openIcon.classList.remove('icon-fade-in');
    $openIcon.classList.add('icon-fade-out');
    contentSetter();
    setTimeout(function(){
      $closeIcon.classList.remove('invisible');
      $closeIcon.classList.remove('icon-fade-out');
      $closeIcon.classList.add('icon-fade-in');
      $button.disabled = false;
    }, 250);

    contactInfoVisible = true;

  }
}

//  Sets Page Content
function contentSetter() {
  if (contactInfoVisible) {
    $contact.classList.remove('content-load-in');
    $contact.classList.add('content-load-out');
    $contact.classList.add('deactivate');
    setTimeout(function(){
      $logo.classList.remove('content-fade-out');
      $logo.classList.add('content-fade-in');
    }, 550);

  } else {
    $logo.classList.remove('delay');
    $logo.classList.remove('content-load-in');
    $logo.classList.add('content-fade-out');
    setTimeout(function(){
      $contact.classList.remove('invisible');
      $contact.classList.remove('deactivate');
      $contact.classList.remove('content-load-out');
      $contact.classList.add('content-load-in');
    }, 550);
  }

}

$button.addEventListener('click', function(){
  iconSetter();
});
