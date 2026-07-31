export const siteConfig = {
  name: 'Jialin Zhang',
  title: 'Creative Strategist',
  tagline: {
    cn: '创意思维 / 策略 / 内容 / Vibe Coding',
    en: 'Creative Thinking / Strategy / Content / Vibecoding'
  },
  contact: {
    phone: '+86 17600010227',
    email: 'Jzhang0227@126.com',
    location: '北京',
    locationEn: 'Beijing'
  }
};

export const navItems = [
  { id: 'about', label: { cn: '关于', en: 'About' } },
  { id: 'works', label: { cn: '作品', en: 'Works' } },
  { id: 'methodology', label: { cn: 'METHODOLOGY', en: 'METHODOLOGY' } },
  { id: 'experience', label: { cn: '经历', en: 'Experience' } },
  { id: 'hobbies', label: { cn: '爱好', en: 'Hobbies' } },
  { id: 'contact', label: { cn: '联系', en: 'Contact' } }
];

export const aboutContent = {
  identity: {
    cn: '创意策略总监',
    en: 'Creative Strategist'
  },
  intro: {
    cn: `我叫张佳林，从事策略与创意工作，拥有6年广告传媒行业经验。
专注打造客户品牌为中心的创意方案。
擅长通过战略思维指导跨职能团队完成内容迭代，
为品牌提供消费者洞察 → 内容策略 → 营销物料全链路制作服务。
我的景观及城市规划跨学科背景，赋予了我结构化拆解、理性逻辑思维能力。
现居北京，希望寻找一个能够贡献我的专业能力并创造积极影响力的团队。`,
    en: `My name is Ally. I'm a Creative Strategist with 6 years of experience in the advertising and media industry, crafting customer-brand-centric solutions that balance strategy with creativity. With a focus on strategic thinking, I excel at guiding cross-functional teams through content iteration, delivering full-funnel services from consumer insights to content strategy to marketing materials production. My background in landscape architecture and urban planning has given me a structured approach to problem-solving and a strong sense of rational logic. Based in Beijing, I'm seeking a team where I can bring my expertise and drive meaningful impact.`
  },
  education: [
    { cn: '硕士 · 谢菲尔德大学 (QS82) · 2021-2022 · 建筑学院 · 城市设计专业', en: 'M.A. Urban Design · University of Sheffield (QS #82) · 2021-2022' },
    { cn: '本科 · 北京林业大学 (211) · 2017-2021 · 艺术设计学院 · 环境设计专业（景观方向）· 专业前5%', en: 'B.Des. Environmental Design · Beijing Forestry University (211) · 2017-2021 · Top 5%' }
  ]
};

