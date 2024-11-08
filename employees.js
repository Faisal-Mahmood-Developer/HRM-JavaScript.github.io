
let user_name = document.getElementById('user_name');
let user_image = document.getElementById('user_image');
let user_about = document.getElementById('user_about');
let user_linkedin = document.getElementById('user_linkedin');

let our_data = [
    { emp_id: "1", name: "Ali Bajwa", user_image: "ali_bajwa.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "2", name: "Abdul Rehman", user_image: "abdul_Rehman.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "3", name: "Ali Raza", user_image: "farhan_ramzan.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "4", name: "Faisal Mahmood", user_image: "faisal_My.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "5", name: "Farhan Ramzan", user_image: "farhan_ramzan.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "6", name: "Maryam Saeed", user_image: ".jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "7", name: "Haseeb Ahmad", user_image: "haseeb_Ahmad.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "8", name: "Rabia Asif", user_image: ".pg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "9", name: "Hasan Baig", user_image: "hasan_Baig.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "10", name: "Sayed Musawir", user_image: "my_musawir.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "11", name: "Ali Huzaifa", user_image: ".jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "12", name: "Usman Butt", user_image: "usman_1.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "13", name: "MBA", user_image: "m_Ba.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "14", name: "Ammara Ibraheem", user_image: ".jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "15", name: "Zuhair Sajid", user_image: "zuhair_1.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "16", name: "Waleed Hassan", user_image: "waleed_2.png", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" },
    { emp_id: "17", name: "Umer Raza", user_image: "umer_1.jpg", user_about: "Accomplished Technology Leader with more than 17 years of experience in leading the architecture of complex and industry-leading technology solutions.", user_linkedin: "https://www.linkedin.com/in/aliusmanbajwa/" }
];

let emp_info = [];

our_data.forEach(user_data =>{

    let all_modals = document.getElementById('allmodals');

    
    const node = document.createElement("div");

    node.setAttribute("id","myModal"+user_data.emp_id);
    node.setAttribute("class","modal");


    node.innerHTML = `
            <div class="modal-dialog modal-xl">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Employees Information</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <table class="table table-bordered " id="myTable">
                            <thead class="bg-warning">
                                <tr>
                                    <th>Name</th>
                                    <th> Designation</th>
                                    <th>Basic Salary</th>
                                    <th>Contact Number</th>
                                </tr>
                            </thead>
                            <tbody id="table_data">

                            </tbody>
                        </table>
                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#myPersonal">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;

            all_modals.appendChild(node);

    

})

function myFunction() {

    let inputname = document.getElementById('task').value;

    our_data.forEach(user_data => {
        text = "";

        if (user_data.emp_id == inputname) {
            user_name.innerHTML = user_data.name;
            user_image.src = './images/' + user_data.user_image;
            user_about.innerHTML = user_data.user_about;
            user_linkedin.value = user_data.user_linkedin;


          



            more_info.setAttribute("data-bs-target","#myModal"+user_data.emp_id);

            

            // myModal.style.display = "block"

        } else {

text = "The value is rong"
// myModal.style.display = "none"
        }

    })

};











function taskFunction(e) {
    const table_data = document.getElementById('table_data');
    const firstInput = document.getElementById('one_INput').value;
    const two_INput = document.getElementById('two_INput').value;
    const three_INput = document.getElementById('three_INput').value;
    const four_INput = document.getElementById('four_INput').value;


    emp_info.push({
        name: firstInput,
        Designation : two_INput,
      Basic_Salary : three_INput,
       contact : four_INput
    });



    table_data.innerHTML = table_data.innerHTML + `<tr>
                                                        <td>${firstInput}</td>
                                                        <td>${two_INput}</td>
                                                        <td>${three_INput}</td>
                                                        <td>${four_INput}</td>
                                                    
                                                    </tr>`;
    e.preventDefault();

};
function load_emp_data(){

}










var index = 0;
// function changeColors(){


    setInterval(myTime, 300);
    function myTime(){
    
        
     
            var colors = ["red", "blue", "orange", "yellow", "green", "purple", "pink", "black", "Brown", "Azure",
             "aqua", "brown", "chartreuse", "chocolate", "crimson", "cyan", "darkblue", "darkorange", "deeppink", "yellow", 
             "dimgray", "greenyellow", "khaki", "lawngreen", "magenta", "orangered", "powderblue", "	red", "	magenta",
              "seagreen", "navajowhite", "	mediumturquoise", "greenyellow", "powderblue", ""
             , "green", "	orchid", "mediumpurple", "orangered", "darkblue", "navajowhite", "orchid", "orchid", "dimgray", "	mediumturquoise", "lime", "mediumpurple", "red", "powderblue", "orangered",
              "darkblue", "darkorange", "deeppink", "yellow", "", "magenta", "powderblue", "greenyellow", "khaki"
            ,"red", "blue", "orange", "yellow", "green", "purple", "pink", "black", "Brown", "Azure",
            "aqua", "brown", "chartreuse", "chocolate", "crimson", "cyan", "darkblue", "darkorange", "deeppink", "yellow", 
            "dimgray", "greenyellow", "khaki", "lawngreen", "magenta", "orangered", "powderblue", "	red", "	magenta",
             "seagreen", "navajowhite", "	mediumturquoise", "greenyellow", "powderblue", ""
            , "green", "	orchid", "mediumpurple", "orangered", "darkblue", "navajowhite", "orchid", "orchid", "dimgray", "	mediumturquoise", "lime", "mediumpurple", "red", "powderblue", "orangered",
             "darkblue", "darkorange", "deeppink", "yellow", "", "magenta", "powderblue", "greenyellow", "khaki"];
          
         document.getElementById("colors").style.color = colors[index++];
            if( index > colors.length );
            index += 0;
        
        
    }
    
// }