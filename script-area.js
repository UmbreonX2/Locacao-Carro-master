function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}

function handleClickOutsideDropdown(event) {
  var dropdownContent = document.getElementById("dropdownContent");
  if (!event.target.closest(".dropdown") && dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  }
}

document.addEventListener("click", handleClickOutsideDropdown);