const mongoose = require('mongoose')

mongoose.connect = ("mongodb+srv://clem93150:<Clem301295!>@cluster0.yjdanop.mongodb.net/?retryWrites=true&w=majority",
                    { useNewUrlParser : true, useUnifiedTopology : true},
                    (err) => {
                        if (!err)console.log("Connecté à MongoDB");
                        else console.log("Erreur de connexion " + err);
                    }
                    )