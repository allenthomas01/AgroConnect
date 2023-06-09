const memberModel = require('../model/memberModel');

class memberService{
    static async registerMember(name,phone,password,district,taluk,block,kb,wardno){
        try{
            const createMember = new memberModel({name,phone,password,district,taluk,block,kb,wardno});
            return await createMember.save();
        }catch(err){
            throw err;
        }
    }
}

module.exports = memberService;