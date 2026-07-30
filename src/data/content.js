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
  { id: 'methodology', label: { cn: '方法论', en: 'Methodology' } },
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
    cn: `我叫张佳林，从事策略与创意工作，拥有8年广告传媒行业经验。
专注打造富有深思与客户中心的创意方案。
擅长通过战略思维指导跨职能团队完成内容迭代，
为品牌提供消费者洞察 → 内容策略 → 营销物料全链路制作服务。
我的景观及城市规划跨学科背景，赋予了我结构化拆解、理性逻辑思维能力。
现居北京，希望寻找一个能够贡献我的专业能力并创造积极影响力的团队。`,
    en: `My name is Ally. I'm a Creative Strategist with 8 years of experience in the advertising and media industry, crafting thoughtful, client-centric solutions that balance strategy with creativity. With a focus on strategic thinking, I excel at guiding cross-functional teams through content iteration, delivering full-funnel services from consumer insights to content strategy to marketing materials production. My background in landscape architecture and urban planning has given me a structured approach to problem-solving and a strong sense of rational logic. Based in Beijing, I'm seeking a team where I can bring my expertise and drive meaningful impact.`
  },
  education: [
    { cn: '硕士 · 谢菲尔德大学 (QS82) · 2021-2022 · 建筑学院 · 城市设计专业', en: 'M.A. Urban Design · University of Sheffield (QS #82) · 2021-2022' },
    { cn: '本科 · 北京林业大学 (211) · 2017-2021 · 艺术设计学院 · 环境设计专业（景观方向）· 专业前5%', en: 'B.Des. Environmental Design · Beijing Forestry University (211) · 2017-2021 · Top 5%' }
  ]
};

export const works = [
  {
    id: 'bytedance',
    title: { cn: '全球化用户洞察与内容策略 · 字节跳动 2018—至今', en: 'Global Consumer Insight & Content Strategy · ByteDance 2018-Present' },
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
      cn: ['US地区多条素材效果达投放效果均值70x。年均管理5万+', '素材交付，5家素材供应商，创作内容覆盖短视频、AIGC、', '动效、2D/3D动画、短剧等。'],
      en: ['Multiple US market creatives achieved 70x platform average performance.', 'Managed 50,000+ annual asset deliveries across 5 creative suppliers, covering short videos, AIGC, motion graphics, 2D/3D animation, short dramas, and more.']
    }
  },
  {
    id: 'universal',
    title: { cn: 'IP内容制作 · 环球影城 2025-2026 社媒内容策划', en: 'IP Content Production · Universal Beijing Resort 2025-2026' },
    tags: ['IP营销', '视频制作', '社交传播'],
    challenge: {
      cn: 'IP品牌社媒运营的天然创作悖论：品牌审核极其严格——每一帧画面、每一个角色呈现都要层层审批——而社交媒体需要新鲜感、速度和情感共鸣。',
      en: 'The creative paradox of IP social media: Universal\'s brand review is extremely strict, while social media demands freshness, speed, and emotional resonance.'
    },
    approach: {
      cn: '从"新年团聚"的集体情绪出发，以园区舞台演员群像出镜提炼情感锚点。主导创意概念 → 脚本策略 → 现场制片 → 后期交付全流程。',
      en: 'Starting from the collective emotion of "New Year reunion," using ensemble of performers to create emotional anchors. Led end-to-end production.'
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
      cn: '奶酪在中国市场仍属"认知教育期"，成人日常消费场景尚未建立；母婴赛道品牌扎堆讲营养配方，消费者审美疲劳。',
      en: 'Cheese in China is still in the "education phase" — adult consumption scenarios not established; maternal market saturated with nutritional messaging.'
    },
    approach: {
      cn: '锁定"职场充能"和"儿童成长"两大高频场景，用系列病毒式短视频替代传统产品广告，让用户在会心一笑中完成代入。',
      en: 'Targeted two high-frequency scenarios: "workplace recharge" and "children\'s growth." Used viral short videos instead of traditional ads.'
    },
    impact: {
      cn: '产出4条系列广告，客户随后追加小红书内容运营合作。[待补充数据]',
      en: 'Produced 4 campaign videos. Client added Little Red Book operations collaboration. [Data pending]'
    }
  },
  {
    id: 'aigc',
    title: { cn: 'AIGC游戏品牌视频 · 《三国谋定天下》+ PUBGM 2025', en: 'AIGC Game Brand Video · Three Kingdoms + PUBGM 2025' },
    tags: ['AIGC', '游戏营销', '品牌视频'],
    challenge: {
      cn: '游戏品牌视频长期被高预算CG工作室垄断——写实角色渲染、复杂场景构建、数月制作周期是行业标配。',
      en: 'Game brand videos were monopolized by high-budget CG studios — realistic rendering, complex scenes, months-long cycles.'
    },
    approach: {
      cn: '搭建 Nanobanana → 即梦 → 剪映 AI 工具链，替代传统"实拍+CG"流程。AI生成角色与场景素材 → AI合成特效 → AI剪辑输出。',
      en: 'Built AI toolchain: Nanobanana → Jimeng → CapCut. Replaced traditional live-action + CG with AI-driven full-chain production.'
    },
    impact: {
      cn: '成本从约¥20万/1个月压缩至¥8千/1周，周期缩短75%，成本降低96%。',
      en: 'Cost reduced from ~¥200K/month to ¥8K/week — 75% shorter cycle, 96% cost reduction.'
    }
  },
  {
    id: 'adidas',
    title: { cn: '社交话题营销 · 阿迪达斯 2025', en: 'Social Campaign · adidas 2025' },
    tags: ['明星合作', '社交营销', '极限周期'],
    challenge: {
      cn: '阿迪达斯需要在5周极限周期内完成明星社交campaign：从创意策划到明星拍摄到最终交付。业内标准周期8-12周。',
      en: 'adidas needed a celebrity social campaign within a 5-week sprint — concept to shoot to delivery. Industry standard: 8-12 weeks.'
    },
    approach: {
      cn: '5周极限周期内从创意策划到明星拍摄到成片交付，零延期。提报3种道具方案供甲方选择，平衡预算与执行。',
      en: 'Delivered in 5 weeks, zero delays. Proposed 3 options for client choice, balancing budget and execution quality.'
    },
    impact: {
      cn: '点赞3472 / 转发1244 / 推荐收藏747 / 评论216',
      en: '3,472 likes / 1,244 shares / 747 saves / 216 comments'
    }
  },
  {
    id: 'ai-projects',
    title: { cn: 'AI Mini Projects · Skills 开发', en: 'AI Mini Projects · Skills Development' },
    tags: ['Vibe Coding', 'AI工具', 'SOP'],
    challenge: {
      cn: '将竞品调研、创意SOP做成可复用的AI工具，实现行业洞察与创意流程的自动化提效。',
      en: 'Transforming research and creative SOPs into reusable AI tools for automated creative workflow efficiency.'
    },
    approach: {
      cn: '开发本地化广告行业调研skill、广告创意SOP skill，通过vibe coding搭建个人网站和工作助手。',
      en: 'Developed localized ad industry research skills and creative SOP skills via vibe coding.'
    },
    impact: {
      cn: '实现创意流程的模块化、自动化，提升重复性工作的交付效率。',
      en: 'Modularized and automated creative workflows for improved delivery efficiency.'
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
      desc: { cn: '市场、行业、竞品、用户——双层本地化研究，让策略建立在真实洞察之上。', en: 'Market, industry, competitor, user — dual-layer localized research for genuine insights.' }
    },
    {
      num: '02',
      title: { cn: '策略构建', en: 'Strategy Building' },
      desc: { cn: '三层内容策略体系：品牌层定调性，种草层建共鸣，转化层促行动。', en: 'Three-tier strategy: Brand sets tone, Engagement builds resonance, Conversion drives action.' }
    },
    {
      num: '03',
      title: { cn: '创意执行', en: 'Creative Execution' },
      desc: { cn: '从脚本到交付的全流程管控，AIGC工具链提效，品质与效率兼得。', en: 'Full-process management from script to delivery with AIGC efficiency.' }
    },
    {
      num: '04',
      title: { cn: '数据复盘', en: 'Data Review' },
      desc: { cn: '周维度素材复盘，拆解爆款逻辑，将成功因子系统化、可复用。', en: 'Weekly creative review, dissecting viral logic into reusable success factors.' }
    }
  ]
};

