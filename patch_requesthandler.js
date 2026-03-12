const fs = require('fs');
let content = fs.readFileSync('src/rest/RequestHandler.ts', 'utf8');

content = content.replace(/options\.rejectOnRateLimit\.some/g, "(options.rejectOnRateLimit as any[]).some");
content = content.replace(/\+ this\.manager\.client\.options\.restTimeOffset/g, "+ (this.manager.client.options.restTimeOffset as number)");

content = content.replace(/this\.manager\.client\.options\.invalidRequestWarningInterval > 0/g, "(this.manager.client.options.invalidRequestWarningInterval as number) > 0");
content = content.replace(/% this\.manager\.client\.options\.invalidRequestWarningInterval/g, "% (this.manager.client.options.invalidRequestWarningInterval as number)");

content = content.replace(/request\.retries < this\.manager\.client\.options\.captchaRetryLimit/g, "request.retries < (this.manager.client.options.captchaRetryLimit as number)");

content = content.replace(/data\.captcha_key\.join/g, "(data.captcha_key as any[]).join");

content = content.replace(/return this\.execute\(request, captcha, data\.captcha_rqtoken\);/g, "return this.execute(request, captcha as string, data.captcha_rqtoken as string);");

content = content.replace(/this\.manager\.client\.authenticator/g, "(this.manager.client as any).authenticator");

fs.writeFileSync('src/rest/RequestHandler.ts', content);
