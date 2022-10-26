
const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
	eyeIcon.addEventListener("click", () => {
	let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
	let pw2Fields = eyeIcon.parentElement.parentElement.querySelectorAll(".password2");

		pwFields.forEach(password => {
			if(password.type === "password"){
				password.type = "text";
				eyeIcon.classList.replace("bx-hide", "bx-show");
				return;
			}
			password.type = "password";
			eyeIcon.classList.replace("bx-show", "bx-hide");
		})

		pw2Fields.forEach(password2 => {
			if(password2.type === "password"){
				password2.type = "text";
				eyeIcon.classList.replace("bx-hide", "bx-show");
				return;
			}
			password2.type = "password";
			eyeIcon.classList.replace("bx-show", "bx-hide");
		})
	})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //si hay error no avanza
 forms.classList.toggle("show-signup");
})
})

											
export {forms, pwShowHide, links}