document.getElementById('studentForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    console.log("Submitting data:", data); // Debugging log

    try {
        const response = await fetch('http://192.168.1.113:3000/api/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Form submitted successfully: ' + JSON.stringify(result.data));
        } else {
            const errorText = await response.text();
            console.error('Backend error:', errorText);
            alert('Failed to submit the form. Error: ' + errorText);
        }
    } catch (error) {
        console.error('Network or JavaScript error:', error);
        alert('An error occurred while submitting the form.');
    }
});




document.getElementById('parentForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries()); // Convert form data to JSON
    console.log("Submitting data:", data); // Debugging log
    

    try {
        const response = await fetch('http://192.168.1.113:3000/api/Parent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Parent details submitted successfully: ' + JSON.stringify(result.data));
        } else {
            const errorText = await response.text();
            console.error('Backend error:', errorText);
            alert('Failed to submit parent details. Error: ' + errorText);
        }
    } catch (error) {
        console.error('Network or JavaScript error:', error);
        alert('An error occurred while submitting parent details.');
    }
});





document.getElementById('courseForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries()); // Convert form data to JSON

    // Collect multiple checkbox values for mode_of_learning
    const modes = [];
    formData.getAll('mode_of_learning').forEach((mode) => {
        modes.push(mode);
    });
    data.mode_of_learning = modes;

    try {
        const response = await fetch('http://127.192.0.1:5000/api/course', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            alert('Course details submitted successfully: ' + JSON.stringify(result.data));
        } else {
            const errorText = await response.text();
            console.error('Backend error:', errorText);
            alert('Failed to submit course details. Error: ' + errorText);
        }
    } catch (error) {
        console.error('Network or JavaScript error:', error);
        alert('An error occurred while submitting course details.');
    }
});


