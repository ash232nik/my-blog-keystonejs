const { Text, Select , Relationship } = require('@keystonejs/fields');

const postfields = {
    fields :{
        title :{
            type : Text,
            isRequired : true,
        },
        body:{
            type:Text ,
            isMultiline : true,
        },
        status:{
            type :Select,
            options :[
                {value:'PUBLISHED' , label :'Published'},
                {value:'UNPUBLISHED' , label :'UnPublished'},
            ]
        },
        
    }
}
module.exports = postfields;