export const works = [
  {
    id: 'bytedance',
    title: { cn: '全球化用户洞察与内容策略 · 字节跳动 2019—至今', en: 'Global Consumer Insight & Content Strategy · ByteDance 2019-Present' },
    tags: ['内容策略', 'A/B测试', '全球化'],
    challenge: {
      cn: ['字节跳动全球业务极速扩张，产品矩阵覆盖东南亚、北美、', '中东等文化迥异的市场。传统"一套素材打全球"模式', '既跟不上产品送代速度，也无法真正打动本地用户。'],
      en: ['ByteDance\'s global business expanded rapidly, with products covering Southeast Asia, North America, Middle East and other diverse markets. The traditional "one creative fits all" model could neither keep up with product iteration nor truly resonate with local users.']
    },
    approach: {
      cn: ['不做单纯的创意供应商，而是成为字节跳动产品团队的', '"外置创意大脑"。建立可持续的内容策略SOP：', '深度市场调研→三层内容策略→月度A/B测试→周维度', '数据复盘优化。'],
      en: ['Not just a creative vendor, but an "external creative brain" for ByteDance product teams.', 'Built a sustainable content strategy SOP: Deep research → Three-tier strategy → Monthly A/B testing → Weekly data review and optimization.']
    },
    impact: {
      cn: ['为60+国家提供本地化调研，其中US地区多条素材效果达投放效果均值70x。', '年均管理5万+素材交付，5家素材供应商，创作内容覆盖短视频、AIGC、', '动效、2D/3D动画、短剧等。'],
      en: ['Multiple US market creatives achieved 70x platform average performance.', 'Managed 50,000+ annual asset deliveries across 5 creative suppliers, covering short videos, AIGC, motion graphics, 2D/3D animation, short dramas, and more.']
    }
  },
  {
    id: 'universal',
    title: { cn: 'IP内容制作 · 环球影城 2025-2026 社媒内容策划', en: 'IP Content Production · Universal Beijing Resort 2025-2026' },
    tags: ['IP营销', '视频制作', '社交传播'],
    challenge: {
      cn: '世界娱乐园区在地特色节日营销，一直都是消费者讨论的焦点，如何让中国人产生情感共鸣、借IP向世界传达中国年味，2026环球新年 campaign ，如果不依赖流量明星，用什么建立真实的情感连接？',
      en: 'Holiday marketing at world resorts is always a hot topic. How do we connect emotionally with Chinese audiences and share Chinese New Year with the world through IP? For the 2026 New Year campaign, without celebrities — what builds a real connection?'
    },
    approach: {
      cn: '从"新年团聚"的集体情绪出发，以园区舞台演员群像出镜提炼情感锚点，粉丝们从没有在荧幕上看到他们。评论区聚集了园区很多忠实用户的真情反馈。主导本次活动创意概念 → 脚本策略 → 现场制片 → 后期交付全流程。',
      en: 'Started from the collective emotion of "New Year reunion," featuring the park\'s stage performers — faces fans have never seen on screen. Genuine comments from loyal park-goers flooded in. Led the full flow: concept → script strategy → on-site production → delivery.'
    },
    impact: {
      cn: '点赞958 / 转发332 / 推荐收藏209 / 评论209',
      en: '958 likes / 332 shares / 209 saves / 209 comments'
    },
    metrics: {
      cn: [{ label: '点赞', value: '958' }, { label: '转发', value: '332' }, { label: '推荐收藏', value: '209' }, { label: '评论', value: '209' }],
      en: [{ label: 'Likes', value: '958' }, { label: 'Shares', value: '332' }, { label: 'Saves', value: '209' }, { label: 'Comments', value: '209' }]
    }
  },
  {
    id: 'feihe',
    title: { cn: '场景化内容策略 · 飞鹤超新星奶酪新品上市', en: 'Scenario-based Content Strategy · Feihe Supernova Cheese Launch' },
    tags: ['内容策略', '品牌TVC广告', '场景营销'],
    challenge: {
      cn: '奶酪在中国市场仍属"认知教育期"，成人日常消费场景尚未建立；母婴赛道品牌扎堆讲营养配方，消费者审美疲劳。如何在信息过载的母婴赛道和全新的职场人赛道中，既保证专业感不被打折扣，又能让产品从竞品中跳出来？',
      en: 'Cheese in China is still in the education phase — adult usage not yet established, maternal market saturated. How do we keep professionalism intact and stand out in both the crowded maternal market and the brand-new workplace market?'
    },
    approach: {
      cn: '目标围绕真实生活场景，锁定"职场充能"和"儿童成长"两大高频场景，让消费者在具体的情境中自己"对号入座"。职场"牛马"下午三点需要快速充能、孩子运动后需要健康加餐，让产品被"需要"的。产出4条系列广告，客户随后追加小红书2年内容运营合作。',
      en: 'Rooted in real-life scenarios, targeting two high-frequency scenes — "workplace recharge" and "children\'s growth" — so consumers place themselves in the situation. The office "workhorse" needs a quick boost at 3pm; kids need a healthy snack after sports. Produced 4 campaign videos, and the client later added a 2-year Rednote content operations collaboration.'
    },
    impact: {
      cn: '产出4条系列广告，客户随后追加小红书内容运营合作。[待补充数据]',
      en: 'Produced 4 campaign videos. Client added Rednote operations collaboration. [Data pending]'
    }
  },
  {
    id: 'aigc',
    title: { cn: 'AIGC游戏品牌视频', en: 'AIGC Game Brand Video' },
    tags: ['AIGC', '游戏营销', '品牌视频'],
    challenge: {
      cn: '游戏品牌视频长期被高预算CG预算捆绑，角色渲染、复杂场景构建、数月制作周期是行业标配。证明AI生产流程可以交付同等级别的视觉冲击力，同时成本大幅压缩——且成片不能带"AI 味儿"，因为游戏玩家是最敏感的群体，任何不真实感都会触发排斥。',
      en: 'Game brand videos were long tied to high-budget CG — realistic rendering, complex scenes, months-long cycles are the industry standard. Prove the AI pipeline can deliver the same visual impact at a fraction of the cost — while the final cut must carry no "AI flavor," because gamers are the most sensitive audience and any unreality triggers rejection.'
    },
    approach: {
      cn: '将传统"实拍+CG"流程替代为AI驱动的全链路制作：AI生成角色与场景素材 → AI 辅助合成与特效 → 剪辑包装输出。产出的品牌TVC在视觉品质上达到平台投放标准，同时将制作周期缩短75%，成本降低96%。',
      en: 'Replaced the traditional "live-action + CG" pipeline with AI-driven full-chain production: AI-generated characters and scenes → AI-assisted compositing and effects → editing and packaging. The final brand TVC met platform ad standards, while cutting the production cycle by 75% and cost by 96%.'
    },
    impact: {
      cn: '成本从约¥20万/1个月压缩至¥8千/1周，周期缩短75%，成本降低96%。',
      en: 'Cost reduced from ~¥200K/month to ¥8K/week — 75% shorter cycle, 96% cost reduction.'
    }
  },
  {
    id: 'adidas',
    title: { cn: '艺人社交话题营销 · 半马练习生', en: 'Celebrity Social Campaign · Half Marathon Trainee' },
    tags: ['明星合作', '社交营销', '极限周期'],
    challenge: {
      cn: '阿迪达斯需要在极限周期内完成一支明星合作Social campaign：从创意策划到明星拍摄到最终成片交付，只给了一周半。压缩到这个程度意味着每个决策都必须一次做对。额外的复杂度在于：campaign 涉及特殊尺寸道具设计和制作，一旦方案确定，后续调整的空间极小，成本极易失控。',
      en: 'adidas needed a celebrity social campaign in an extreme timeline — concept to shoot to final delivery, squeezed into just one and a half weeks. At this pace, every decision must be right the first time. To add to the complexity, the campaign involved custom-sized prop design and production — once set, there was almost no room for adjustment, and costs could easily spiral.'
    },
    approach: {
      cn: '在1周 sprint 内交付同时证明：速度和预算不是必然矛盾——通过提报多种成本梯度的方案，让客户掌控品质与成本的平衡点，而我们保证无论选哪个方案，执行不打折，实现预算控制与客户预期管理。',
      en: 'Delivered within a 1-week sprint while proving speed and budget are not in conflict — by offering multiple cost-tiered options, the client controls the quality-cost balance, and we guarantee execution quality regardless of the choice, managing both budget and expectations.'
    },
    impact: {
      cn: '点赞3472 / 转发1244 / 推荐收藏747 / 评论216',
      en: '3,472 likes / 1,244 shares / 747 saves / 216 comments'
    },
    metrics: {
      cn: [{ label: '点赞', value: '3472' }, { label: '转发', value: '1244' }, { label: '推荐收藏', value: '747' }, { label: '评论', value: '216' }],
      en: [{ label: 'Likes', value: '3472' }, { label: 'Shares', value: '1244' }, { label: 'Saves', value: '747' }, { label: 'Comments', value: '216' }]
    }
  },
  {
    id: 'ai-projects',
    title: { cn: 'AI Mini Projects · Skills 开发', en: 'AI Mini Projects · Skills Development' },
    tags: ['Vibe Coding', 'AI工具', 'SOP'],
    approach: {
      cn: '将我自己的竞品调研和创意策略SOP通过vibe coding做成可复用的Skill，实现行业洞察与创意流程的自动化提效。',
      en: 'Turned my own competitor research and creative strategy SOPs into reusable Skills via vibe coding, automating industry insight and creative workflow efficiency.'
    },
    impact: {
      cn: '将3天工作量缩短为5分钟，搞定刚需信息收集调研对比等工作，让人更聚焦于洞察和决策。',
      en: 'Compressed 3 days of work into 5 minutes — handling information collection, research and comparison so people can focus on insight and decisions.'
    }
  }
];

