  
const { JS_NumberFormat } = require('js-number-formatter')

export default function NumberFormat(value) {
    return JS_NumberFormat(value,{
        op_AllowDecimal : false
    })
}