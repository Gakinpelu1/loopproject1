

class Toolbox {

    constructor(page) {
        this.page = page;
        //this.link = link;
        this.email = email;
        this.password = password;
        this.login_button = page..getByRole('button', { name: 'Log in', exact: true });
        this.passowrd_field = page.locator("#lui_6");
        this.continue_button = page.getByRole('button', { name: 'Continue', exact: true });
        this.email_input_field = page.locator("input");
    }

async loginMethod(link, email, password){
    await this.page.goto(this.link)
    await this.page.waitForTimeout(3000)
    await this.email_input_field.fill(email)
    await this.continue_button.click()
    await this.passowrd_field.fill(password)
    await this.login_button.click()
}



async loggingIn( email, password) {
    //navigate to page
    //await this.page.goto(this.link)
    await this.page.waitForTimeout(3000)
    //enter in email address
    await this.page.fill("input",this.email)
    //click continue
    await this.page.getByRole('button', { name: 'Continue', exact: true }).click()
    await this.page.waitForTimeout(2000)
    //enter in password
    await this.page.fill("#lui_6", this.password)
    //click Log in
    await this.page.getByRole('button', { name: 'Log in', exact: true }).click()
    }   

}

module.exports=Toolbox;