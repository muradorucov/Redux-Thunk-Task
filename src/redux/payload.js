export const payload=(status,payload)=>{
    switch(status){
        case"error":
        return {data:null,status,error:payload}
        default:
            return { data: payload, status, error: null };
        }
    }
