const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzXJ0-NhyreHTq21FgPiOzVSDodIg5Q-GkgP-06qwCwY0IRXZpp8OMUohjtop6siwTcEQ/exec";

console.log("Sending data to Google Sheet:", SCRIPT_URL);

let pledgeData = []

document.addEventListener("DOMContentLoaded", async () => {

    try {
        const response = await fetch(SCRIPT_URL, {
            method: "GET",
            headers: { "Content-Type": "text/plain" }
        })

        const result = await response.json()

        console.log("Google Sheet data:", result)

        pledgeData = result

        renderTable()
        renderKPIs()
    }
    catch (err) {
        console.error("Error updating sheet:", err)
    }
});

function scrollToForm() {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}
window.scrollToForm = scrollToForm;

const renderKPIs = () => {
    document.getElementById("achieved").innerText = pledgeData?.length;
    document.getElementById("students").innerText = pledgeData.filter((p) => p.profile == 'Student')?.length;
    document.getElementById("professionals").innerText = pledgeData.filter((p) => p.profile == 'Professional')?.length;
}

const renderTable = () => {

    const table = document.getElementById("pledgeTable");

    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }

    pledgeData.map((p, ind) => {
        const row = table.insertRow(-1);
        row.insertCell(0).innerText = ind + 1;
        row.insertCell(1).innerText = p.name;
        row.insertCell(2).innerText = p.timestamp.slice(0, 10) || p.date.slice(0, 10);
        row.insertCell(3).innerText = p.state;
        row.insertCell(4).innerText = p.profile;
        row.insertCell(5).innerText = p.stars;
    });
}

document.getElementById("pledgeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value || 'sai';
    const profile = document.getElementById("profile").value || 'Student';
    const state = document.getElementById("state").value || 'AP';
    const mobile = document.getElementById("mobile").value || '9564456321';
    const email = document.getElementById("email").value || 'w@gmail.com';
    let commitments = Array.from(document.querySelectorAll("#pledgeForm input[type=checkbox]:checked")).map(c => c.value);


    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const pledge = {
        name,
        email,
        mobile,
        state,
        profile,
        commitments
    };

    console.log(pledge);

    document.getElementById("certificate").style.display = "block";
    document.getElementById("cert-name").innerText = name;
    document.getElementById("cert-stars").innerText = "⭐".repeat(commitments.length);

    (async () => {
        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(pledge),
                headers: { "Content-Type": "text/plain" }
            })

            const result = await response.json()

            console.log("Form submitted!");
            console.log("Google Sheet updated:", result)

            console.log(result.newRow);

            pledgeData.push(result.newRow)

            renderTable([result.newRow])
            renderKPIs()
        }
        catch (err) {
            console.error("Error updating sheet:", err)
        }
    })();
});