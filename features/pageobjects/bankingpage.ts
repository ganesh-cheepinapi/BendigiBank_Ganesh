import Page from './page';
import chai from 'chai';
import { ReporterOptions } from "@wdio/cucumber-framework/build/types";

class HomePage extends Page{
    constructor()
    {
        super()
    }

    // Page Objects
    get bankinglink()
    {
        return $('//button[@name="banking"]')
    }

    async clickBankingBtn()
    {
        try{
            await this.click(await this.bankinglink)
            await browser.pause(5000);
        }
        catch(error)
        {
            error.message='Not able to click Bank Link, ${error.message}'
            throw error
        }
    }
}
export default new HomePage()