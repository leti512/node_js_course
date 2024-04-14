import {emailTemplate} from "../../src/js-foundation/01-template";



test('email template should contain a greeting',() => {
    expect( emailTemplate ).toContain('Hi, ');
})

test('email template should contain {{name}} and {{orderId}}', () =>{ 
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);        
})
