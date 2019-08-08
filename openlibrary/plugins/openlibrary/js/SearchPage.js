import { addModeInputsToForm, mode as searchMode } from './SearchUtils';

/** Manages some (PROBABLY VERY FEW) of the interactions on the search page */
export class SearchPage {
    /**
     * @param {HTMLFormElement|JQuery} form the .olform search form
     * @param {import('./SearchUtils').SearchModeButtons} searchModeButtons
     */
    constructor(form, searchModeButtons) {
        this.$form = $(form);
        searchMode.change(this.updateModeInputs.bind(this));
        this.$form.submit(this.updateModeInputs.bind(this));
        searchModeButtons.change(() => this.$form.submit());
    }

    /** Convenience wrapper of {@link addModeInputsToForm} */
    updateModeInputs() {
        addModeInputsToForm(this.$form, searchMode.read());
    }
}
