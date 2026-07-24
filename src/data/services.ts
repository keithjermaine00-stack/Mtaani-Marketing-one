import {
  Globe, Megaphone, Search, ShieldCheck, Pen, Smartphone, BarChart2, Video, Mail, SmartphoneCharging,
  type LucideIcon,
} from 'lucide-react';
import type { ToolGroup } from '@/components/BrandIcon';

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  accent: string;
  heroHeadline: string;
  heroSubtext: string;
  overview: string;
  tools: ToolGroup;
  features: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: 'website-development',
    icon: Globe,
    title: 'Website Development',
    shortDescription:
      'High-converting, mobile-first websites designed to turn visitors into customers and establish your digital presence.',
    accent: '#1DB954',
    heroHeadline: 'Websites That Convert Visitors Into Customers',
    heroSubtext:
      'We build fast, responsive, SEO-friendly websites that serve as the foundation of your digital ecosystem.',
    overview:
      'Your website is the digital storefront of your business. We design and develop websites that are not only visually stunning but engineered for performance, conversion, and scalability. From landing pages to full corporate sites, every pixel and millisecond is optimized for impact.',
    tools: {
      title: 'Our Stack',
      icons: [
        { key: 'react', label: 'React' },
        { key: 'nodedotjs', label: 'Node.js' },
        { key: 'express', label: 'Express.js' },
        { key: 'supabase', label: 'Supabase' },
      ],
    },
    features: [
      { title: 'Mobile-First Design', description: 'Every site is built to look and perform flawlessly on mobile devices, where most of your audience lives.' },
      { title: 'Lightning-Fast Performance', description: 'Optimized assets, lazy loading, and modern frameworks ensure sub-second load times.' },
      { title: 'SEO-Ready Architecture', description: 'Semantic HTML, structured data, and clean URL structures give search engines exactly what they need.' },
      { title: 'Conversion-Optimized Layouts', description: 'Strategically placed CTAs, trust signals, and frictionless forms maximize your conversion rate.' },
      { title: 'CMS Integration', description: 'Manage your own content with a headless CMS or WordPress backend — your choice.' },
      { title: 'Analytics & Tracking', description: 'Google Analytics, Meta Pixel, and event tracking installed from day one.' },
    ],
    process: [
      { step: '01', title: 'Discovery & Strategy', description: 'We define your goals, audience, and competitive landscape to inform every design decision.' },
      { step: '02', title: 'Design & Prototype', description: 'Wireframes and high-fidelity mockups are created and refined with your feedback.' },
      { step: '03', title: 'Development', description: 'We build your site with modern, maintainable code and rigorous testing across devices.' },
      { step: '04', title: 'Launch & Optimize', description: 'After deployment, we monitor performance and iterate based on real user data.' },
    ],
    deliverables: [
      'Fully responsive, production-ready website',
      'CMS setup for self-managed content',
      'On-page SEO foundation',
      'Analytics and conversion tracking',
      '30 days of post-launch support',
    ],
    faqs: [
      { question: 'How long does a typical website take?', answer: 'A standard business website takes 2–4 weeks from kickoff to launch, depending on scope and content readiness.' },
      { question: 'Do you offer ongoing maintenance?', answer: 'Yes. We offer monthly maintenance plans that cover updates, backups, security monitoring, and content changes.' },
      { question: 'Can I update the site myself?', answer: 'Absolutely. We integrate a CMS so you can edit text, images, and pages without touching code.' },
    ],
  },
  {
    slug: 'mpesa-integration',
    icon: SmartphoneCharging,
    title: 'M-Pesa Integration',
    shortDescription:
      'Seamless Safaricom Daraja API integration for STK push, C2B, B2B, and automated payment confirmation on your site or app.',
    accent: '#41B549',
    heroHeadline: 'Accept M-Pesa Payments, Effortlessly',
    heroSubtext:
      'We integrate the Safaricom Daraja API so your customers pay with M-Pesa in seconds — with instant, verified confirmation.',
    overview:
      'M-Pesa is the dominant payment method in Kenya. We integrate the Safaricom Daraja API into your website, app, or backend so you can accept payments via STK push, C2B, and B2B — with real-time, secure confirmation callbacks that update your system automatically. From checkout buttons to automated reconciliation, we handle the full payment flow.',
    tools: {
      title: 'Our Stack',
      icons: [
        { key: 'mpesa', label: 'M-Pesa Daraja API' },
        { key: 'nodedotjs', label: 'Node.js' },
        { key: 'supabase', label: 'Supabase' },
      ],
    },
    features: [
      { title: 'STK Push Payments', description: 'Customers get a payment prompt on their phone — no account numbers to type. One tap to pay.' },
      { title: 'C2B & B2B Integration', description: 'Paybill and till-number flows for customer-to-business and business-to-business transactions.' },
      { title: 'Instant Confirmation', description: 'Secure callback URLs confirm every payment in real time and update your dashboard automatically.' },
      { title: 'Automated Reconciliation', description: 'Every transaction is logged, matched, and reconciled — no manual checking of M-Pesa statements.' },
      { title: 'Subscription & Recurring', description: 'Support for recurring M-Pesa payments for memberships, installments, and subscription plans.' },
      { title: 'Web & Mobile Ready', description: 'Works on your website, mobile app, or internal tools — any platform that can call an API.' },
    ],
    process: [
      { step: '01', title: 'Sandbox Setup', description: 'We register your app on the Safaricom Daraja portal and configure sandbox credentials for testing.' },
      { step: '02', title: 'Integration & Testing', description: 'We build the STK push, callback handling, and reconciliation logic, then test end-to-end in the sandbox.' },
      { step: '03', title: 'Go-Live', description: 'We switch to production credentials, submit your shortcode for approval, and deploy to your live environment.' },
      { step: '04', title: 'Monitor & Support', description: 'We monitor transactions, handle edge cases, and provide ongoing support as you scale.' },
    ],
    deliverables: [
      'Daraja API integration (STK push + callbacks)',
      'Payment confirmation and reconciliation logic',
      'Admin dashboard for transaction monitoring',
      'Documentation and handover',
      '30 days of post-launch support',
    ],
    faqs: [
      { question: 'Do I need a Paybill or till number?', answer: 'Yes. You need an existing Safaricom Paybill or till number. If you do not have one, we guide you through the application process.' },
      { question: 'How long does integration take?', answer: 'A standard STK push integration takes 3–5 days once sandbox credentials are set up. Production go-live depends on Safaricom approval.' },
      { question: 'Can you integrate M-Pesa into my existing site?', answer: 'Yes. We work with most platforms — custom sites, WordPress, Shopify, and mobile apps. Contact us with your setup for a specific quote.' },
    ],
  },
  {
    slug: 'social-media-marketing',
    icon: Megaphone,
    title: 'Social Media Marketing',
    shortDescription:
      'Strategic campaigns across Instagram, TikTok, Twitter, and LinkedIn that build community and drive measurable ROI.',
    accent: '#1DB954',
    heroHeadline: 'Build a Community That Drives Business',
    heroSubtext:
      'Data-informed social media strategies that grow your audience, spark engagement, and turn followers into customers.',
    overview:
      'Social media is where your audience discovers, evaluates, and connects with your brand. We craft platform-specific strategies that go beyond posting — building engaged communities, driving traffic, and generating leads through a mix of organic content and targeted amplification.',
    tools: {
      title: 'Platforms We Master',
      icons: [
        { key: 'tiktok', label: 'TikTok' },
        { key: 'instagram', label: 'Instagram' },
        { key: 'x', label: 'X (Twitter)' },
      ],
    },
    features: [
      { title: 'Platform-Specific Strategy', description: 'Tailored content strategies for Instagram, TikTok, X, LinkedIn, and Facebook — not one-size-fits-all.' },
      { title: 'Content Calendar Management', description: 'Consistent, on-brand posting schedules that keep your audience engaged and algorithms happy.' },
      { title: 'Community Engagement', description: 'Active comment management, DM responses, and relationship building with your followers.' },
      { title: 'Influencer Collaboration', description: 'We identify and coordinate with relevant creators to amplify your reach authentically.' },
      { title: 'Paid Social Amplification', description: 'Boost top-performing organic content with precision-targeted ad spend.' },
      { title: 'Performance Reporting', description: 'Monthly reports with clear KPIs: reach, engagement rate, follower growth, and conversions.' },
    ],
    process: [
      { step: '01', title: 'Audit & Strategy', description: 'We analyze your current presence, competitors, and audience to build a data-backed strategy.' },
      { step: '02', title: 'Content Creation', description: 'Our team produces graphics, reels, carousels, and copy aligned with your brand voice.' },
      { step: '03', title: 'Publishing & Engagement', description: 'We manage the calendar, post content, and actively engage with your community.' },
      { step: '04', title: 'Analyze & Optimize', description: 'Monthly reviews identify what is working and where to pivot for better results.' },
    ],
    deliverables: [
      'Monthly content calendar (12–20 posts)',
      'Custom graphics and short-form video content',
      'Community management (comments & DMs)',
      'Monthly performance report',
      'Quarterly strategy review',
    ],
    faqs: [
      { question: 'Which platforms should my business be on?', answer: 'It depends on your audience. We recommend platforms based on where your target customers spend their time and what content formats suit your brand.' },
      { question: 'Do you create the content or just manage it?', answer: 'Both. Our team handles content creation — graphics, video, copy — as well as scheduling and community management.' },
      { question: 'How soon will I see results?', answer: 'Organic growth typically shows momentum within 2–3 months. Paid amplification can accelerate results significantly.' },
    ],
  },
  {
    slug: 'seo-content-strategy',
    icon: Search,
    title: 'SEO & Content Strategy',
    shortDescription:
      'Data-driven SEO and compelling content that ranks you higher, drives organic traffic, and establishes authority.',
    accent: '#1DB954',
    heroHeadline: 'Rank Higher. Attract More. Convert Better.',
    heroSubtext:
      'We combine technical SEO with content strategy to build sustainable organic traffic that compounds over time.',
    overview:
      'Search engines are the gateway to your customers. We take a holistic approach to SEO — technical foundations, keyword strategy, content creation, and authority building — to move you up the rankings and keep you there. The result is a steady stream of qualified organic traffic that does not depend on ad spend.',
    tools: {
      title: 'Tools We Use',
      icons: [
        { key: 'googlesearchconsole', label: 'Google Search Console' },
        { key: 'googleanalytics', label: 'Google Analytics' },
        { key: 'lighthouse', label: 'Lighthouse' },
        { key: 'pagespeedinsights', label: 'PageSpeed Insights' },
      ],
    },
    features: [
      { title: 'Technical SEO Audit', description: 'A deep crawl of your site identifies indexing issues, speed bottlenecks, and structural problems.' },
      { title: 'Keyword Research', description: 'We map the search terms your customers use and prioritize by intent and opportunity.' },
      { title: 'Content Creation', description: 'Blog posts, landing pages, and guides written by humans, optimized for both readers and crawlers.' },
      { title: 'On-Page Optimization', description: 'Meta tags, headers, internal linking, and schema markup fine-tuned for every key page.' },
      { title: 'Link Building', description: 'Ethical, high-authority backlink acquisition through outreach and digital PR.' },
      { title: 'Local SEO', description: 'Google Business Profile optimization and local citation management for brick-and-mortar businesses.' },
    ],
    process: [
      { step: '01', title: 'Audit & Research', description: 'Full technical audit, competitor analysis, and keyword mapping to set the strategy.' },
      { step: '02', title: 'On-Page & Technical', description: 'We fix technical issues and optimize existing pages for target keywords.' },
      { step: '03', title: 'Content Production', description: 'A publishing cadence of optimized content targeting high-intent keywords.' },
      { step: '04', title: 'Authority Building', description: 'Ongoing link acquisition and performance tracking to compound your rankings.' },
    ],
    deliverables: [
      'Comprehensive SEO audit report',
      'Keyword strategy document',
      'Monthly optimized content (4–8 articles)',
      'On-page optimization for key pages',
      'Monthly ranking and traffic report',
    ],
    faqs: [
      { question: 'How long until I see SEO results?', answer: 'SEO is a long-term investment. Most clients see meaningful traffic growth within 3–6 months, with compounding gains thereafter.' },
      { question: 'Do you guarantee rankings?', answer: 'No reputable agency can guarantee #1 rankings. We guarantee a data-driven process, transparent reporting, and continuous optimization.' },
      { question: 'Do you write the content?', answer: 'Yes. Our content team produces SEO-optimized articles, landing pages, and guides tailored to your industry and audience.' },
    ],
  },
  {
    slug: 'paid-advertising-ppc',
    icon: BarChart2,
    title: 'Paid Advertising (PPC)',
    shortDescription:
      'Precision-targeted Google and Meta ad campaigns that maximize every shilling of your advertising budget.',
    accent: '#1DB954',
    heroHeadline: 'Every Shilling Spent Should Return More',
    heroSubtext:
      'We design, launch, and manage high-performance ad campaigns on Google, Meta, and beyond — optimized for ROAS.',
    overview:
      'Paid advertising is the fastest way to reach your target audience, but only when it is managed with precision. We build data-driven campaigns on Google Ads, Meta Ads, and other platforms — continuously testing and optimizing to lower your cost per acquisition and scale what works.',
    tools: {
      title: 'Platforms We Use',
      icons: [
        { key: 'meta', label: 'Meta Ads' },
        { key: 'googleads', label: 'Google Ads' },
      ],
    },
    features: [
      { title: 'Campaign Strategy', description: 'Full-funnel campaign architecture from awareness to retargeting to conversion.' },
      { title: 'Audience Targeting', description: 'Custom and lookalike audiences built from your data, competitor analysis, and market research.' },
      { title: 'Ad Creative Production', description: 'Scroll-stopping ad copy and visuals designed for each platform and placement.' },
      { title: 'A/B Testing', description: 'Continuous creative and landing page testing to find what drives the lowest CPA.' },
      { title: 'Conversion Tracking', description: 'Proper pixel and event setup so every conversion is attributed accurately.' },
      { title: 'Budget Optimization', description: 'Daily monitoring and reallocation to scale winners and cut wasted spend.' },
    ],
    process: [
      { step: '01', title: 'Strategy & Setup', description: 'We define goals, audiences, and campaign structure, then set up tracking.' },
      { step: '02', title: 'Creative & Launch', description: 'Ad copy, visuals, and landing pages are created and campaigns go live.' },
      { step: '03', title: 'Monitor & Test', description: 'Daily monitoring with continuous A/B testing of creatives and audiences.' },
      { step: '04', title: 'Scale & Report', description: 'We scale what works and provide transparent weekly and monthly reports.' },
    ],
    deliverables: [
      'Campaign strategy and architecture',
      'Ad creatives (copy + visuals)',
      'Conversion tracking setup',
      'Daily campaign management',
      'Weekly and monthly performance reports',
    ],
    faqs: [
      { question: 'What is the minimum ad spend?', answer: 'We recommend a minimum of KES 30,000/month in ad spend for meaningful data and results, though this varies by platform and industry.' },
      { question: 'How are your management fees structured?', answer: 'We charge a flat monthly management fee based on campaign complexity, separate from your ad spend. Contact us for a custom quote.' },
      { question: 'Which platforms do you manage?', answer: 'Google Ads (Search, Display, YouTube), Meta Ads (Facebook, Instagram), TikTok Ads, and LinkedIn Ads.' },
    ],
  },
  {
    slug: 'brand-identity-design',
    icon: Pen,
    title: 'Brand Identity & Design',
    shortDescription:
      'Logos, brand guides, and visual systems that communicate your story and resonate with your target audience.',
    accent: '#1DB954',
    heroHeadline: 'A Brand That People Remember and Trust',
    heroSubtext:
      'From logo to brand guidelines, we craft visual identities that tell your story and set you apart from the competition.',
    overview:
      'Your brand is more than a logo — it is the feeling people get when they interact with your business. We build cohesive brand identities that combine strategy, design, and storytelling to create a memorable presence across every touchpoint.',
    tools: {
      title: 'Design Tools',
      icons: [
        { key: 'photoshop', label: 'Photoshop' },
        { key: 'illustrator', label: 'Illustrator' },
        { key: 'blender', label: 'Blender' },
        { key: 'canva', label: 'Canva' },
      ],
    },
    features: [
      { title: 'Logo Design', description: 'Distinctive, scalable logos designed for every context from app icons to billboards.' },
      { title: 'Brand Guidelines', description: 'A complete guide covering logo usage, colors, typography, and tone of voice.' },
      { title: 'Visual System', description: 'Color palettes, typography, iconography, and graphic elements that unify your brand.' },
      { title: 'Marketing Collateral', description: 'Business cards, social media templates, presentations, and more — all on-brand.' },
      { title: 'Brand Strategy', description: 'Positioning, messaging, and personality that define how you connect with your audience.' },
      { title: 'Packaging Design', description: 'Shelf-ready packaging that protects your product and tells your story.' },
    ],
    process: [
      { step: '01', title: 'Brand Discovery', description: 'Workshops to understand your mission, audience, competition, and values.' },
      { step: '02', title: 'Concept Design', description: 'Multiple logo and visual direction concepts presented for your feedback.' },
      { step: '03', title: 'Refinement', description: 'We refine the chosen direction into a polished, complete identity system.' },
      { step: '04', title: 'Delivery', description: 'Final files, brand guidelines, and templates delivered in all needed formats.' },
    ],
    deliverables: [
      'Primary logo + variations',
      'Complete brand guidelines document',
      'Color palette and typography system',
      'Social media and presentation templates',
      'Source files (AI, SVG, PNG, PDF)',
    ],
    faqs: [
      { question: 'How many logo concepts do I get?', answer: 'We present 3 distinct logo concepts. You choose one and we refine it through two rounds of revisions.' },
      { question: 'Do you do rebrands?', answer: 'Yes. We have extensive experience modernizing existing brands while preserving their equity and recognition.' },
      { question: 'What if I need additional collateral later?', answer: 'We can produce additional collateral (brochures, packaging, etc.) as a follow-up engagement at a scoped rate.' },
    ],
  },
  {
    slug: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    shortDescription:
      'Scalable mobile and web applications built on modern stacks — designed for performance and growth.',
    accent: '#1DB954',
    heroHeadline: 'Apps That Your Users Love to Use',
    heroSubtext:
      'From MVP to scale, we build mobile and web applications with modern technology and a relentless focus on user experience.',
    overview:
      'Whether you need a customer-facing mobile app, an internal tool, or a progressive web app, we build software that is fast, reliable, and delightful to use. Our team handles everything from product design to deployment, using modern stacks that scale with your business.',
    tools: {
      title: 'Our Stack',
      icons: [
        { key: 'flutter', label: 'Flutter' },
        { key: 'kotlin', label: 'Kotlin Multiplatform' },
      ],
    },
    features: [
      { title: 'Cross-Platform Mobile', description: 'Flutter and Kotlin Multiplatform apps that run on iOS and Android from a shared codebase.' },
      { title: 'Progressive Web Apps', description: 'Web apps that feel native — installable, offline-capable, and lightning fast.' },
      { title: 'API & Backend', description: 'Scalable backend services, databases, and APIs built for performance and security.' },
      { title: 'UI/UX Design', description: 'Intuitive, accessible interfaces designed through research and user testing.' },
      { title: 'Cloud Deployment', description: 'CI/CD pipelines, cloud infrastructure, and monitoring for reliable production deployments.' },
      { title: 'Ongoing Support', description: 'Post-launch bug fixes, feature development, and performance monitoring.' },
    ],
    process: [
      { step: '01', title: 'Product Discovery', description: 'We define the problem, user personas, and feature set to build the right product.' },
      { step: '02', title: 'Design & Prototype', description: 'Wireframes, interactive prototypes, and user testing before a line of code.' },
      { step: '03', title: 'Development', description: 'Agile sprints with weekly demos, so you see progress and can course-correct.' },
      { step: '04', title: 'Launch & Scale', description: 'App store submission, deployment, and post-launch monitoring and iteration.' },
    ],
    deliverables: [
      'Production-ready mobile or web application',
      'Source code and documentation',
      'App store / Play Store submission',
      'CI/CD pipeline setup',
      '30 days of post-launch support',
    ],
    faqs: [
      { question: 'Native or cross-platform?', answer: 'We recommend cross-platform (Flutter or Kotlin Multiplatform) for most apps — it reduces cost and time while covering 95% of use cases. For specialized performance needs, we build native.' },
      { question: 'How much does an app cost?', answer: 'App projects vary widely. A simple MVP starts around KES 500,000, while complex apps scale from there. Contact us for a detailed quote.' },
      { question: 'Do you maintain the app after launch?', answer: 'Yes. We offer monthly support and maintenance plans, and can continue building features as your product grows.' },
    ],
  },
  {
    slug: 'video-motion-content',
    icon: Video,
    title: 'Video & Motion Content',
    shortDescription:
      'Scroll-stopping video production, reels, and motion graphics that captivate audiences across every platform.',
    accent: '#1DB954',
    heroHeadline: 'Video That Stops the Scroll and Starts the Conversation',
    heroSubtext:
      'From short-form reels to brand films, we produce video content that captures attention and drives engagement.',
    overview:
      'Video is the most consumed content format on the internet. We produce video across the full spectrum — from bite-sized social reels to polished brand films — with a focus on storytelling, quality, and platform-native formats that perform.',
    tools: {
      title: 'Editing Tools',
      icons: [
        { key: 'premierepro', label: 'Premiere Pro' },
        { key: 'aftereffects', label: 'After Effects' },
      ],
    },
    features: [
      { title: 'Short-Form Video', description: 'Reels, TikToks, and Shorts designed for maximum engagement and shareability.' },
      { title: 'Brand Films', description: 'Cinematic brand stories that communicate your mission and values.' },
      { title: 'Motion Graphics', description: 'Animated explainer videos, kinetic typography, and logo animations.' },
      { title: 'Product Videos', description: 'Showcase your product in action with clean, professional product videography.' },
      { title: 'Editing & Post-Production', description: 'Color grading, sound design, and editing that elevates raw footage.' },
      { title: 'Platform Optimization', description: 'Every video is formatted and captioned for the platform it will live on.' },
    ],
    process: [
      { step: '01', title: 'Concept & Script', description: 'We develop the creative concept, script, and storyboard for your video.' },
      { step: '02', title: 'Production', description: 'Filming or animation production with our team and equipment.' },
      { step: '03', title: 'Post-Production', description: 'Editing, color, sound, and motion graphics bring the video to life.' },
      { step: '04', title: 'Delivery', description: 'Final files delivered in all needed formats and aspect ratios.' },
    ],
    deliverables: [
      'Concept, script, and storyboard',
      'Filmed/animated video content',
      'Professional editing and color grading',
      'Sound design and music licensing',
      'Multiple formats for each platform',
    ],
    faqs: [
      { question: 'Do you handle filming or just editing?', answer: 'Both. We have a full production team for filming, as well as post-production capabilities. We can also edit footage you provide.' },
      { question: 'What is the turnaround time?', answer: 'Short-form social content typically takes 3–5 days. Brand films and complex motion graphics take 2–4 weeks.' },
      { question: 'Can you create a content series?', answer: 'Yes. We can produce a batch of reels or a video series in one production cycle to save time and cost.' },
    ],
  },
  {
    slug: 'email-marketing',
    icon: Mail,
    title: 'Email Marketing',
    shortDescription:
      'Automated, personalized email sequences that nurture leads and build lasting customer relationships.',
    accent: '#1DB954',
    heroHeadline: 'Email That Nurtures Leads Into Loyal Customers',
    heroSubtext:
      'We design automated email sequences and campaigns that deliver the right message at the right time.',
    overview:
      'Email remains one of the highest-ROI marketing channels. We build email programs that nurture leads, onboard customers, and drive repeat purchases — all powered by automation and personalized content that speaks to each subscriber.',
    tools: {
      title: 'Platform We Use',
      icons: [
        { key: 'mailchimp', label: 'Mailchimp' },
      ],
    },
    features: [
      { title: 'Automation Sequences', description: 'Welcome series, abandoned cart, re-engagement, and post-purchase flows.' },
      { title: 'Newsletter Design', description: 'Beautiful, on-brand newsletter templates that your audience looks forward to.' },
      { title: 'List Segmentation', description: 'Subscribers grouped by behavior, interests, and stage for targeted messaging.' },
      { title: 'A/B Testing', description: 'Subject lines, content, and send times tested to maximize open and click rates.' },
      { title: 'Deliverability Management', description: 'We monitor sender reputation and authentication to keep you out of the spam folder.' },
      { title: 'Performance Analytics', description: 'Open rates, click rates, and revenue attribution tracked per campaign and sequence.' },
    ],
    process: [
      { step: '01', title: 'Strategy & Setup', description: 'We define your email goals, map sequences, and set up your email platform.' },
      { step: '02', title: 'Content & Design', description: 'Email copy and visual templates are created and loaded into your platform.' },
      { step: '03', title: 'Automation Build', description: 'Sequences, triggers, and segmentation rules are configured and tested.' },
      { step: '04', title: 'Launch & Optimize', description: 'Campaigns go live and we optimize based on performance data.' },
    ],
    deliverables: [
      'Email strategy and sequence map',
      'Custom email templates',
      'Automation sequences (3–5 flows)',
      'Segmentation and tagging setup',
      'Monthly performance report',
    ],
    faqs: [
      { question: 'Which email platform do you use?', answer: 'We work with Mailchimp, Klaviyo, Brevo, and ConvertKit. We recommend the best fit for your business size and needs.' },
      { question: 'Do you write the email content?', answer: 'Yes. Our copywriters create all email content, and our designers build the visual templates.' },
      { question: 'How do you grow my email list?', answer: 'We implement lead magnets, opt-in forms, and pop-ups on your site, plus strategies to convert existing customers into subscribers.' },
    ],
  },
  {
    slug: 'digital-ecosystem-audit',
    icon: ShieldCheck,
    title: 'Digital Ecosystem Audit',
    shortDescription:
      'Comprehensive analysis of your entire digital presence — uncovering gaps and growth opportunities.',
    accent: '#1DB954',
    heroHeadline: 'Know Exactly Where You Stand and Where to Grow',
    heroSubtext:
      'A full diagnostic of your website, social media, SEO, ads, and competitors — with a prioritized action plan.',
    overview:
      'Before you invest in marketing, you need to know what is working and what is not. Our digital ecosystem audit examines every touchpoint — website, social media, SEO, paid ads, and competitors — and delivers a clear, prioritized roadmap for growth.',
    tools: {
      title: 'Audit Tools',
      icons: [
        { key: 'googlesearchconsole', label: 'Google Search Console' },
        { key: 'googleanalytics', label: 'Google Analytics' },
        { key: 'lighthouse', label: 'Lighthouse' },
        { key: 'pagespeedinsights', label: 'PageSpeed Insights' },
      ],
    },
    features: [
      { title: 'Website Audit', description: 'Performance, UX, conversion paths, and technical health of your website.' },
      { title: 'Social Media Review', description: 'Platform-by-platform analysis of content, engagement, and consistency.' },
      { title: 'SEO Health Check', description: 'Keyword rankings, backlink profile, technical issues, and content gaps.' },
      { title: 'Paid Ads Audit', description: 'Review of active campaigns for structure, creative, and ROAS.' },
      { title: 'Competitor Analysis', description: 'Side-by-side comparison with 3–5 competitors across all digital channels.' },
      { title: 'Action Roadmap', description: 'A prioritized, 90-day action plan with estimated impact and effort for each item.' },
    ],
    process: [
      { step: '01', title: 'Data Collection', description: 'We gather access to your platforms, analytics, and tools for a comprehensive review.' },
      { step: '02', title: 'Analysis', description: 'Our team analyzes each channel and benchmarks against competitors.' },
      { step: '03', title: 'Report Compilation', description: 'Findings are organized into a clear, visual report with insights and recommendations.' },
      { step: '04', title: 'Presentation', description: 'We walk you through the report and deliver a prioritized action plan.' },
    ],
    deliverables: [
      'Comprehensive audit report (30–50 pages)',
      'Competitor analysis matrix',
      'Prioritized 90-day action plan',
      'Live presentation walkthrough',
      '30-minute follow-up strategy call',
    ],
    faqs: [
      { question: 'How long does the audit take?', answer: 'The full audit takes 2–3 weeks depending on the size of your digital presence and access to platforms.' },
      { question: 'Do I need to implement the recommendations myself?', answer: 'You can, but most clients hire us to execute the prioritized recommendations. The audit fee can be credited toward implementation.' },
      { question: 'Is the audit a one-time thing?', answer: 'We recommend an annual audit to track progress and adapt to changes in the digital landscape. Many clients do quarterly check-ins.' },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug);