export const methodologyContent = {
  title: { cn: '工作方法论', en: 'How I Work' },
  subtitle: { cn: '从洞察到复盘的完整闭环', en: 'Complete closed loop from insight to review' },
  steps: [
    {
      num: '01',
      title: { cn: '深度调研', en: 'Deep Research' },
      desc: { cn: '市场、行业、竞品、用户四维调研，建立本地化视角，让每一个策略都建立在真实洞察之上。调研不止于收集信息，更要追问"为什么"——读出用户没说出口的需求与决策背后的动机。以一手沟通与场景观察补足数据盲区，把模糊的Brief变成清晰的判断。', en: 'Four-dimensional research across market, industry, competitor and user, with a local lens — so every strategy stands on real insight. Research goes beyond gathering information to ask "why" — surfacing unspoken needs and the motives behind decisions. First-hand conversations and on-the-ground observation fill the gaps data misses, turning a vague brief into a clear judgment.' }
    },
    {
      num: '02',
      title: { cn: '策略构建', en: 'Strategy Building' },
      desc: { cn: '以三层内容策略体系拆解目标：品牌层定调性、种草层建共鸣、转化层促行动，并为不同人群匹配高频场景，让内容"对号入座"。好的策略不止是方向，更是可执行的决策——回答"对谁说、说什么、在哪儿说、何时说"，让品牌主张落到每一步动作上。', en: 'A three-tier content strategy breaks the goal down — brand sets tone, engagement builds resonance, conversion drives action — matched to high-frequency scenarios for each audience. A good strategy is not just a direction but executable decisions — answering "who we talk to, what we say, where and when" — turning brand positioning into concrete moves.' }
    },
    {
      num: '03',
      title: { cn: '创意执行', en: 'Creative Execution' },
      desc: { cn: '创意是策略的翻译器：从概念、脚本到交付的全流程，把品牌目标转化为可感知、可传播的内容。执行中既守住品牌调性，又兼顾品质与效率，让每一条创意都直接服务于品牌目标的实现。', en: 'Creative is the translator of strategy — turning brand goals into content people feel and share across concept, script and delivery. Every execution guards the brand\'s tone while balancing quality and efficiency, so each idea directly serves the brand\'s objectives.' }
    },
    {
      num: '04',
      title: { cn: '数据复盘', en: 'Data Review' },
      desc: { cn: '品牌战役看认知与共鸣，效果投放看转化与ROI，内容种草看互动与沉淀。以A/B测试和周期性复盘验证假设，拆解爆款逻辑，把成功因子沉淀为可复用的方法论，让每一轮投放都更接近目标。', en: 'Brand work is judged on awareness and resonance, performance media on conversion and ROI, content seeding on engagement and retention. A/B tests and recurring reviews validate assumptions and dissect what makes content work, distilling winning factors into reusable methodology so each round lands closer to the goal.' }
    }
  ]
};

