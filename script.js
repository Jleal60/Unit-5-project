let Sweet = ["https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg ", "https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg "]
  , Sour = ["https://whsat-imagehosting.glitch.me/uploaded/85d559bc3cceb05efd043c92a6346115.jpg", "https://whsat-imagehosting.glitch.me/uploaded/ee850ff3ec8319e958dd8d14e89720ec.jpg "]
  , Bitter = ["https://whsat-imagehosting.glitch.me/uploaded/c89d8e2e912042e43c278c7eff24435f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/d0ee69b99156627ee05c4d91d91b7178.jpg"];
$(".submit-button").click(function() {
    let e = $(".get-suggestions").val();
    if ($(".breakfast").empty(),
    "Sweet" === e)
        for (let e of Sweet)
            $(".breakfast").append("<img src=" + e + ">");
    else if ("Sour" === e)
        for (let e of Sour)
            $(".breakfast").append("<img src=" + e + ">");
    else if ("Bitter" === e)
        for (let e of action)
            $(".breakfast").append("<img src=" + e + ">")
}),
$(".suggestion-button").click(function() {
    let e = $(".give-suggestions").val();
    $(".breakfast").text("Thanks for suggesting a meal! Go check the console and see if it was added!"),
    Sweet.push(e),
    Sour.push(e),
    console.log(Sweet),
    console.log(Sour)
});
