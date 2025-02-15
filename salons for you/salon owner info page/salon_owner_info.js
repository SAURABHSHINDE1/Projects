const array= [
    {
        owner_name:"",
        email:"",
        phone_no:"",
        location:"",
        service1:"",
        service2:"",
        service3:"",
        service4:"",
        service5:"",
        opening_time:'',
        closing_time:""
    }

];

function add_owner_info()
{
    var owner_name = document.getElementById("name").value ;
    var email = document.getElementById("email").value ;
    var phone_no = document.getElementById("phone").value ;
    var location = document.getElementById("location").value
    var service1 = document.getElementById("service-1").value
    var service2 = document.getElementById("service-2").value
    var service3 = document.getElementById("service-3").value
    var service4 = document.getElementById("service-4").value
    var service5 = document.getElementById("service-5").value
    var opening_time = document.getElementById("opening-time").value ;
    var closing_time = document.getElementById("closing-time").value ;


  let owner_data= {
        owner_name:owner_name,
        email:email,
        phone_no:phone_no,
        location:location,
        service1:service1,
        service2:service2,
        service3:service3,
        service4:service4,
        service5:service5,
        opening_time:opening_time,
        closing_time:closing_time
    }

    array.push(owner_data);
    alert("Salon added successfully");
    consolelog(array);
}

