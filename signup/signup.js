let form = document.querySelector("form");
function showInfo() {
    event.preventDefault();
    let obj = {
        name: form.name.value,
        email: form.email.value,
        organisation: form.organisation.value
    }
    alert(obj.name+" "+"Welcome to masai school")
}
form.addEventListener("submit", showInfo);