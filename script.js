function generatePortfolio() {

    // Get user input
    const name = document.getElementById("name").value.trim();
    const intro = document.getElementById("intro").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const projects = document.getElementById("projects").value.trim();
    const email = document.getElementById("email").value.trim();


    // Check required fields
    if (name === "" || intro === "") {
        alert("Please enter your Name and Introduction.");
        return;
    }


    // Add Name
    document.getElementById("navName").innerText = name;

    document.getElementById("portfolioName").innerText = name;

    document.getElementById("footerName").innerText = name;


    // Add Introduction
    document.getElementById("heroIntro").innerText = intro;

    document.getElementById("aboutText").innerText = intro;


    // Add Skills
    const skillsContainer =
        document.getElementById("skillsContainer");

    skillsContainer.innerHTML = "";

    if (skills !== "") {

        const skillList = skills.split(",");

        skillList.forEach(function(skill) {

            const skillElement =
                document.createElement("div");

            skillElement.className = "skill";

            skillElement.innerText = skill.trim();

            skillsContainer.appendChild(skillElement);

        });

    }


    // Add Projects
    if (projects !== "") {

        document.getElementById("projectsText")
            .innerText = projects;

    } else {

        document.getElementById("projectsText")
            .innerText = "No projects added yet.";

    }


    // Add Email
    if (email !== "") {

        document.getElementById("emailLink")
            .href = "mailto:" + email;

    } else {

        document.getElementById("emailLink")
            .href = "#";

    }


    // Hide Builder
    document.getElementById("builder")
        .style.display = "none";


    // Show Portfolio
    document.getElementById("portfolio")
        .style.display = "block";


    // Go to top
    window.scrollTo(0, 0);

}
