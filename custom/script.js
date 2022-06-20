const uploadLabel = document.querySelector("label[for='upload_picture']");
const uploadLabelInput = document.querySelector("#upload_picture");
uploadLabel.addEventListener("click", function(){
    this.style.transform="scale(.9)"
})

uploadLabelInput.addEventListener("input", function(){
        
    const image_file = this.files.item(0);
    //console.log(image_file)

    //console.log(image_file)
    
    if(image_file.size >= 10000000){
        //we wont proceed
    }

    const allowed_types = ['image/jpeg', 'image/png', 'image/gif']

    const image_type = image_file.type;

    if(allowed_types.includes(image_type)){
        //proceed
       let image_file_reader = new FileReader();

       image_file_reader.readAsDataURL(image_file);

       image_file_reader.onload = function(){

            image_loaded = this.result;
            
            document.querySelector("#image-info").innerHTML = `<img src='${image_loaded}'>`
          

       }


    }else{
        //wrong image format
    
    }





})

