// ✅ Load data from localStorage
let leads = JSON.parse(localStorage.getItem("leads")) || [];

// ✅ Add Lead
function addLead() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Validation
    if (name === "" || email === "") {
        alert("Please enter all details");
        return;
    }

    // Email check
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter valid email");
        return;
    }

    // Duplicate check
    if (leads.some(l => l.email === email)) {
        alert("Lead already exists");
        return;
    }

    // Add to array
    leads.push({ name, email });

    // Save to localStorage
    localStorage.setItem("leads", JSON.stringify(leads));

    // Update UI
    displayLeads();

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

// ✅ Display Leads
function displayLeads() {
    let list = document.getElementById("leadList");
    list.innerHTML = "";

    leads.forEach((lead, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${lead.name} - ${lead.email} 
        <button onclick="deleteLead(${index})">Delete</button>`;
        list.appendChild(li);
    });
}

// ✅ Delete Lead
function deleteLead(index) {
    leads.splice(index, 1);
    localStorage.setItem("leads", JSON.stringify(leads));
    displayLeads();
}

// ✅ IMPORTANT: Page load lo data chupinchadam kosam
displayLeads();