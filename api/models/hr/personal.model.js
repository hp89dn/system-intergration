const db = require("../../db/hr");

module.exports = class Personal {
    constructor(
        First_Name,
        Last_Name,
        Middle_Initial
    ) {
        this.First_Name = First_Name;
        this.Last_Name = Last_Name;
        this.Middle_Initial = Middle_Initial;
    }

    save() {}

    static async getPerson() {
        try {
            console.log("Fetch ");
            db.then(pool => pool.query(`SELECT * FROM Personal`)).then(personal => {
                console.log(personal);
            });

        } catch (error) {

        }
    }
};