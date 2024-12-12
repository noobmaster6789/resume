import React from 'react'

type SkillBarProps = {
    skill: string;
    level: number; // Skill level as a percentage
}

const SkillBar = ({ skill, level }: SkillBarProps) => {
    return (
        <div className="space-y-2">
            <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">{skill}</span>
                <span className="text-sm font-medium text-gray-500">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
}
export default SkillBar
