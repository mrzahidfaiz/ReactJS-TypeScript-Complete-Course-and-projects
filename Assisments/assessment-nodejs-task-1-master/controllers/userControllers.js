

const importUser = async ()=> {
    try {
        res.send({status:200, success: true, msg: "success"})
    }catch (error){
        res.send({status:400, success: false, msg: error.message})

    }
}