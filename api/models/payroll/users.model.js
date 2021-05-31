const db = require("../../db/payroll");

module.exports = class Employee {
    constructor(
        User_ID,
        User_Name,
        Password,
        Email,
        Active
    ) {
        this.User_ID = User_ID;
        this.User_Name = User_Name;
        this.Password = Password;
        this.Email = Email;
        this.Active = Active;
    }

    save() {}

    static async getNewUsersTotal() {
        try {
            const [users] = await db.query("SELECT Count(*) as total FROM users");
            const total = users[0] ? users[0].total : 0;
        } catch (error) {
            return error;
        }
    }
};