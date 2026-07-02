/*function hello(){

   alert("hi");
}*/

var siteName = document.getElementById("siteNameInput1");
var siteUrl = document.getElementById("siteUrlInput2");
var addBtn = document.getElementById("addBtn");
var nameAlert = document.getElementById("nameAlert");
var urlAlert = document.getElementById("urlAlert");


var allProducts = [] ;
allProducts = JSON.parse(localStorage.getItem("allProducts")) || [] ;
displayProducts(allProducts);

addBtn.addEventListener("click", addProducts);

function addProducts(){
  if (!isValid()){
   return;

  }
//object
var product = {
name: siteName.value ,
url: siteUrl.value,
};
 // js library to make Alert gamed her name is swal
Swal.fire({
    title: "Done!",
    text: "Bookmark added successfully!",
    icon: "success",
    timer: 4000,
    showConfirmButton: false
  });

allProducts.push(product);

clearInputs();

  displayProducts(allProducts);

  localStorage.setItem("allProducts", JSON.stringify(allProducts));

}

function clearInputs() {
  siteName.value = "";
  siteUrl.value = "";
}

function displayProducts(array){
   var cartona = ""
   for(var i =0 ; i<array.length ;i++){
     
      cartona += `
      <tr>
      <th scope="row">${i + 1}</th>
      <td>${array[i].name}</td>
      <td><a href="${array[i].url}" target="_blank" class="btn btn-success visitBtn btn-sm"><i class="fa-solid fa-eye"></i> Visit</a></td>
      <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i> Delete</button></td>
    </tr>  `;

   }
   document.getElementById("rowData").innerHTML = cartona;
}

function deleteProduct(index){

   allProducts.splice(index,1);
   displayProducts(allProducts);
   localStorage.setItem("allProducts", JSON.stringify(allProducts));
}

function validate(regex,inputValue,alert,input){
  if(regex.test(inputValue)){
    alert.classList.add("d-none");
    input.classList.replace("is-invalid","is-valid");
    return true;
  }else{
    alert.classList.remove("d-none");
    input.classList.add("is-invalid");
    return false;
  }
} 


function isValid(){
  var nameValid=validate(/^[a-zA-Z0-9 ]{3,20}$/, siteName.value,nameAlert,siteName);

  var urlValid=validate(/^(https?:\/\/)(www\.)?[a-zA-Z0-9\-]+\.[a-z]{2,}(\/\S*)?$/
,siteUrl.value,urlAlert,siteUrl);
  if(nameValid && urlValid)
    {
      console.log("Valid");   
      return true;
  }else{
    
    Swal.fire({
      title: "Invalid Input!",
      text: "Please make sure the Name and URL are correct.",
      icon: "error",
      confirmButtonText: "OK"
    });

    console.log("Invalid");
    return false;
  }
}











/*أول حاجة بفكر فيها...   the methodology to applay crud operations
أنا هخزن البيانات فين؟
أكيد في Array.
var allProducts = [];
ليه؟
لأن المستخدم ممكن يضيف Google وبعدها Facebook وبعدها YouTube.
يبقى لازم مكان يشيل أكتر من عنصر.
طيب لو قفل الموقع؟
الـ Array هتتمسح.
يبقى أفكر:
"أنا عايز البيانات تفضل موجودة."
الحل؟
localStorage
عدها على طول
displayProducts(allProducts);
ليه؟
أنا لسه فتحت الصفحة.
لو فيه بيانات قديمة
اعرضها.
وده أول تفكير.
بعد كده
المستخدم ضغط
Add
يبقى أول Function لازم أفكر فيها
addProducts()
مش delete.
ليه؟

لأن لسه معنديش حاجة أمسحها أصلاً 
بعدها
var product = {
اسألي نفسك
أنا عندي كام Input؟
اتنين.
يبقى الـ Object يبقى
{
name:"",
url:""
}
بعدها

allProducts.push(product);
ليه؟
لأن أنا لسه عملت Object.
فين أحطه؟
في الـ 
Array.



---------------------------------------
دي من مكتبة اسمها SweetAlert2، وهي بتستخدم بدل alert() العادي بتاع JavaScript عشان تطلع رسائل شكلها أجمل.

أولًا السطر ده:

Swal.fire({
Swal = اسم المكتبة.
.fire() = دالة (Function) مسؤولة عن عرض الـ Popup.
واللي بين { } اسمه Object، وهو اللي بيحدد شكل الرسالة ومحتواها.


--------------------------------
يبقى لازم قبل ما أضيف الـ 
Bookmark أسأل:
"هل البيانات كلها صح؟"
وده دور isValid().
أول سطر
var nameValid = validate(
    /^[a-zA-Z0-9 ]{3,20}$/,
    siteName.value,
    nameAlert,
    siteName
);

خلينا نفكها.

إنتِ عندك Function اسمها:

validate(regex, inputValue, alert, input)

يعني هي محتاجة 4 حاجات.

1- الـ Regex
/^[a-zA-Z0-9 ]{3,20}$/

القانون بتاع اسم الموقع.

2- القيمة
siteName.value
يعني
هاتلي اللي المستخدم كتبه.
مثلاً:
Google

3- الـ Alert
nameAlert
لو الاسم غلط
اظهر الرسالة دي.


4- الـ Input نفسه
siteName
علشان الـ validate تعمل:
input.classList.add("is-valid");
أو
input.classList.add("is-invalid");


*/
