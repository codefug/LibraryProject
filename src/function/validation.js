function makeValid(element) {
  element.classList.remove("formInvalid");
  element.classList.add("formValid");
}
function makeInvalid(element) {
  element.classList.remove("formValid");
  element.classList.add("formInvalid");
}
function isRequired(element) {
  if (element.validity.valueMissing) {
    element.setCustomValidity("꼭 필요한 정보입니다.");
    makeInvalid(element);
  } else {
    makeValid(element);
    element.setCustomValidity("");
  }
}
function isoutofrange(element) {
  if (element.validity.rangeOverflow) {
    makeInvalid(element);
    element.setCustomValidity("더 작아야 합니다.");
  } else if (element.validity.rangeUnderflow) {
    makeInvalid(element);
    element.setCustomValidity("더 커야 합니다.");
  } else {
    makeValid(element);
    element.setCustomValidity("");
  }
}
export { isRequired, isoutofrange };
