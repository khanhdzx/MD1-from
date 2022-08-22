let from = document.getElementById("from");
// console.log(from);
// //lấy giá trị của ô input thông qua name
// console.log(from.email.value) ;
// console.log(from.password.value);

let email = "vip@gmail.com"
let password = "123456";

//sumit event
from.onsubmit= function(event){
    console.log("Hello world");
    event.preventDefault();
    // //logic

    // console.log("hello world")
    if(from.email.value == ""){
        document.getElementById("email-vip").innerHTML="Không Được để trống";
    }
    if(from.password.value == ""){
        document.getElementById("pass-vip").innerHTML="Không Được để trống";
    }else{
        document.getElementById("vip8").innerHTML="ĐĂNG NHẬP THÀNH CÔNG"
    }
};



//Exercise:
// tiến hành validate from 
//khi người dùng không nhập vào email ---> hiển thị trên Dom một dòng text đỏ
//"Email không được bỏ trống"
// khi người dùng không nhập vào password ---> hiển thị trên Dom một dòng text đỏ
//"password không được bỏ trống"

//khi người dùng nhập vào email và password đầy đủ , tiến hành kiểm tra 
//với biến email và biến password đặt sẵn trong file JS
//nếu sai password ---> hiển thị ra text đỏ trong Dom"sai password"
// let email = "khanhvannguyen2303@gmail.com"
// let password = "123456789";
//Nếu đúng cả 2 ---> Clear hết text đỏ và hiển thị text xanh ---> Đăng nhập thành công






















































