let Sweet = ["pancake.jpg", "doughnut.jpg"]
  , Sour = ["citrus.jpg", "lime.webp"]
  , Bitter = ["coffee.jpg", "chocolate.jpg"];
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
        for (let e of Bitter)
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