export const experiences = [
  {
    period: '2018 — 至今',
    title: { cn: '品牌创意策略总监', en: 'Creative Strategist' },
    company: '联梦跳悦文化传媒(北京)有限公司 · 北京',
    highlights: {
      cn: '字节跳动国内外连续8年官方供应商，环球影城全国唯2供应商之一\n互联网公司创意自提报业务开创者，建立全流程体系\n负责业务排期、成本控制、报价管理、项目投标\n搭建公司品牌形象及内部管理架构',
      en: 'Official ByteDance supplier 8 yrs, one of 2 Universal Beijing suppliers\nPioneered creative self-submission for internet companies\nScheduling, cost control, bidding, and brand building'
    },
    brands: { cn: '合作品牌\n互联网：字节跳动（TikTok系列, CapCut, Lemon8, Tokopedia, Gauth, Melolo, fizzo, 飞书, 豆包, 红果等）DiDi, Alibaba阿里巴巴, bilibili, 腾讯游戏PUBG, 小红书\n消费品：Clarins娇韵诗, 飞鹤, 阿迪达斯, 麦当劳, 康师傅, 亨氏, 智己, 极越, 九号', en: 'Brands\nInternet: ByteDance (TikTok, CapCut, Lemon8, Tokopedia, Gauth, Melolo, fizzo, Feishu, Doubao, Hongguo etc.), DiDi, Alibaba, bilibili, Tencent Game PUBG, Xiaohongshu\nConsumer: Clarins, Feihe, adidas, McDonald\'s, Master Kong, Heinz, Zhiji, Jiyue, Ninebot' }
  },
  {
    period: '2023 — 2025',
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
    cn: '业余时间我喜欢手工，也喜欢在摄影和绘画中定格美好。',
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