export const experiences = [
  {
    period: '2019 年 — 至今',
    title: { cn: '品牌创意策略总监', en: 'Creative Strategist' },
    company: '联梦跳悦文化传媒(北京)有限公司 · 北京',
    highlights: {
      cn: '字节跳动国内外连续8年官方供应商，环球影城全国唯2供应商之一\n互联网公司创意自提报业务开创者，建立全流程体系\n负责业务排期、成本控制、报价管理、项目投标\n搭建公司品牌形象及内部管理架构',
      en: 'Official ByteDance supplier 8 yrs, one of 2 Universal Beijing suppliers\nPioneered creative self-submission for internet companies\nScheduling, cost control, bidding, and brand building'
    },
    brands: { cn: '合作品牌\n互联网：字节跳动（TikTok系列, CapCut, Lemon8, Tokopedia, Gauth, Melolo, fizzo, 飞书, 豆包, 红果等）DiDi, Alibaba阿里巴巴, bilibili, 腾讯游戏PUBG, 小红书\n消费品：Clarins娇韵诗, 飞鹤, 阿迪达斯, 麦当劳, 康师傅, 亨氏, 智己, 极越, 九号', en: 'Brands\nInternet: ByteDance (TikTok, CapCut, Lemon8, Tokopedia, Gauth, Melolo, fizzo, Feishu, Doubao, Hongguo etc.), DiDi, Alibaba, bilibili, Tencent Game PUBG, Rednote\nConsumer: Clarins, Feihe, adidas, McDonald\'s, Master Kong, Heinz, Zhiji, Jiyue, Ninebot' }
  },
  {
    period: '2022 — 2024',
    title: { cn: '城乡规划师', en: 'Urban-Rural Planner' },
    company: '中国中元国际工程有限公司 · 北京',
    highlights: {
      cn: '北京丰台方庄408.9公顷控制性详细规划（已获批）\n老挝万象滨河地块城市设计\n老挝琅勃拉邦旅游区概念规划\n乌兹别克斯坦塔什干新城规划设计',
      en: 'Beijing Fangzhuang 408.9ha detailed planning (approved)\nVientiane riverside urban design, Laos\nLuang Prabang tourism concept planning\nTashkent new town planning, Uzbekistan'
    }
  },
  {
    period: '2022 — 至今',
    title: { cn: '共创作者', en: 'Co-creator' },
    company: 'DDHStudio 帝都绘 · Freelancer',
    highlights: {
      cn: '《大运河》中国国家地理出版社（2024）\n《北京神奇建筑探索指南》（待出版）\n京张铁路遗址公园导视设计（2024）',
      en: '"The Grand Canal" — China National Geographic Press (2024)\n"Beijing Amazing Architecture Guide" (forthcoming)\nBeijing-Zhangjiakou Railway Park signage (2024)'
    }
  }
];

export const hobbiesContent = {
  title: { cn: '业余爱好', en: 'Hobbies' },
  subtitle: { cn: '工作之外的一些热爱', en: 'Passions beyond work' },
  description: {
    cn: '业余时间我喜欢手工，也在摄影和绘画中定格美好。',
    en: 'In my spare time, I run a crystal shop and enjoy photography and sketching.'
  },
  categories: [
    { name: { cn: '水晶', en: 'Crystal' }, color: '#c4a882' },
    { name: { cn: '摄影', en: 'Photography' }, color: '#8a9ba8' },
    { name: { cn: '手绘', en: 'Sketching' }, color: '#a8b5a0' }
  ]
};

export const footerContent = {
  heading: { cn: "Let's get to know each other", en: "Let's get to know each other" },
  subheading: { cn: '期待与您交流', en: 'Looking forward to connecting' },
  email: 'Jzhang0227@126.com',
  phone: '+86 17600010227'
};

export const heroScrollHint = {
  cn: '向下滚动',
  en: 'Scroll to explore'
};
