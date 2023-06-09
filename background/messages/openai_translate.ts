import type { PlasmoMessaging } from "@plasmohq/messaging";
import { Configuration, OpenAIApi } from "openai";
import fetchAdapter from "@vespaiach/axios-fetch-adapter";

const handler: PlasmoMessaging.MessageHandler<{ text: string, openaiKey: string }> = async (req, res) => {
    const configuration = new Configuration({
        apiKey: req.body.openaiKey,
    });
    const openai = new OpenAIApi(configuration);

    await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Translate to Simplified Chinese, returns the HTML tags in the original text:\n\n" + req.body.text,
        temperature: 0.7,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 1
        // @ts-ignore
    }, { adapter: fetchAdapter }).then(resp => {
        res.send({
            message: `{"data": ${JSON.stringify(resp.data.choices[0].text)}}`
        });
    }).catch(err => {
        console.log(err);
        res.send({
            message: `{"data": ${JSON.stringify("<p>Translation failed.</p>")}}`
        });
    });
};

export default handler;
