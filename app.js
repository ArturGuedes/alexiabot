'use strict';
const alexia = require('alexia');
const app = alexia.createApp();

//<audio src="<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_intro_01"/>"/>

app.onStart(() => {
    return {
        text: `<speak>
                    <audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_intro_01"/>
                    <p>Fala aí meu jovem!</p>
                    <p>Bem vindo ao cantando com alexa!</p>
                    <p>Está preparado?<break time="1s"/></p>
                    <p>Vamos lá!</p>
                    <p>Diga uma música</p>
                    <amazon:effect name="whispered">Aquela que combinamos, tá?</amazon:effect><break time="1s"/>
                </speak>`,
        card: {
            title: 'Bem vindo',
            content: 'Bora cantar? 👨‍🎤 🎉'
        },
        ssml: true,
        end: false
    };
});


app.intent('unihack', 'unihack', () => {
    return {text:'Oi pessoal, desculpe minha falta de educação. Não sabia que tinha mais gente aqui',end:false};
});

app.intent('HelloIntent', 'Hello', () => {
    return {text:'Entendi nada ra ra ra',end:false};
});

app.intent('vai','vai', ()=>{
    return {
        text: "Tchau galera, beijos",
        end:true
    };
});


// app.builtInIntent('cancel', 'Cancel it', () => 'Cancel it is');
// app.builtInIntent('help', ['Help me please', 'Could you help me'], () => 'I shall help you');
// app.builtInIntent('next', () => 'Your next item in basket is: Amazon Echo Device');
// app.builtInIntent('no', () => 'No');
// app.builtInIntent('pause', () => 'Pause');
// app.builtInIntent('previous', () => 'Previous');
// app.builtInIntent('repeat', () => 'Repeat');
// app.builtInIntent('resume', () => 'Resume');
// app.builtInIntent('startOver', () => 'Start Over');
// app.builtInIntent('stop', () => 'Stop');
// app.builtInIntent('yes', () => 'Yes');


//module.exports = app;
app.createServer().start();


// const options = {
//     path: '/', // defaults to: '/'
//     port: 8888 // defaults to: process.env.PORT or 8888
// };
// const server = app.createServer(options);
