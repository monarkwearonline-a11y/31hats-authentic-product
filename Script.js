let count = localStorage.getItem("scanCount1");

if (!count) {
  count = 0;
}

count++;
localStorage.setItem("scanCount31", count);

document.getElementById("count").textContent = count;
