import oneAiService from "../services/oneAiServices/oneAiService.js";

export default class emailInsightController {
    constructor(req, res) {
        this.req = req
        this.res = res
    }

    async showInghts(){
        const text =  `Hi George,

        Thought you might enjoy a quick video to learn how ACME CORP works.
        
        ACME CORP requires no commitments and no minimum spend. Feel free to make a free account and explore the calibration capabilities, maybe you can launch a batch in the morning and check the results at lunchtime!
        
        Happy to extend up to $10k in labeling credits on us to help get you started.
        
        Interested in a walk-through from one of our NLP experts?
        
        Jeff.`;

        const result = await new oneAiService().emailInsight(text) 

        this.res.send(result)
    }
}