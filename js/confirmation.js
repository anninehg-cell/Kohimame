//Funksjonen er relatert til overlayet//

const overlayBtn = document.querySelector("#overlay-btn");
const overlay = document.querySelector(".overlay-content");

overlayBtn.onclick = showOverlay;
function showOverlay() {
  document.querySelector(".overlay-content").style.display = "block";
}
overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});

const group = document.getElementById("group");

const groupInfo = [
  { name: "Vetle", email: "vet.haf820@gokstadakademiet.no" },
  { name: "Annine", email: "ann.gun819@gokstadakademiet.no" },
  { name: "Frida", email: "frida.enoksen@gokstadakademiet.no" },
  { name: "Sofie", email: "sof.bro166@gokstadakademiet.no" },
];

for (let i = 0; i < groupInfo.length; i++) {
  group.innerHTML += `
    <div class="member">
      <p><strong>${groupInfo[i].name}</strong><br>${groupInfo[i].email}</p>
      <button class="contact-btn">Kontakt meg</button>

      <div class="contact-form" style="display: none">
        <input type="text" placeholder="Skriv din melding..." class="message-input">
        <button class="send-btn">Send</button>
      </div>
    </div>`;
}

const contactButtons = document.querySelectorAll(".contact-btn");

contactButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const form = btn.nextElementSibling;
    form.style.display = "block";
  });
});

const sendButtons = document.querySelectorAll(".send-btn");

sendButtons.forEach(function (sendBtn) {
  sendBtn.addEventListener("click", function () {
    alert("Meldingen din er sendt!");
    sendBtn.parentElement.style.display = "none";
  });
});

const bean = document.querySelector(".bean-container");
let beanCount = 1;

bean.addEventListener("click", function () {
  if (beanCount <= 5) {
    const newBean = document.createElement("img");
    newBean.src = "/Assets/bønne.png";
    bean.appendChild(newBean);
    beanCount++;
  } else {
    alert(
      "Okey da var det nok bønner, vi trenger resten til å lage kaffe med!"
    );
  }
});
