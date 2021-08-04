function pageReload() {
    return window.location.reload(true);

}
$('#check').click(function(){
  if($(this).is(":checked")){
    $(".fa-arrow-left").show(function(){
      $(".fa-arrow-left").fadeIn(2000);
    });
    $(".fa-bars").hide(function(){
      $(".fa-bars").fadeOut(0);
    });
  }
  else{
    $(".fa-arrow-left").hide(function(){
      $(".fa-arrow-left").fadeOut(0);
    });
    $(".fa-bars").show(function(){
      $(".fa-bars").fadeIn(2000);
    });
  }
});

let input = document.getElementById('Input');
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function searchResult() {
    alert("Hi Guys this is My First Project........");
    let User_name = prompt("Please Give Your Name");
    console.log(User_name);
}

function contactDetails() {
	let datasFromUser=[];
    let userName = document.getElementById('inputDataBox1').value;
	let userEmail = document.getElementById('inputDataBox2').value;
	let queries = document.getElementById('inputDataBox3').value;
	datasFromUser.push(userName);
    datasFromUser.push(userEmail);
	datasFromUser.push(queries);
	return console.log(datasFromUser);
}
function onceFormSubmited(){if(submitted){
    window.location.href='contact.html';
    alert("ThankYou For Your Submission...It Means A Lot...");
}
            
            
}


document.querySelector('#copyright-year').innerText = new Date().getFullYear();


