

import Swal from "sweetalert2";
const ErrorAlert =(type,title,message,customIcon) =>{
        Swal.fire({
            title,
            text: message,
            icon: type,
            confirmButtonText: 'Cool'
        })
        return true;    
}

export default ErrorAlert;