const {studentacademic , course} = require('../models');

module.exports = {
    async getResults(req, res) {
        try {
            const {code} = req.params.code;
            const results = await studentacademic.findAll({
                where: {
                    Course_Code: code,
                    Reg_Number: '2019/E/099'
                },
            });
            res.status(200).json(
                Massage = "Success",
            )
        }
        catch (error) {
            res.status(500).json(error);
        }
    }

}

