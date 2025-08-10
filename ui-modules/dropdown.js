
/**
* Class representing a Dropdown object.
* 
* @class 
*/
class Dropdown {
    /**
     * 
     * @param {HTMLElement} menuId The HTML id of the div that contains the dropdown menu
     */
    constructor(menuId = document.getElementById('#dropdown-menu-1')) {
        this.menuId = menuId
    }

    /**
     * Toggle the dropdown menu visibility.
     */
    toggleVisibility() {
        this.menuId.classList.toggle("visible")
    }
}
