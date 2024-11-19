$(document).ready(function () {
    $(".form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 15,
                digits: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            name: {
                required: "Please enter your username.",
                minlength: "Your username must be at least 3 characters long."
            },
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            phone: {
                required: "Please enter your phone number.",
                minlength: "Your phone number must be at least 10 digits long.",
                maxlength: "Your phone number cannot exceed 15 digits.",
                digits: "Please enter a valid phone number."
            },
            password: {
                required: "Please provide a password.",
                minlength: "Your password must be at least 6 characters long."
            },
            confirmPassword: {
                required: "Please re-enter your password.",
                equalTo: "Passwords do not match."
            }
        },
        errorElement: "span",
        errorPlacement: function (error, element) {
            error.addClass("error-message");
            error.insertAfter(element);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("error").removeClass("valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("error").addClass("valid");
        },

        submitHandler: function (form) {
            form.submit();
        }

    });


    // reset password page form validation
    $(".fform").validate({
        rules: {


            email: {
                required: true,
                email: true
            },
            password1: {
                required: true,
                minlength: 6
            },


            password2: {
                required: true,
                minlength: 6
            },

        },
        messages: {


            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },

            password1: {
                required: "Please provide a password.",
                minlength: "Your password must be at least 6 characters long."
            },

            password2: {
                required: "Please provide a password.",
                minlength: "Your password must be at least 6 characters long."
            },


        },
        errorElement: "span",
        errorPlacement: function (error, element) {
            error.addClass("error-message");
            error.insertAfter(element);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("error").removeClass("valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("error").addClass("valid");
        },

        submitHandler: function (form) {
            form.submit();
        }


    });








    // Password Hide and show
    $('.eye').click(function () {
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $('#password').attr('type', 'text');
            $('#Cpassword').attr('type', 'text');


        } else {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('#password').attr('type', 'password')
            $('#Cpassword').attr('type', 'password');

        }
    });


    // Password Hide and show
    $('.eye1').click(function () {
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $('#password').attr('type', 'text');


        } else {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('#password').attr('type', 'password')

        }
    });




});


// index jquery
$(document).ready(function () {
    const $profileBtn = $('#profileBtn');
    const $profileDropdown = $('#profileDropdown');
    const $searchBtn = $('#searchBtn');
    const $searchBar = $('#searchBar');
    const $navbar = $('.navbar');

    $profileBtn.on('click', function (event) {
        event.stopPropagation();
        $profileDropdown.toggle();
    });

    $searchBtn.on('click', function (event) {
        event.stopPropagation();
        $(this).toggleClass('active');
        $searchBar.toggleClass('active');
        $navbar.toggleClass('active');
        if ($searchBar.hasClass('active')) {
            $searchBar.focus();
        }
    });

    $(document).on('click', function (event) {
        if (!$profileBtn.is(event.target) && !$profileDropdown.is(event.target) && !$profileDropdown.has(event.target).length) {
            $profileDropdown.hide();
        }
    });
});


//  mobile dashboard
$(document).ready(function () {
    $("#toggleBtn").click(function () {
        $("#sidebar").css("right", "0");
    });

    $("#closeBtn").click(function () {
        $("#sidebar").css("right", "-250px");
    });
});




// investor profile
function showUploadOption() {
    document.getElementById("photoUpload").style.display = "block";
    document.getElementById("photoInput").click();
}

function triggerPhotoUpload() {
    document.getElementById("photoInput").click();
}

function displayPhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector(".icon").style.backgroundImage =
                url("${e.target.result}");
            document.querySelector(".icon").style.backgroundSize = "cover";
            document.querySelector(".icon").style.backgroundPosition = "center";
            document.querySelector(".icon").style.backgroundColor =
                "transparent";
            document.querySelector(".icon").textContent = "";
        };
        reader.readAsDataURL(file);
    }
}









// form validation

