$(function () {
    $(".button").on('click', function () {

        var randomStartSentences = ["Hey, you know that your", "Ups, your", "Ha-Ha, look at you, your", "You know what? Your"];
        var randomStartSentenc = randomStartSentences[Math.floor(Math.random() * randomStartSentences.length)]
        var randomBodyParts = ["nose", "eyes", "ears", "body", "hand", "legs", "balls", "finger", "head"];
        var randomAjectives = ["red", "stinky", "stupid", "tiny"];
        var randomWords = ["gorilla's", "bull's", "chicken's", "deer's", "horse's", "Mickey's Mouse"];
        var randomBodyAnimals = ["ass", "tail", " nose", "horn"];
        var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
        var randomAjective = randomAjectives[Math.floor(Math.random() * randomAjectives.length)];
        var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
        var randomBodyAnimalPart = randomBodyAnimals[Math.floor(Math.random() * randomBodyAnimals.length)];
        var randomText = randomStartSentenc + " " + randomAjective + " " + randomBodyPart + " " + "like" + " " + randomWord + " " + randomBodyAnimalPart + "!";
        $(".field-text").text(randomText);
        var lampLength = document.getElementsByClassName("lamp").length;
        var lamp = document.getElementsByClassName("lamp")[Math.floor(Math.random() * lampLength)];
        $(".lamp").removeClass("active")
        $(lamp).addClass("active");
        if ($(".lamp").hasClass("active"))
            for (let i = 0; i < 5; i++) {
                $(lamp).fadeOut(500).fadeIn(1000);
            }
    })

    $(function () {
        $(".lamp").on('click', function () {
            var textInField = document.getElementsByClassName("field-text")["textContent"]; //
            $(".field-text-dublicate").children().remove()
            $(".field-text").clone().appendTo(".field-text-dublicate");
            let newTextMane = $(".field-text-dublicate_green").text();
            $(".mane").text(newTextMane);
        })
    })
});

