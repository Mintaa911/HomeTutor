const enrolled = document.getElementById("enrolled-list");

document.addEventListener("DOMContentLoaded",()=>{
  display_enrolled();
});

function openLink(e,id){
    let tab_content,tab_link;

    tab_content = document.querySelectorAll(".tab-content");
    tab_content.forEach(element => {
        element.style.display = "none";
    });
    
    tab_link = document.querySelectorAll(".tab-links");
    tab_link.forEach(element => {
        element.className = element.className.replace("active ","");
    });

    e.currentTarget.className += " active "
    document.getElementById(id).style.display = "block"
    
}


// enrolled student section
let enrolled_list = [
  {
      fName:"abebe",
      lName:"kebede",
      sex:"M",
      level:"12",
      gardian:"almaz"
  },
  {
      fName:"abebe",
      lName:"kebede",
      sex:"M",
      level:"12",
      gardian:"almaz"
  },
  {
      fName:"abebe",
      lName:"kebede",
      sex:"M",
      level:"12",
      gardian:"almaz"
  },
  {
      fName:"abebe",
      lName:"kebede",
      sex:"M",
      level:"12",
      gardian:"almaz"
  }
];
function display_enrolled(){
  let i = 0
  enrolled_list.forEach(element => {
      const output = `
            <a>
              <ul class="list-inline row list-item mt-0 ">
                
                <li class="col-1">
                    <input class="input-group" type="checkbox" onclick="onSelect(event)" value="" name="list" />
                </li>
                <li class="col-1 ">${i++}</li>
                <li class="col-2 ">${element.fName} ${element.lName}</li>
                <li class="col-2 ">${element.sex}</li>
                <li  class="col-2 ">${element.level}</li>
                <li class="col-2 ">${element.gardian}</li>
                <li class="col-2 ">Enrolled</li>
              </ul>
            </a>`;
        
      enrolled.innerHTML += output;
  });

}

//checkbox
const selectAllBox = document.querySelectorAll(".select-all");

selectAllBox[1].onclick = function() {
  
    let checkboxes = document.getElementsByName('list')
    if (selectAllBox[1].checked) {
        for (let index = 0; index < checkboxes.length; index++) {
        
            checkboxes[index].checked = true;
            checkboxes[index].parentElement.parentElement.style.background = "#0a1d57";
            checkboxes[index].parentElement.parentElement.style.color ="#fff";
        }
    } else {
        for (let index = 0; index < checkboxes.length; index++) {
            checkboxes[index].checked = false;
            checkboxes[index].parentElement.parentElement.style.background = "";
            checkboxes[index].parentElement.parentElement.style.color ="#000";
        }
    }

}

function onSelect(event) {
    if (event.target.checked) {
        event.target.parentElement.parentElement.style.background = "#0a1d57"
        event.target.parentElement.parentElement.style.color ="#fff";
    } else {
        event.target.parentElement.parentElement.style.background = ""
        event.target.parentElement.parentElement.style.color ="#000";
    }

}

