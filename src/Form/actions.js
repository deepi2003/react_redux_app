export const saveUser = (name)=>{
 console.log('user saved : ', name)
    return {
      type: 'USER_SAVED',
       payload:name

    }
};