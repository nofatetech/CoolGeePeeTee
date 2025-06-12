// Function to inject HTML content into the main document using jQuery
function injectHTMLView() {
    // Path to the HTML file to be injected
    const htmlFilePath = chrome.runtime.getURL('views/xdiv.html');

    // Use jQuery to fetch the HTML content
    $.get(htmlFilePath, function(htmlContent) {
        // Create a container div for the injected content
        const $container = $('<div></div>').html(htmlContent);

        // Append the container to the body or a specific element
        $('body').append($container);

        // Optionally, initialize any scripts or interactions here
        // For example, if the injected HTML includes scripts that need to run
        // you might need to manually execute them or ensure they are scoped correctly
    }).fail(function() {
        console.error('Error loading HTML view');
    });
}

// Call the function to inject the HTML view
injectHTMLView();
