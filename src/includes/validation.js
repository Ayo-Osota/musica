import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from "vee-validate"
import {
    required,
    min,
    max,
    alpha_spaces as alphaSpaces,
    alpha_num as alphaNum,
    email,
    min_value as minVal,
    max_value as maxVal,
    confirmed,
    not_one_of as excluded
} from '@vee-validate/rules'

export default {
    install(app) {
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage", ErrorMessage)

        defineRule('required', required)
        defineRule('tos', required)
        defineRule('min', min)
        defineRule('max', max)
        defineRule('alpha_spaces', alphaSpaces)
        defineRule('alpha_num', alphaNum)
        defineRule('email', email)
        defineRule('min_value', minVal)
        defineRule('max_value', maxVal)
        defineRule('password_mismatch', confirmed)
        defineRule('excluded', excluded)
        defineRule('country_excluded', excluded)

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required`,
                    min: `The field ${ctx.field} is too short`,
                    max: `The field ${ctx.field} is too long`,
                    alpha_spaces: `The field ${ctx.field} may only contain alphabetic characters and spaces`,
                    email: `The field ${ctx.field} must be a valid email`,
                    min_value: `The field ${ctx.field} is too high`,
                    max_value: `The field ${ctx.field} is too low`,
                    excluded: `You are not allowed to use this value for the field ${ctx.field}`,
                    country_excluded: `We do not accept users from this location`,
                    password_mismatch: "The passwords don't match",
                    tos: 'You must accept the Terms of Service'
                };
                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} in invalid`;

                return message;
            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        })
    }
}