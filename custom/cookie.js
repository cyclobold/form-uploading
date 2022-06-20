//create new cookie
// document.cookie = "username=James"
// document.cookie="userage=12;expires=Mon 20 Jun 2022 12:55:00"
// document.cookie="userparam=1001;expires=Mon 20 Jun 2022 12:55:00"
// document.cookie="location=Lagos"
// //Read Cookie
// let cookie_info = document.cookie;
// console.log(cookie_info)
// cookie_info_box = cookie_info.split(";")

// console.log(cookie_info_box);


// const user_data = cookie_info_box.map((cookie_info_item) => {
//     cookie_info_item_box = cookie_info_item.split("=")

//     console.log(cookie_info_item_box[1])
//     let cookie_info_item_box_object = {}
// //    if(cookie_info_item_box[0] == "userage"){
// //        cookie_info_item_box_object.userage = cookie_info_item_box[1]
// //    }else{
// //     cookie_info_item_box_object.username = cookie_info_item_box[1]
// //    }

//  cookie_info_item_box_object[`${cookie_info_item_box[0]}`] = cookie_info_item_box[1]


//    return cookie_info_item_box_object;
   


// })

// console.log(user_data)





//Delete Cookie
//document.cookie="userage=;expires=Sun 19 Jun 2022 12:00:00"

Cookies.set("userage", 12);

userAge = Cookies.get("userage")
userParam = Cookies.set("username", "James");

console.log(userAge)