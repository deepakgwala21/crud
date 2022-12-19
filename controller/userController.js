const userModel = require('../model/userModel.js')

module.exports = {

    create: async (req, res) => {
        try {
            const { name, rollno, age } = req.body;
            const user = new userModel({ name, rollno, age })
            
            
            await user.save()
            res.json({
                message: "data is create successfuuly",
                data: user
            })
        } catch (err) {
            res.json({
                message: "failed",
                data: user
            })
        }

    },
    getdata: async (req, res) => {
        try {
            const data = await userModel.find({})
            res.json({
                message: "data is find successfuuly",
                data: data
            })

        } catch (err) {
            res.json({
                message: "failed"

            })

        }

    },
    delete: async (req, res) => {
        try {
            console.log(req.query.id)
            const data = await userModel.findOneAndDelete({ _id: req.query.id })
            res.json({
                message: "data is deleted successfuuly",
                data: data
            })
        }
        catch (err) {
            res.json({
                message: "failed"
            })
        }
    },

    update: async (req, res) => {
        try {
            // console.log(req.query.name);
            const data = await userModel.findByIdAndUpdate({ _id: req.query.id },
                {
                    $set: {
                        name: req.body.name,
                        rollno: req.body.rollno,
                        age: req.body.age
                    }
                })
            res.json({
                message: "update data successfully",
                data: data

            })
        } catch (arr) {
            res.json({
                message: "failed"
            })
        }
    }
}