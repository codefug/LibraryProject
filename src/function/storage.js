function getItemFromStorage(storageName) {
  return JSON.parse(localStorage.getItem(storageName)) == null
    ? []
    : JSON.parse(localStorage.getItem(storageName));
}
function addItemToStorage(storageName, item) {
  const list = getItemFromStorage(storageName);
  list.push(item);
  localStorage.setItem(storageName, JSON.stringify(list));
}
function removeItemFromStorage(storageName, item) {
  const list = getItemFromStorage(storageName);
  list.splice(list.indexOf(item),1);
  localStorage.setItem(storageName, JSON.stringify(list));
}
function editPropertyFromStorage(storageName, item, property) {
  const list = getItemFromStorage(storageName);
  const updatedlist = list.map((value) => {
    if (value.title === item.title) {
      return { ...value, [property]: !value[property] };
    }
    return value;
  });
  localStorage.setItem(storageName, JSON.stringify(updatedlist));
}
export { addItemToStorage, removeItemFromStorage, editPropertyFromStorage, getItemFromStorage };
