
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContent = document.getElementById("resume-content") as HTMLDivElement;
const resumePreview = document.getElementById("resume-preview") as HTMLDivElement;


form.addEventListener("submit", (event: SubmitEvent): void => {
  event.preventDefault();

  
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const work = (document.getElementById("work") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  
  const resumeHTML = `
    <div class="glowing-box" id="resume-name">
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
    </div>
    <div class="glowing-box" id="resume-education">
      <h3>Education</h3>
      <p>${education}</p>
    </div>
    <div class="glowing-box" id="resume-work">
      <h3>Work Experience</h3>
      <p>${work}</p>
    </div>
    <div class="glowing-box" id="resume-skills">
      <h3>Skills</h3>
      <p>${skills}</p>
    </div>
  `;

  
  resumeContent.innerHTML = resumeHTML;
  resumePreview.style.display = "block"; 

  
  document.querySelectorAll('.glowing-box').forEach((box) => {
    box.addEventListener('click', function() {
      const p = this.querySelector('p');
      if (p) {
        p.contentEditable = "true";
        p.focus();
        p.addEventListener('blur', function() {
          p.contentEditable = "false";
        });
      }
    });
  });
});