// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  topicsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Agent 与 Skill 实战',
      collapsed: false,
      items: [
        'agent-skills/why-skill',
        'agent-skills/douyin-copy-extract',
        'agent-skills/teacher-workflow-agent',
      ],
    },
    {
      type: 'category',
      label: 'AI + 中小学教育',
      collapsed: false,
      items: [
        'ai-education/math-learning-analytics',
        'ai-education/writing-and-reading',
      ],
    },
  ],
};

export default sidebars;
