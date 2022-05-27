// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const users = [{
        id : 1,
        name : "Monica",
        gender : "Female",
        age : 17,
        email : "monica@dingdong.com",
        favoriteColor : ["Yellow", "Pink", "White", "Purple"],
        isHavePet : true,
        education : [{
            id : 1,
            schoolName : "SD 01",
            city : "Jakarta",
            graduate : 2016,
        },
        {
            id : 2,
            schoolName : "SMP 02",
            city : "Jakarta",
            graduate : 2019,
        },
        {
            id : 3,
            schoolName : "SMA 03",
            city : "Tangerang",
        }
    ],
        favoriteRestaurant : ["Bento", "Sushi", "Pancake", "eggy", "tempura","Padang", "Tteok"]    
}, {
        id : 2,
        name : "Wendy",
        gender : "Male",
        age: 23,
        email : "wendy@dingdong.com",
        favoriteColor : ["Blue", "Black", "Grey"],
        isHavePet : false,
        education : [{
            id : 1,
            schoolName : "SD 02",
            city : "Jakarta",
            graduate : 2010,
        },
        {
            id : 2,
            schoolName : "SMP 03",
            city : "Bogor",
            graduate : 2013,
        },
        {
            id : 3,
            schoolName : "SMA 01",
            city : "Surabaya",
            graduate : 2016,
        },
        {
            id : 4,
            schoolName : "Universitas Maju",
            city : "Tangerang",
        }],
        favoriteRestaurant : ["Tempura", "Bento", "Sushi", "Pancake", "Padang","Katsu", "Geprek", "Eggy"]
}];

// TODO: Masukkan hasil akhir dari kedua user di sini
const user = [users];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(user.length || user.size);
    console.log(user);
}

main();

module.exports = {
    users
};