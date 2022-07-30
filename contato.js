(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('ovTry-EU8Tsrcojcx');
})();
// script sendmail
function sendMail(params){
    var tempParams ={
        from_name:document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('service_8x60t8j', 'template_h224f5w', tempParams)
    .then(function(res){
        console.log("email enviado, res.status");
    })
}