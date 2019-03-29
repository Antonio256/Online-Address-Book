$(document).ready(function() {
    $("#add-address").click(function() {
      $("#new-addresses").append('<div class="new-address address">' +
                                   '<div class="form-group">' +
                                       '<label for="new-street">Street</label>' +
                                       '<input type="text" class="form-control new-street">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                       '<label for="new-city">City</label>' +
                                       '<input type="text" class="form-control new-city">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                       '<label for="new-state">State</label>' +
                                       '<input type="text" class="form-control new-state">' +
                                   '</div>' +
                                 '</div>');
    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedPhoneNumber = $("input#phon-number").val();
        var inputtedEmail = $("input#email").val();

        var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName,phoneNumber: inputtedPhoneNumber, email: inputtedEmail, addresses:  [] };

        $(".address").each(function() {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedState = $(this).find("input.new-state").val();

            var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
            newContact.addresses.push(newAddress);
        });

        $("ul#contacts").append("<li><span class='contact'>" +
                                newContact.firstName +
                                "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input#phon-number").val("");
        $("input#email").val("");
        $("input.new-street").val("");
        $("input.new-city").val("");
        $("input.new-state").val("");


        $(".new-address").remove();

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $(".phon-number").text(newContact.phoneNumber);
            $(".email").text(newContact.email);

        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
            $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
            });
        });
    });
});
