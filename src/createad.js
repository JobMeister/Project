var x = Number(localStorage.getItem("num_of_ads"));

var adCount;
if (x == null || adCount == 0) adCount = 0;
else adCount = x;
$("#adSend").click(function () {
  AdSuccess(adCount);
  adCount++;
});

let adtemp = adCount;
function AdSuccess(adCount) {
  //   let inputAdHead = document.getElementById("adhead").value;
  //   let inputAdInfo = document.getElementById("adinfo").value;
  //   let inputAdReqiure = document.getElementById("adreqiure").value;
  //   let inputAdLocation = document.getElementById("adlocation").value;
  //   let inputAdMainOcc = document.getElementById("admainocc").value;
  //   let inputAdScope = document.getElementById("adscope").value;
  localStorage.setItem("ad header" + adCount, $("#adhead").val());
  localStorage.setItem("ad info" + adCount, $("#adinfo").val());
  localStorage.setItem("ad reqiure" + adCount, $("#adreqiure").val());
  localStorage.setItem("ad location" + adCount, $("#adlocation").val());
  localStorage.setItem("ad mainocc" + adCount, $("#admainocc").val());
  localStorage.setItem("ad scope" + adCount, $("#adscope").val());
  localStorage.setItem("num_of_ads", adCount + 1);
  alert("המודעה נשלחה לאישור המנהל בהצלחה!");
  window.location = "employeer.html";
  return adCount;
}

module.exports = AdSuccess;
