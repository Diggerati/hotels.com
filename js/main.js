window.onscroll = function() {scrollFunction()};


      
    var navigationBar = document.getElementById("navigationBar");

    function scrollFunction() {
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navigationBar.style.backgroundColor = "white";
            navigationBar.style.boxShadow = "1px 1px 8px -1px rgba(0,0,0,0.75)";

          } else {
            navigationBar.style.backgroundColor = "transparent";
              navigationBar.style.boxShadow = "none";
          }
}
        var emptyName = document.getElementById("nameEmpty").value;
        var senderName = document.getElementsByName("senderName").value;
        var senderMail = document.getElementsByName("senderMail");
        document.getElementById("sendBtn").addEventListener("click", function(){
            if(senderName.value = ""){
                emptyName.style.visibility = "block";
            }
           alert("senderName");
        });
        