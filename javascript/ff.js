function checkId() {
  var idUser = document.getElementById("idUser");
  var nick = document.getElementById("nickname");
  var button = document.getElementById("checkAccount");

  button.addEventListener("click", () => {
    console.log("ini tes button");
  });

  idUser.addEventListener("input", function () {
    var xml = new XMLHttpRequest();

    xml.onreadystatechange = function () {
      if (xml.readyState == 4 && xml.status == 200) {
        var data = JSON.parse(xml.responseText);

        nick.innerHTML = data["nickname"];
      }
    };
    xml.open(
      "GET",
      "https://api-xyz.com/trueid/freefire/?id=" + idUser.value,
      true
    );
    xml.send();
  });
}

function buttonOneClickDenom() {
  const btnAll = document.querySelectorAll(".denom");
  btnAll.forEach((actived) => {
    actived.addEventListener("click", () => {
      document.querySelector(".denomActive")?.classList.remove("denomActive");
      actived.classList.add("denomActive");
    });
  });
}

function buttonOneClickPayment() {
  const btnAll = document.querySelectorAll(".payment");
  btnAll.forEach((actived) => {
    actived.addEventListener("click", () => {
      document
        .querySelector(".paymentActive")
        ?.classList.remove("paymentActive");
      actived.classList.add("paymentActive");
    });
  });
}

function tampil1() {
  const denom = document.getElementById("denom");
  const biaya = document.getElementById("harga");
  const test1 = document.querySelectorAll(".payments");
  for (let i = 0; i < test1.length; i++) {
    denom.addEventListener(
      "click",
      () => (test1[i].textContent = biaya.innerHTML)
    );
  }
  return biaya.innerHTML;
}

function tampil2() {
  const denom = document.getElementById("denom2");
  const biaya = document.getElementById("harga2");
  const test1 = document.querySelectorAll(".payments");
  for (let i = 0; i < test1.length; i++) {
    denom.addEventListener(
      "click",
      () => (test1[i].textContent = biaya.innerHTML)
    );
  }
  return biaya.innerHTML;
}

function tampil3() {
  const denom = document.getElementById("denom3");
  const biaya = document.getElementById("harga3");
  const test1 = document.querySelectorAll(".payments");
  for (let i = 0; i < test1.length; i++) {
    denom.addEventListener(
      "click",
      () => (test1[i].textContent = biaya.innerHTML)
    );
  }
  return biaya.innerHTML;
}

function tampil4() {
  const denom = document.getElementById("denom4");
  const biaya = document.getElementById("harga4");
  const test1 = document.querySelectorAll(".payments");
  for (let i = 0; i < test1.length; i++) {
    denom.addEventListener(
      "click",
      () => (test1[i].textContent = biaya.innerHTML)
    );
  }
  return biaya.innerHTML;
}

function tampil5() {
  const denom = document.getElementById("denom5");
  const biaya = document.getElementById("harga5");
  const test1 = document.querySelectorAll(".payments");
  for (let i = 0; i < test1.length; i++) {
    denom.addEventListener(
      "click",
      () => (test1[i].textContent = biaya.innerHTML)
    );
  }
  return biaya.innerHTML;
}

function tampil6() {
  const denom = document.getElementById("denom6");
  const biaya = document.getElementById("harga6");
  const test1 = document.querySelectorAll(".payments");
  for (let i = 0; i < test1.length; i++) {
    denom.addEventListener(
      "click",
      () => (test1[i].textContent = biaya.innerHTML)
    );
  }
  return biaya.innerHTML;
}

tampil1();
tampil2();
tampil3();
tampil4();
tampil5();
tampil6();
buttonOneClickDenom();
buttonOneClickPayment();
checkId();
