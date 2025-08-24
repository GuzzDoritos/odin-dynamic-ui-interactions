const DROPDOWN_BTN_CLASS = "dropdown-btn";
const DROPDOWN_MENU_CLASS = "dropdown-menu";

class Dropdown {
    constructor(buttonEl, menuEl) {
        this.buttonEl = buttonEl;
        this.menuEl = menuEl;
        this.buttonEl.addEventListener("click", () => this.toggle());
    }

    static currentOpenDropdown;

    open() {
        if (Dropdown.currentOpenDropdown) Dropdown.currentOpenDropdown.close();
        Dropdown.currentOpenDropdown = this;
        this.menuEl.classList.add("visible");
    }

    close() {
        this.menuEl.classList.remove("visible");
    }

    toggle() {
        this.menuEl.classList.contains("visible") ? this.close() : this.open();
    }
}

function createDropdowns() {
    const dropdownList = [];

    const dropdownButtonEls = document.body.querySelectorAll(`.${DROPDOWN_BTN_CLASS}`);
    const dropdownMenuEls = document.body.querySelectorAll(`.${DROPDOWN_MENU_CLASS}`);

    dropdownButtonEls.forEach(btn => {
        dropdownMenuEls.forEach(d => {
            if (d.dataset.dropdownName === btn.dataset.dropdownFor) {
                dropdownList.push(new Dropdown(btn, d));
            }
        })
    })
}

createDropdowns();

window.addEventListener("click", (e) => {
    if (!e.target.classList.contains(DROPDOWN_BTN_CLASS) && Dropdown.currentOpenDropdown) {
        Dropdown.currentOpenDropdown.close();
    }
})

window.addEventListener("keydown", e => {
    if (Dropdown.currentOpenDropdown && e.key === "Escape") {
        Dropdown.currentOpenDropdown.close();
    }
})