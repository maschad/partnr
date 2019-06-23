pragma solidity >=0.4.21 <0.6.0;

contract User {
    uint public totalSkills = 0;

    struct Skill {
        uint id;
        string name;
        uint competence;
    }

    mapping(uint => Skill) public skills;

    event SkillCreated(
        uint id,
        string name,
        uint competence
    );

    event SkillEndorsed(
        uint id,
        uint levelIncrease
    );

    event SkillDegraded(
        uint id,
        uint levelDecrease
    );

    constructor () public {
        createSkill("unverified existence");
    }

    function createSkill(string memory _name) public {
        totalSkills ++;
        skills[totalSkills] = Skill(totalSkills, _name, 0);
        emit SkillCreated(totalSkills, _name, 0);
    }

    function endorseSkill(uint _id, uint amount) public {
        Skill memory _skill = skills[_id];
        _skill.competence += amount;
        skills[_id] = _skill;
        emit SkillEndorsed(_id, amount);
    }

    function degradeSkill(uint _id, uint amount) public {
        Skill memory _skill = skills[_id];
        _skill.competence -= amount;
        skills[_id] = _skill;
        emit SkillDegraded(_id, amount);
    }
}
