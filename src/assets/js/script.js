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