const Jsx=()=>{
    const ad="Merve ";
    const User ={
        adi:"Merve",
        soyadi:"kpln",
        email:"m@gmail.com",
        tel:"6666666"
    }


    return( <div>
        <div>
            Merhaba {ad}
        </div>
        <div>
        Merhaba {User.adi + " " +User.soyadi} {User.tel}
        </div>
        
        </div>
);
};

export default Jsx;