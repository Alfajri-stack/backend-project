exports.getUser = (req,res,next) => {
    res.status(200).json({
        users: [{
            id:1,
            nama :"Muhammad Alfajri",
            address : "jl.pajajaran 1 no.4, kecamatan cisaat,kelurahan sukamantri, RT/RW:004/009"
        }]
    })
}

exports.createUser = (req,res,next) => {

    const name = req.body.name;
    const alamat = req.body.alamat;

    res.status(201).json({
        message : 'User has been succesfully created',
        user: {
            id: new Date().toString(),
            name : name,
            address: alamat
        }
    })
}