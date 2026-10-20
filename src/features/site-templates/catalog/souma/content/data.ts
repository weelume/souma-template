import type { TemplateLocale } from '../../../types'
export type Bilingual = { zh: string; en: string }
export const t = (value: Bilingual, locale: TemplateLocale) => value[locale]
export const nav = [
  ['about', '关于', 'About'], ['practice', '日常练习', 'Practice'], ['programs', '练习计划', 'Programs'], ['library', '课程', 'Classes'], ['philosophy', '理念', 'Philosophy'], ['pricing', '订阅', 'Pricing'], ['faq', '常见问题', 'FAQ'],
] as const
export const programs = [
  { title: { zh: '从基础开始', en: 'Begin with the basics' }, text: { zh: '认识呼吸与动作，在垫上找到属于自己的平衡。不需要柔韧的身体，只需要愿意开始。', en: 'A welcoming introduction to movement, breath, and finding your feet on the mat.' }, tag: { zh: '入门 · 舒缓', en: 'BEGINNER · GENTLE' }, image: 'practice.png' },
  { title: { zh: '温柔唤醒清晨', en: 'Wake up gently' }, text: { zh: '用轻盈流动的晨间练习舒展身体，让新的一天多一份从容。', en: 'Easy morning flows to stretch into the day with a little more intention.' }, tag: { zh: '晨间 · 活力', en: 'MORNING · ENERGIZING' }, image: 'morning.png' },
  { title: { zh: '慢下来 安顿自己', en: 'Slow down, settle in' }, text: { zh: '不赶时间的伸展与安静呼吸，为忙碌的一天留一个柔软的结尾。', en: 'Unhurried stretches and quiet breathing to create a softer end to your day.' }, tag: { zh: '夜晚 · 修复', en: 'EVENING · RESTORATIVE' }, image: 'evening.png' },
  { title: { zh: '让身体自在一些', en: 'Move a little more freely' }, text: { zh: '从一次小小的伸展开始，用灵活性练习找回日常活动的轻松感。', en: 'Thoughtful mobility sessions for everyday ease, one small stretch at a time.' }, tag: { zh: '随时 · 灵活', en: 'ANYTIME · MOBILITY' }, image: 'ritual.png' },
]
export const practices = [
  { name: { zh: '清晨新开始', en: 'A fresh start' }, detail: { zh: '15 分钟 · 舒缓流动', en: '15 min · Gentle flow' }, image: 'flow.png' },
  { name: { zh: '找回身体能量', en: 'Find your energy' }, detail: { zh: '20 分钟 · 活力流动', en: '20 min · Energizing flow' }, image: 'morning.png' },
  { name: { zh: '轻轻走入夜晚', en: 'Ease into evening' }, detail: { zh: '12 分钟 · 修复瑜伽', en: '12 min · Restorative yoga' }, image: 'evening.png' },
]
export const stories = [
  { quote: { zh: '你不需要变成另一个人才能开始。带着此刻的自己来就好，我们会在垫上与你相遇。', en: 'You don’t have to become a different person to begin. Just bring yourself, exactly as you are. We’ll meet you on the mat.' }, name: { zh: 'ELLIOT REED · 创始人', en: 'ELLIOT REED · FOUNDER' }, image: 'founder.png' },
  { quote: { zh: '垫上的十五分钟，成了我最期待的停顿。即使再忙，温和的引导也让我愿意开始。', en: 'Fifteen minutes on the mat has become my favourite pause. The gentle guidance makes it easy to begin, even on a busy day.' }, name: { zh: 'MAYA · 示例会员故事', en: 'MAYA · SAMPLE MEMBER STORY' }, image: 'maya.jpg' },
  { quote: { zh: '我曾以为瑜伽必须有某种标准模样。短短的练习，让我开始倾听身体，按照自己的节奏活动。', en: 'I used to think yoga had to look a certain way. These short practices help me listen to my body and move at my own pace.' }, name: { zh: 'ALEX · 示例会员故事', en: 'ALEX · SAMPLE MEMBER STORY' }, image: 'alex.jpg' },
]
export const plans = [
  { name: { zh: '免费', en: 'Free' }, badge: { zh: '从这里开始', en: 'GET STARTED' }, text: { zh: '温柔的起点', en: 'A gentle place to begin.' }, price: '$0', unit: { zh: '/ 永久', en: '/ forever' }, features: { zh: ['精选入门课程', '5–15 分钟日常练习', '基础呼吸引导', '练习提醒', '收藏喜爱的课程'], en: ['A selection of starter classes', '5–15 minute daily sessions', 'Introductory breathwork', 'Practice reminders', 'Save your favourite classes'] }, note: { zh: '无需付款', en: 'No payment needed.' } },
  { name: { zh: '按月订阅', en: 'Monthly' }, badge: { zh: '保持灵活', en: 'STAY FLEXIBLE' }, text: { zh: '每天多一点探索的空间', en: 'More room to explore, every day.' }, price: '$7', unit: { zh: '/ 月', en: '/ month' }, features: { zh: ['完整瑜伽与呼吸课程库', '多周引导练习计划', '下载课程离线练习', '练习提醒', '记录练习节奏'], en: ['Full yoga & breathwork library', 'Guided multi-week programs', 'Download classes for offline use', 'Practice reminders', 'Track your practice'] }, note: { zh: '每月 $7，仅为演示价格', en: '$7 billed monthly. Demo pricing.' } },
  { name: { zh: '按年订阅', en: 'Yearly' }, badge: { zh: '更好选择', en: 'BEST VALUE' }, text: { zh: '一整年 好好照顾自己', en: 'A year of showing up for yourself.' }, price: '$69', unit: { zh: '/ 年', en: '/ year' }, features: { zh: ['完整瑜伽与呼吸课程库', '多周引导练习计划', '下载课程离线练习', '练习提醒', '记录练习节奏'], en: ['Full yoga & breathwork library', 'Guided multi-week programs', 'Download classes for offline use', 'Practice reminders', 'Track your practice'] }, note: { zh: '每年 $69，约 $5.75 / 月', en: '$69 billed yearly · $5.75 / month.' } },
]
export const faqs = [
  { q: { zh: '没有瑜伽基础也能开始吗？', en: 'Can I start as a beginner?' }, a: { zh: '当然可以。从温和的基础练习开始，跟随引导，并保持自己的节奏。你不需要先变得柔软，才有资格开始。', en: 'Absolutely. Start with gentle foundations, follow the cues, and take every movement at your own pace. You don’t need to be flexible to begin.' } },
  { q: { zh: '每天需要多少时间？', en: 'How much time do I need?' }, a: { zh: '忙碌时选一个短练习，有空时再慢慢展开。即使只有几分钟，也可以给自己一个专注呼吸的片刻。', en: 'Make room for a short session when your day is full, or settle into a longer practice when you have time. Even a few mindful minutes can be a welcome pause.' } },
  { q: { zh: '需要准备哪些器材？', en: 'Do I need any equipment?' }, a: { zh: '一张瑜伽垫和可以舒展身体的小空间就够了。靠垫、折叠毛毯或瑜伽砖，可以帮助你更舒适。', en: 'A yoga mat and a little room to move are a good place to start. A cushion, folded blanket, or yoga blocks can help you feel more comfortable.' } },
  { q: { zh: '有哪些类型的练习？', en: 'What kinds of practice will I find?' }, a: { zh: '你可以探索舒缓瑜伽、活力流动、灵活性训练、安静呼吸，以及节奏更慢的晚间练习。', en: 'Explore gentle yoga, energizing flows, mobility, quiet breathing, and slower evening rituals.' } },
  { q: { zh: '在哪里下载应用？', en: 'Where can I download Souma?' }, a: { zh: '应用尚未上线。当前模板仅展示 iPhone 与 Android 下载入口，点击不会跳转或下载安装。', en: 'The app is coming to iPhone and Android. This template only demonstrates download buttons; no app is downloaded or installed.' } },
]
export const articles = [
  { slug: 'a-little-space', title: { zh: '为自己留一点空间', en: 'A little space for yourself' }, category: { zh: '日常练习', en: 'Daily practice' }, image: 'room.png', date: '2026-10-12', intro: { zh: '不必等到生活安静下来。一个角落、几次呼吸，就是今天的开始。', en: 'You do not have to wait for life to settle. A small corner and a few breaths can be enough to begin.' }, sections: [
    { title: { zh: '从一个小角落开始', en: 'Begin with a small corner' }, text: { zh: '找一处可以站稳、舒展双臂的地方。收起让你分心的物件，让脚底感受地面。这里不需要像专业教室，只需要让你愿意停留。', en: 'Find enough room to stand comfortably and stretch your arms. Put distractions aside and feel the floor beneath your feet. Your space does not need to look like a studio; it only needs to feel welcoming.' } },
    { title: { zh: '把目标变成邀请', en: 'Make it an invitation' }, text: { zh: '与其要求自己完成一整套练习，不如邀请自己先坐一分钟。观察呼吸，不急着改变它。今天的身体状态与昨天不同，也完全可以。', en: 'Instead of asking yourself to complete a whole practice, invite yourself to sit for one minute. Notice your breathing without rushing to change it. It is fine if your body feels different today.' } },
    { title: { zh: '让结束也有余地', en: 'Leave room at the end' }, text: { zh: '慢慢回到自然呼吸，再开始下一个日常动作。记下今天愿意再来的原因，比计算练了多久更有意义。本文为一般练习灵感；身体不适时请停止，并咨询专业人士。', en: 'Return to your natural breathing before moving into the rest of your day. Notice what would make you want to come back. This article offers general inspiration; stop if you feel discomfort and seek qualified guidance.' } },
  ] },
  { slug: 'morning-rhythm', title: { zh: '用十五分钟温柔开启清晨', en: 'A gentler rhythm for your morning' }, category: { zh: '身心节奏', en: 'Mindful living' }, image: 'morning.png', date: '2026-10-08', intro: { zh: '慢一点开始，并不会让一天落后。尝试用呼吸、轻伸展与一个小意图唤醒自己。', en: 'A slower start does not mean falling behind. Try meeting the morning with breath, gentle stretches, and one small intention.' }, sections: [
    { title: { zh: '先听见身体', en: 'Listen before you move' }, text: { zh: '起床后不急着追求大幅度动作。坐稳、放松肩膀，感受今天的精神与身体状态。用舒适的范围活动颈肩，而不是强迫身体达到某个角度。', en: 'After waking, take a moment before trying larger movements. Sit comfortably, soften your shoulders, and notice your energy. Move within a comfortable range rather than forcing a particular shape.' } },
    { title: { zh: '让动作跟随呼吸', en: 'Let movement follow breath' }, text: { zh: '吸气时轻轻延展，呼气时放松。选择熟悉的温和动作，在稳定而自然的呼吸里慢慢重复。需要休息时，就休息。', en: 'Gently lengthen as you breathe in and soften as you breathe out. Choose familiar, easy movements and repeat them with natural breathing. Take a break whenever you need one.' } },
    { title: { zh: '带着一个意图离开', en: 'Take one intention with you' }, text: { zh: '练习结束时，给今天选择一个简单的词：从容、专注，或温柔。不必把每一天都练成完美的一天，只要找到你愿意重复的小节奏。', en: 'Close with one simple intention: ease, attention, or kindness. You do not need to make every day perfect. Look for a small rhythm that you would like to repeat.' } },
  ] },
  { slug: 'evening-pause', title: { zh: '给忙碌的一天一个柔软的结尾', en: 'A softer landing at the end of the day' }, category: { zh: '身心节奏', en: 'Mindful living' }, image: 'calm.png', date: '2026-10-02', intro: { zh: '放下屏幕，放慢脚步。晚间练习可以只是一个安静的停顿。', en: 'Put the screen aside and slow your pace. An evening practice can simply be a quiet pause.' }, sections: [
    { title: { zh: '降低环境的音量', en: 'Turn down the volume' }, text: { zh: '调柔灯光，让通知暂时安静。找一个舒适的位置坐下，用片刻时间察觉身体里积攒的紧张，不急着判断或解决。', en: 'Soften the lights and pause notifications. Find a comfortable seat and notice where the day has left tension, without rushing to judge or fix it.' } },
    { title: { zh: '舒适优先', en: 'Choose comfort' }, text: { zh: '用毯子或靠垫支撑身体，选择轻柔、熟悉的伸展。晚间不需要追求更深、更久；让动作足够轻松，让呼吸保持自然。', en: 'Support yourself with a blanket or cushion and choose gentle, familiar stretches. You do not need to go deeper or stay longer. Keep movement easy and breathing natural.' } },
    { title: { zh: '允许今天结束', en: 'Let today come to a close' }, text: { zh: '最后停留一会，感受身体与地面的接触。没有完成的事可以留给明天。这段练习不是睡眠或医疗方案，只是一种照顾自己的日常方式。', en: 'Finish with a moment of stillness and feel the ground supporting you. Unfinished tasks can wait. This practice is not a sleep treatment or medical advice, simply an everyday way to care for yourself.' } },
  ] },
]
