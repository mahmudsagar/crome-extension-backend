import {OneAI} from "oneai"
const oneai = new OneAI("76fcd157-574a-4d39-8861-5df6bf262633");

export default class oneAiService {

    async emailInsight(text){
        const pipeline = new oneai.Pipeline(
            oneai.skills.emailInsights()
        );
        const result = await pipeline.run(text);
        console.log(result);
        return result.emailInsights
    }
}