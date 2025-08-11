(() => {
    /**
    * Class representing a Dropdown object.
    * 
    * @class 
    */
    class Dropdown {
        /**
         * 
         * @param {HTMLElement} menu The HTML selector for the div that contains the dropdown menu
         */
        constructor(menu) {
            this.menuEl = menu
        }
        /**
         * Toggle the dropdown menu visibility.
         */
        toggleVisibility() {
            this.menuEl.classList.toggle("visible")
        }
    }
})();