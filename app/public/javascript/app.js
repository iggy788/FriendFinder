var config = {
    '.chosen-select': {},
    '.chosen-select-deselect': {
        allow_single_deselect: true,
    },
    '.chosen-select-no-single': {
        disable_search_threshold: 10,
    },
    '.chosen-select-no-results': {
        no_results_text: 'Oops, nothing found!',
    },
    '.chosen-select-width': {
        width: '95%',
    },
};

for (var selector in config) {
    $(selector).chosen(config[selector]);
}

$('#submit').on('click', function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
        var isValid = true;
        $('.form-control').each(function() {
            if ($(this).val() === '') {
                isValid = false;
            }
        });

        $('.chosen-select').each(function() {
            if ($(this).val() === '') {
                isValid = false;
            }
        });
        return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {

        var userData = {
            name: $('#name').val(),
            photo: $('#photo').val(),
            scores: [
                $('#q1').val(),
                $('#q2').val(),
                $('#q3').val(),
                $('#q4').val(),
                $('#q5').val(),
                $('#q6').val(),
                $('#q7').val(),
                $('#q8').val(),
                $('#q9').val(),
                $('#q10').val(),
            ],
        };
        $.post('/api/friends', userData, function(data) {
            console.log('response = ' + JSON.stringify(data));
            console.log('name = ' + JSON.stringify(data[0].name));
            console.log('photo = ' + JSON.stringify(data[0].photo));

            $('#match-name').text(data[0].name);
            $('#match-img').attr('src', data[0].photo);

            // Show the modal with the best match
            $('#results-modal').modal('toggle');

        });
    } else {
        alert('Please fill out all fields before submitting!');
    }
    // Clear the form when submitting
    $('.form-control').val('');
    jQuery.fn.chosen_reset = function(n) {
        $(this).chosen('destroy');
        $(this).prop('selectedIndex', 0);
        $(this).chosen(n)
    }
    $('select').chosen_reset({ width: '155px' });
});