$(document).ready(function () {
    $('button[type="submit"]').click(function (event) {
        event.preventDefault();

        $('.error').remove();

        let isValid = true;

        // Validate Create Asset section
        if ($('#prospectus').val().trim() === '') {
            $('#prospectus').after('<span class="error">Prospectus/OM is required.</span>');
            isValid = false;
        }
        if ($('#asset-logo').val().trim() === '') {
            $('#asset-logo').after('<span class="error">Asset Logo is required.</span>');
            isValid = false;
        }
        if ($('#deal-size').val().trim() === '') {
            $('#deal-size').after('<span class="error">Total Deal Size is required.</span>');
            isValid = false;
        }
        if ($('#annual-return').val().trim() === '') {
            $('#annual-return').after('<span class="error">Expected Annual Return is required.</span>');
            isValid = false;
        }

        if ($('#property-detail').val().trim() === '') {
            $('#property-detail').after('<span class="error">Show Property Detail selection is required.</span>');
            isValid = false;
        }
        if ($('#min-investment').val().trim() === '') {
            $('#min-investment').after('<span class="error">Minimum Investment is required.</span>');
            isValid = false;
        }
        if ($('#holding-period').val().trim() === '') {
            $('#holding-period').after('<span class="error">Minimum Holding Period is required.</span>');
            isValid = false;
        }

        // Validate Overview Details section
        if ($('#assetOverview').val().trim() === '') {
            $('#assetOverview').after('<span class="error">Asset Overview is required.</span>');
            isValid = false;
        }
        if ($('#prospectusOM').val().trim() === '') {
            $('#prospectusOM').after('<span class="error">Prospectus/OM is required.</span>');
            isValid = false;
        }
        if ($('#assetLogo').val().trim() === '') {
            $('#assetLogo').after('<span class="error">Report is required.</span>');
            isValid = false;
        } if ($('#dealSize').val().trim() === '') {
            $('#dealSize').after('<span class="error">Report is required.</span>');
            isValid = false;
        } if ($('#annualReturn').val().trim() === '') {
            $('#annualReturn').after('<span class="error">Information is required.</span>');
            isValid = false;
        }
        if ($('#assetMembers').val().trim() === '') {
            $('#assetMembers').after('<span class="error">Brochure is required.</span>');
            isValid = false;
        }
        if ($('#managementDescription').val().trim() === '') {
            $('#managementDescription').after('<span class="error">Management Team Description is required.</span>');
            isValid = false;
        }
        if ($('#asset-members').val().trim() === '') {
            $('#asset-members').after('<span class="error">Brochure is required.</span>');
            isValid = false;
        }
        if ($('#status').val().trim() === '') {
            $('#status').after('<span class="error">Status is required.</span>');
            isValid = false;
        }

        // Token Deatils
        if ($('#TokenName').val().trim() === '') {
            $('#TokenName').after('<span class="error">Token Name is required.</span>');
            isValid = false;
        }
        if ($('#TokenValue').val().trim() === '') {
            $('#TokenValue').after('<span class="error">Token Value is required.</span>');
            isValid = false;
        }
        if ($('#TokenSymbol').val().trim() === '') {
            $('#TokenSymbol').after('<span class="error">Token Symbol is required.</span>');
            isValid = false;
        }
        if ($('#TokenSupply').val().trim() === '') {
            $('#TokenSupply').after('<span class="error">Token Supply is required.</span>');
            isValid = false;
        }
        //  Management Details
        if ($('#manegmentProspectus').val().trim() === '') {
            $('#manegmentProspectus').after('<span class="error">OM is required.</span>');
            isValid = false;
        }
        if ($('#manegmentLogo').val().trim() === '') {
            $('#manegmentLogo').after('<span class="error">Asset Logo is required.</span>');
            isValid = false;
        }
        if ($('#manegmentDealSize').val().trim() === '') {
            $('#manegmentDealSize').after('<span class="error">Total deal size is required.</span>');
            isValid = false;
        }
        if ($('#ManagemenAnnualReturn').val().trim() === '') {
            $('#ManagemenAnnualReturn').after('<span class="error">Annual return is required.</span>');
            isValid = false;
        }




        if (!isValid) {
            return false;
        }
        alert('Form is valid. Proceed with form submission.');
    });
});
