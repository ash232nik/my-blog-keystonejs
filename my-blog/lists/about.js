const { Text,  Relationship } = require('@keystonejs/fields');

const aboutfields = {
    fields :{
        title :{
            type : Text,
            isRequired : true,
        },
        body:{
            type:Text ,
            isMultiline : true,
        },
       
        
    }
}
module.exports = aboutfields;