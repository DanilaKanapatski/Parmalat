document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("proteinCalcForm");
    const modal = document.getElementById("proteinModal");
    const resultEl = document.getElementById("proteinResult");

    if (!form || !modal || !resultEl) return;

    const closeBtns = modal.querySelectorAll("[data-close-modal]");

    function openModal() {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    closeBtns.forEach((btn) => {
        btn.addEventListener("click", closeModal);
    });

    const requestLinks = modal.querySelectorAll('a[href="#request"]');

    requestLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            closeModal();

            const block = document.getElementById("request");
            if (block) {
                block.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });

    function initCustomSelect(selectId, inputName) {
        const customSelect = document.getElementById(selectId);
        if (!customSelect) return;

        const trigger = customSelect.querySelector(".custom-select__trigger");
        const valueText = customSelect.querySelector(".custom-select__value");
        const hiddenInput = customSelect.querySelector(`input[name="${inputName}"]`);
        const options = customSelect.querySelectorAll(".custom-select__option");

        if (!trigger || !valueText || !hiddenInput || !options.length) return;

        trigger.addEventListener("click", () => {
            document.querySelectorAll(".custom-select.is-open").forEach((item) => {
                if (item !== customSelect) item.classList.remove("is-open");
            });

            customSelect.classList.toggle("is-open");
        });

        options.forEach((option) => {
            option.addEventListener("click", () => {
                options.forEach((item) => item.classList.remove("is-selected"));
                option.classList.add("is-selected");

                valueText.textContent = option.textContent.trim();
                hiddenInput.value = option.dataset.value;

                customSelect.classList.remove("is-open");
            });
        });

        document.addEventListener("click", (e) => {
            if (!customSelect.contains(e.target)) {
                customSelect.classList.remove("is-open");
            }
        });
    }

    initCustomSelect("activitySelect", "activity");
    initCustomSelect("genderSelect", "gender");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const age = Number(form.age.value);
        const height = Number(form.height.value);
        const weight = Number(form.weight.value);
        const gender = form.gender.value;
        const activity = Number(form.activity.value);
        const agree = form.agree.checked;

        if (!age || !height || !weight || !agree) return;

        let calories = 0;

        if (gender === "female") {
            calories = (10 * weight + 6.25 * height - 5 * age - 161) * activity;
        } else {
            calories = (10 * weight + 6.25 * height - 5 * age + 5) * activity;
        }

        const protein = Math.round((calories * 0.3) / 4);

        resultEl.textContent = `${protein} ГРАММ`;
        openModal();
    });
});

const form = document.getElementById("proteinCalcForm");
const calcBtn = document.querySelector(".protein-calc__btn");

const inputs = form.querySelectorAll("input[type='number']");
const checkbox = form.querySelector("input[name='agree']");

function checkForm() {

    let filled = true;

    inputs.forEach(input => {
        if (!input.value) filled = false;
    });

    if (!checkbox.checked) filled = false;

    if (filled) {
        calcBtn.classList.add("active");
    } else {
        calcBtn.classList.remove("active");
    }
}

inputs.forEach(input => {
    input.addEventListener("input", checkForm);
});

checkbox.addEventListener("change", checkForm);

