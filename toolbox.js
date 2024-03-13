
exports.Toolbox =
class Toolbox {

    constructor(page) {
        this.page = page;
    }
async loggingIn( email, password) {
    //navigate to login page
    await this.page.goto("https://app.asana.com/-/login")
    //enter in email address
    await this.page.fill("input","ben+pose@workwithloop.com")
    //click continue
    await this.page.getByRole('button', { name: 'Continue', exact: true }).click()
    //enter in password
    await this.page.fill("#lui_6", "Password123")
    //click Login
    await this.page.getByRole('button', { name: 'Log in', exact: true }).click()
    }   
}




