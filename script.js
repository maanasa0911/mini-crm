// Load leads on page load
window.onload = function () {
  let leads = JSON.parse(localStorage.getItem("leads")) || [];
  displayLeads(leads);
};

// Add lead
function addLead() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return;
  }

  let leads = JSON.parse(localStorage.getItem("leads")) || [];

  leads.push({ name, email });

  localStorage.setItem("leads", JSON.stringify(leads));

  displayLeads(leads);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

// Display leads
function displayLeads(leads) {
  let list = document.getElementById("leadList");
  list.innerHTML = "";

  leads.forEach((lead, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${lead.name} - ${lead.email}
      <button onclick="deleteLead(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

// Delete lead
function deleteLead(index) {
  let leads = JSON.parse(localStorage.getItem("leads")) || [];

  leads.splice(index, 1);

  localStorage.setItem("leads", JSON.stringify(leads));

  displayLeads(leads);
}

// Search leads
function searchLeads() {
  let input = document.getElementById("search").value.toLowerCase();
  let leads = JSON.parse(localStorage.getItem("leads")) || [];

  let filtered = leads.filter(lead =>
    lead.name.toLowerCase().includes(input) ||
    lead.email.toLowerCase().includes(input)
  );

  displayLeads(filtered);
}